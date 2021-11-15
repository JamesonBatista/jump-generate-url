const user = require("./user");

module.exports = {
  endpoint_token: `${user.TPP.toLowerCase()}/open-banking/token`,
  endpoint_consents: `${user.TPP.toLowerCase()}/open-banking/consents/v1/consents`,
  endpoint_generateUrl: "marcas/tpp/request",
  space: "",
  env_TH: "https://api.openbanking.prebanco.com.br/",
  env_TU: "https://auth.api.tu.prebanco.com.br/",
  env_TI: "https://auth.api.ti.prebanco.com.br/",
  space_: "",
  aud_TH: `https://api.openbanking.prebanco.com.br/${user.TPP.toLowerCase()}/pf/open-banking`,
  aud_TU: `https://api.tu.prebanco.com.br/${user.TPP.toLowerCase()}/pf/open-banking`,
  aud_TI: `https://api.ti.prebanco.com.br/${user.TPP.toLowerCase()}/pf/open-banking`,
  aud_PJ_TU: "https://api.tu.prebanco.com.br/bradesco/pj/open-banking",
  aud_PJ_TH: "https://api.openbanking.prebanco.com.br/bradesco/pj/open-banking",

  space__: "",
  host_TH: "auth.api.prebanco.com.br",
  host_TU: "auth.api.tu.prebanco.com.br",
  host_TI: "auth.api.ti.prebanco.com.br",
  spaces: "",
  concatUrl_TH: `https://pf.api.prebanco.com.br/${user.TPP.toLowerCase()}/open-banking/authorize`,
  concatUrl_TU: `https://pf.api.tu.prebanco.com.br/${user.TPP.toLowerCase()}/open-banking/authorize`,
  concatUrl_TI: `https://pf.api.ti.prebanco.com.br/${user.TPP.toLowerCase()}/open-banking/authorize`,
  spaces_: "",
  client_id_NEXT: "7d55658e-369b-4d07-b1b3-73e6945ff9d3",
  client_id_BRADECO: "2d3d7e39-a219-49f1-bef6-9e673b6106aa",
  spaces___: "",
  contactPJ_TU:
    "https://pj.api.tu.prebanco.com.br/bradesco/open-banking/authorize",
  contactPJ_TH:
    "https://pj.api.prebanco.com.br/bradesco/open-banking/authorize",
};
