var request = require("request");
const httpsAgent = require("./Agents");
const general = require("./general");
const {
  IfResolveEnvrironment,
  IfResolveHosts,
  IfClient_Id,
} = require("./ifRequests");

function EnviToken(env) {
  const optionRequest = {
    host: IfResolveHosts(),
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    followAllRedirects: true,
    agent: httpsAgent,
    url: IfResolveEnvrironment(env) + general.endpoint_token,
    form: {
      client_id: IfClient_Id(),
      grant_type: "client_credentials",
      scope: "consents openid",
    },
  };

  return optionRequest;
}

module.exports = EnviToken;
