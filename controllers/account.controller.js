const db = require("../models");
const Account = db.account;
const sendEmail = require("../common/emailSignup");


const validate = require("../validation/account.validation");

exports.create = (req, res) => {
  // validate request
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  //  Create a Order
  const account = {
    email: req.body.email,
    password: req.body.password,
    user_level: req.body.user_level,
  };

  //   Save order in the database
  Account.create(account)
    .then((data) => {
      if (account.user_level === 1) {
        sendEmail(account.email);
      }
      // if (account.user_level === 3) {
      //   sendEmailDriver(account.email,account.password);
      // }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the Accounting",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  Account.findAll({
    where: { is_deleted: 0 },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Accounts",
      });
    });
};

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;
  Account.findOne({
    where: { id: id, is_deleted: 0 },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Account with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  Account.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Account was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Account with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Account with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  Account.update(
    {
      is_deleted: true,
    },
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Account was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete Account with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Account with id = " + id,
      });
    });
};
