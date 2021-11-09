const https = require("https");
const fs = require("fs");

var certificate = fs
  .readFileSync(__dirname + "/certs/tpp-valid-new.crt")
  .toString();
var pem_certificate = fs
  .readFileSync(__dirname + "/certs/tpp-valid-new.pem")
  .toString();

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
  cert: certificate,
  key: pem_certificate,
});

module.exports = httpsAgent;
