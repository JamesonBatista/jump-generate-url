const httpsAgent = require("./Agents");
const general = require("./general");
const { IfResolveEnvrironment, IfResolveBody } = require("./ifRequests");
const user = require("./user");

function RequestConsent(accessToken, env, permission, cpf, project) {
  var requestOptions = {
    method: "POST",
    url: IfResolveEnvrironment(env) + general.endpoint_consents,
    headers: {
      "x-jws-signature": "xpto-123-abc-456",
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: IfResolveBody(permission, cpf, project),
    followAllRedirects: true,
    agent: httpsAgent,
  };
  return requestOptions;
}

module.exports = RequestConsent;
