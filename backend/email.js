const nodemailer = require("nodemailer");
const email = (email) => {
  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abhaykushwah1999@gmail.com",
      pass: "abhaytest123",
    },
  });

  let mailOptions = {
    from: "abhaykushwah1999@gmail.com",
    to: email,
    subject: "TutorHub",
    text: "Signed up succesfully",
  };
  transport.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("err", err);
    } else {
      console.log("sent");
    }
  });
};
module.exports = email;
