const db = require("../models");
const Type = db.type;
const validate = require("../validation/type.validation");

exports.create = async (req, res) => {
  // validate request
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  //  Create a Type
  const type = {
    name: req.body.name,
    category_id: req.body.category_id,
  };

  //   Save Type in the database
  await Type.create(type)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Type",
      });
    });
};

exports.findAll = (req, res) => {
  Type.findAll({ where: { is_deleted: 0 }, include: ["category"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieving Categories",
      });
    });
};

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;

  Type.findOne({ where: { id: id, is_deleted: 0 }, include: ["category"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Type with id = " + id + " " + err,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  Type.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "Type was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Type with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Type with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  Type.update(
    {
      is_deleted: true,
    },
    {
      where: { id: id, is_deleted: 0 },
    }
  )
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "Type was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Type with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Type with id = " + id,
      });
    });
};
