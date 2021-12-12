const httpsAgent = require("./Agents");
const general = require("./general");
const {
  IfClient_Id,
  IfResolveAud,
  IfResolveEnvrironment,
} = require("./ifRequests");

function RequestGenerateUrl(consent, env, project) {
  var genurl = {
    client_id: IfClient_Id(),
    consent_id: consent,
    redirect_uri: "https://www.bradesco.com.br/mock2",
    brand: "bradesco",
    aud: IfResolveAud(env, project),
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
