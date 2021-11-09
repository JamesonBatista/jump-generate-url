const user = require("./user");
const { rootEmail, password } = require("./root");
const general = require("./general");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const { Hour } = require("./ifRequests");

const SendToEmail = (message, i, env, permissions, user, cpf, email) => {
  var urlBase;
  if (env == "TH") urlBase = general.concatUrl_TH;

  if (env == "TU") urlBase = general.concatUrl_TU;

  if (env == "TI") urlBase = general.concatUrl_TI;

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
  var title =
    "Env: " +
    env +
    " | " +
    "Permissão: " +
    permissions +
    " | " +
    "User: " +
    user +
    " | " +
    "CPF: " +
    cpf +
    " |  Envio: " +
    Hour() +
    " | E-mail: " +
    i;
  var mailOptions = {
    from: rootEmail,
    to: email,
    subject: title,
    text: urlBase + message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("*****  OK -  " + i + "  ******\n");
    }
  });
};

module.exports = SendToEmail;
