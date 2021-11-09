const httpsAgent = require("./Agents");
const general = require("./general");
const {
  IfClient_Id,
  IfResolveAud,
  IfResolveEnvrironment,
} = require("./ifRequests");
const user = require("./user");

function RequestGenerateUrl(consent, env) {
  var genurl = {
    client_id: IfClient_Id(),
    consent_id: consent,
    redirect_uri: "https://www.bradesco.com.br/mock1",
    brand: user.TPP.toLowerCase(),
    aud: IfResolveAud(env),
  };
  var requestOptions = {
    method: "GET",
    headers: genurl,
    followAllRedirects: true,
    agent: httpsAgent,
    url: IfResolveEnvrironment(env) + general.endpoint_generateUrl,
  };

  return requestOptions;
}
module.exports = RequestGenerateUrl;
