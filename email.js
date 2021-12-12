const { rootEmail, password } = require("./root");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const { Hour } = require("./ifRequests");

const SendToEmail = (title, urlBase, email, i) => {
  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: rootEmail,
        pass: password,
      },
    })
  );

  var mailOptions = {
    from: rootEmail,
    to: email,
    subject: title,
    text: urlBase,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("*****  OK -  " + i + "  ******" + Hour() + " \n");
    }
  });
};

module.exports = SendToEmail;
