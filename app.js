const express = require("express");
const cors = require("cors");
var request = require("request");

const https = require("https");
const http = require("http");

const fs = require("fs");
const RequestConsent = require("./consents");
const RequestGenerateUrl = require("./generateUrl");
const SendToEmail = require("./email");
const bodyParser = require("body-parser");
const { Hour } = require("./ifRequests");
const EnviToken = require("./token");
const general = require("./general");
const app = express();
app.use(cors());
app.use(
  bodyParser.json({
    limit: "10000kb",
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "10000kb",
    extended: true,
  })
);

app.post("/token", (req, res) => {
  var info = req.body;

  var number = parseInt(info.quantify);

  for (let i = 1; i < number + 1; i++) {
    console.log(info);

    request.post(EnviToken(info.env), (error, response, body) => {
      var json = JSON.parse(response.body);
      // console.log(json.access_token);
      request.post(
        RequestConsent(
          json.access_token,
          info.env,
          info.permissions,
          info.cpf,
          info.project
        ),
        (error, response, body) => {
          var consents = JSON.parse(response.body);
          // console.log(consents.data.consentId);

          request.post(
            RequestGenerateUrl(consents.data.consentId, info.env, info.project),

            (error, response, body) => {
              var json = JSON.parse(response.body);
              let uri = json.uri.substring(31);
              let uriReplace = uri.replaceAll(" ", "%20");

              var urlBase;
              if (info.project == "PF") {
                if (info.env == "TH") urlBase = general.concatUrl_TH;

                if (info.env == "TU") urlBase = general.concatUrl_TU;

                if (info.env == "TI") urlBase = general.concatUrl_TI;
              } else {
                if (info.env == "TU") urlBase = general.contactPJ_TU;

                if (info.env == "TH") urlBase = general.contactPJ_TH;
              }
              var title =
                "Env: " +
                info.env +
                " | " +
                "Projeto: " +
                info.project +
                " | " +
                "Permissão: " +
                info.permissions +
                " | " +
                "User: " +
                info.name +
                " | " +
                "CPF: " +
                info.cpf +
                " |  Envio: " +
                Hour() +
                " | E-mail: " +
                i;

              // SendToEmail(title, urlBase + uriReplace, info.emails, i);

              res.send(
                JSON.stringify({ title: title, url: urlBase + uriReplace })
              );
            }
          );
        }
      );
    });
  }
});

// Listen both http & https ports
const httpServer = http.createServer(app);
const httpsServer = https.createServer(
  {
    key: fs.readFileSync(__dirname + "/certs/tpp-valid-new.pem").toString(),
    cert: fs.readFileSync(__dirname + "/certs/tpp-valid-new.crt").toString(),
  },
  app
);

httpServer.listen(8000, () => {
  console.log("HTTP Server running on port 8000");
});
