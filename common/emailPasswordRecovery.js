const nodemailer = require("nodemailer");
module.exports = async (email) => {
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
    subject: "Account has been created",
    html: `<h1>Welcome to AR Magic</h1><br />
            <p>Thank you for signing. We're delighted to have you here. We are hoping to bring the finest possible service to make your dream house true.</p>
            <a href='https://drive.google.com/file/d/1rLOdqUpsGY-tCpy_X-nYINiSaDJ6PJpc/view?usp=sharing'>This is the link for the user manual</a>`,
  };

  try {
    let info = await transporter.sendMail(options);
    // console.log(info.response);
  } catch (error) {
    console.log(error);
  }
};
