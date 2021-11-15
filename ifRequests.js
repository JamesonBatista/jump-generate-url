const user = require("./user");
const general = require("./general");
const body = require("./BodyJson");
function IfResolveBody(permissions, cpf, project) {
  var resultBody;
  if (project === "PF") {
    if (permissions == "Todas") resultBody = body.todas(cpf);

    if (permissions == "Operação de Crédito")
      resultBody = body.ope_credito(cpf);

    if (permissions == "Cartão de Crédito") resultBody = body.cart_credito(cpf);

    if (permissions == "Informações Complementares")
      resultBody = body.info_complementares(cpf);

    if (user.permissions == "Dados Cadastrais")
      resultBody = body.dados_cadastrais(cpf);

    if (permissions == "Dados Cadastrais e Informações complementares")
      resultBody = body.dados_e_infor(cpf);

    if (permissions == "Dados da conta") resultBody = body.dados_conta(cpf);

    if (permissions == "Operação de Credito | Cartão de crédito")
      resultBody = body.ope_credito_cartao_credit(cpf);
  } else {
    resultBody = body.generalPJ(cpf);
  }
  return resultBody;
}

function IfResolveEnvrironment(env) {
  var urlBase;
  if (env == "TH") urlBase = general.env_TH;

  if (env == "TU") urlBase = general.env_TU;

  if (env == "TI") urlBase = general.env_TI;

  return urlBase;
}

function IfResolveAud(env, project) {
  var urlBase;

  if (project == "PF") {
    if (env == "TH") urlBase = general.aud_TH;

    if (env == "TU") urlBase = general.aud_TU;

    if (env == "TI") urlBase = general.aud_TI;
  } else {
    if (env == "TU") urlBase = general.aud_PJ_TU;
    if (env == "TH") urlBase = general.aud_PJ_TH;
  }
  return urlBase;
}
function IfResolveHosts(env) {
  var urlBase;
  if (env == "TH") urlBase = general.host_TH;

  if (env == "TU") urlBase = general.host_TU;

  if (env == "TI") urlBase = general.host_TI;

  return urlBase;
}
function Hour() {
  function zero(value) {
    if (value < 9) return "0" + value;
    else return value;
  }

  var dataAtual = new Date();
  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth() + 1;
  var ano = dataAtual.getFullYear();
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var seconds = dataAtual.getSeconds();

  var date_full =
    zero(dia) +
    "/" +
    zero(mes) +
    "/" +
    ano +
    "  " +
    zero(horas) +
    ":" +
    zero(minutos) +
    ":" +
    zero(seconds);

  return date_full;
}

function IfClient_Id() {
  var clientId;
  if (user.TPP.toLowerCase() == "bradesco")
    clientId = general.client_id_BRADECO;

  if (user.TPP.toLowerCase() == "next") clientId = general.client_id_NEXT;

  return clientId;
}

module.exports = {
  IfResolveBody,
  IfResolveEnvrironment,
  IfResolveAud,
  IfResolveHosts,
  Hour,
  IfClient_Id,
};
