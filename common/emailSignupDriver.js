const nodemailer = require("nodemailer");
module.exports = async (email,password) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ucscarmagic@gmail.com",
      pass: "TYPucsc123",
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const options = {
    from: "ucscarmagic@gmail.com",
    to: email,
    subject: "Driver Account has been created",
    html: `<h1>Welcome to AR Magic Family</h1><br />
            <p>Thank you for joining. We're delighted to have you here. We are hoping to bring the finest possible service to make customer happy!!</p>
            <p>Login Credentials Following here....</p>
            <p>Email:: ${email}</p>
            <p>Passowrd:: ${password}
            <a href='https://drive.google.com/file/d/1rLOdqUpsGY-tCpy_X-nYINiSaDJ6PJpc/view?usp=sharing'>This is the link for the user manual</a>`,
  };

  try {
    let info = await transporter.sendMail(options);
  } catch (error) {
    console.log(error);
  }
};
