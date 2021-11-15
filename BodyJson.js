const data = require("./user");

function todas(cpfUser) {
  let cpf = cpfUser;
  var cpf1 = cpf.replaceAll(".", "");
  var cpf2 = cpf1.replaceAll(",", "");
  var cpf3 = cpf2.replaceAll("-", "");
  cpf = cpf3;
  return JSON.stringify({
    data: {
      loggedUser: {
        document: {
          identification: cpf,
          rel: "CPF",
        },
      },
      permissions: [
        "LOANS_READ",
        "LOANS_WARRANTIES_READ",
        "LOANS_PAYMENTS_READ",
        "LOANS_SCHEDULED_INSTALMENTS_READ",
        "FINANCINGS_READ",
        "FINANCINGS_WARRANTIES_READ",
        "FINANCINGS_PAYMENTS_READ",
        "FINANCINGS_SCHEDULED_INSTALMENTS_READ",
        "UNARRANGED_ACCOUNTS_OVERDRAFT_READ",
        "UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ",
        "UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ",
        "UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ",
        "INVOICE_FINANCINGS_READ",
        "INVOICE_FINANCINGS_WARRANTIES_READ",
        "INVOICE_FINANCINGS_PAYMENTS_READ",
        "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
        "CREDIT_CARDS_ACCOUNTS_READ",
        "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
        "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
        "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
        "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
        "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
        "ACCOUNTS_READ",
        "ACCOUNTS_BALANCES_READ",
        "ACCOUNTS_OVERDRAFT_LIMITS_READ",
        "ACCOUNTS_TRANSACTIONS_READ",
        "RESOURCES_READ",
      ],
      expirationDateTime: "2021-12-21T08:30:00Z",
    },
  });
}

function ope_credito(cpfUser) {
  let cpf = cpfUser;
  var cpf1 = cpf.replaceAll(".", "");
  var cpf2 = cpf1.replaceAll(",", "");
  var cpf3 = cpf2.replaceAll("-", "");
  cpf = cpf3;
  return JSON.stringify({
    data: {
      loggedUser: {
        document: {
          identification: cpf,
          rel: "CPF",
        },
      },
      permissions: [
        "LOANS_READ",
        "LOANS_WARRANTIES_READ",
        "LOANS_PAYMENTS_READ",
        "LOANS_SCHEDULED_INSTALMENTS_READ",
        "FINANCINGS_READ",
        "FINANCINGS_WARRANTIES_READ",
        "FINANCINGS_PAYMENTS_READ",
        "FINANCINGS_SCHEDULED_INSTALMENTS_READ",
        "UNARRANGED_ACCOUNTS_OVERDRAFT_READ",
        "UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ",
        "UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ",
        "UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ",
        "INVOICE_FINANCINGS_READ",
        "INVOICE_FINANCINGS_WARRANTIES_READ",
        "INVOICE_FINANCINGS_PAYMENTS_READ",
        "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
        "RESOURCES_READ",
      ],
      expirationDateTime: "2021-12-21T08:30:00Z",
      transactionFromDateTime: "2021-10-20T00:00:00Z",
      transactionToDateTime: "2021-10-20T23:59:59Z",
    },
  });
}
function cart_credito(cpfUser) {
  let cpf = cpfUser;
  var cpf1 = cpf.replaceAll(".", "");
  var cpf2 = cpf1.replaceAll(",", "");
  var cpf3 = cpf2.replaceAll("-", "");
  cpf = cpf3;
  return JSON.stringify({
    data: {
      loggedUser: {
        document: {
          identification: cpf,
          rel: "CPF",
        },
      },
      permissions: [
        "CREDIT_CARDS_ACCOUNTS_READ",
        "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
        "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
        "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
        "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
        "RESOURCES_READ",
      ],
      expirationDateTime: "2021-12-21T08:30:00Z",
      transactionFromDateTime: "2021-10-20T00:00:00Z",
      transactionToDateTime: "2021-10-20T23:59:59Z",
    },
  });
}
function ope_credito_cartao_credit(cpfUser) {
  let cpf = cpfUser;
  var cpf1 = cpf.replaceAll(".", "");
  var cpf2 = cpf1.replaceAll(",", "");
  var cpf3 = cpf2.replaceAll("-", "");
  cpf = cpf3;

  return JSON.stringify({
    data: {
      loggedUser: {
        document: {
          identification: cpf,
          rel: "CPF",
        },
      },
      permissions: [
        "LOANS_READ",
        "LOANS_WARRANTIES_READ",
        "LOANS_PAYMENTS_READ",
        "LOANS_SCHEDULED_INSTALMENTS_READ",
        "FINANCINGS_READ",
        "FINANCINGS_WARRANTIES_READ",
        "FINANCINGS_PAYMENTS_READ",
        "FINANCINGS_SCHEDULED_INSTALMENTS_READ",
        "UNARRANGED_ACCOUNTS_OVERDRAFT_READ",
        "UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ",
        "UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ",
        "UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ",
        "INVOICE_FINANCINGS_READ",
        "INVOICE_FINANCINGS_WARRANTIES_READ",
        "INVOICE_FINANCINGS_PAYMENTS_READ",
        "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
        "CREDIT_CARDS_ACCOUNTS_READ",
        "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
        "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
        "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
        "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
        "RESOURCES_READ",
      ],
      expirationDateTime: "2021-12-21T08:30:00Z",
      transactionFromDateTime: "2021-10-20T00:00:00Z",
      transactionToDateTime: "2021-10-20T23:59:59Z",
    },
  });
}

function info_complementares(cpfUser) {
  let cpf = cpfUser;
  var cpf1 = cpf.replaceAll(".", "");
  var cpf2 = cpf1.replaceAll(",", "");
  var cpf3 = cpf2.replaceAll("-", "");
  cpf = cpf3;
  return JSON.stringify({
    data: {
      loggedUser: {
        document: {
          identification: cpf,
          rel: "CPF",
        },
      },
      permissions: ["CUSTOMERS_PERSONAL_ADITTIONALINFO_READ", "RESOURCES_READ"],
      expirationDateTime: "2021-12-21T08:30:00Z",
      transactionFromDateTime: "2021-10-20T00:00:00Z",
      transactionToDateTime: "2021-10-20T23:59:59Z",
    },
  });
}

function dados_cadastrais(cpfUser) {
  let cpf = cpfUser;
  var cpf1 = cpf.replaceAll(".", "");
  var cpf2 = cpf1.replaceAll(",", "");
  var cpf3 = cpf2.replaceAll("-", "");
  cpf = cpf3;

  return JSON.stringify({
    data: {
      loggedUser: {
        document: {
          identification: cpf,
          rel: "CPF",
        },
      },
      permissions: [
        "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
        "RESOURCES_READ",
      ],
      expirationDateTime: "2021-12-21T08:30:00Z",
      transactionFromDateTime: "2021-10-20T00:00:00Z",
      transactionToDateTime: "2021-10-20T23:59:59Z",
    },
  });
}
function dados_e_infor(cpfUser) {
  let cpf = cpfUser;
  var cpf1 = cpf.replaceAll(".", "");
  var cpf2 = cpf1.replaceAll(",", "");
  var cpf3 = cpf2.replaceAll("-", "");
  cpf = cpf3;

  return JSON.stringify({
    data: {
      loggedUser: {
        document: {
          identification: cpf,
          rel: "CPF",
        },
      },
      permissions: [
        "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
        "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
        "RESOURCES_READ",
      ],
      expirationDateTime: "2021-12-21T08:30:00Z",
      transactionFromDateTime: "2021-10-20T00:00:00Z",
      transactionToDateTime: "2021-10-20T23:59:59Z",
    },
  });
}

function dados_conta(cpfUser) {
  let cpf = cpfUser;
  var cpf1 = cpf.replaceAll(".", "");
  var cpf2 = cpf1.replaceAll(",", "");
  var cpf3 = cpf2.replaceAll("-", "");
  cpf = cpf3;

  return JSON.stringify({
    data: {
      loggedUser: {
        document: {
          identification: cpf,
          rel: "CPF",
        },
      },
      permissions: [
        "ACCOUNTS_READ",
        "ACCOUNTS_BALANCES_READ",
        "ACCOUNTS_OVERDRAFT_LIMITS_READ",
        "ACCOUNTS_TRANSACTIONS_READ",
        "RESOURCES_READ",
      ],
      expirationDateTime: "2021-12-21T08:30:00Z",
      transactionFromDateTime: "2021-10-20T00:00:00Z",
      transactionToDateTime: "2021-10-20T23:59:59Z",
    },
  });
}
function generalPJ(cpfUser) {
  let cpf = cpfUser;
  var cpf1 = cpf.replaceAll(".", "");
  var cpf2 = cpf1.replaceAll(",", "");
  var cpf3 = cpf2.replaceAll("-", "");
  cpf = cpf3;
  // 273880350001-04
  // identification: 86081459000182,
  //
  return JSON.stringify({
    data: {
      loggedUser: {
        document: {
          identification: cpfUser,
          rel: "CPF",
        },
      },
      businessEntity: {
        document: {
          identification: 86081459000182,
          rel: "CNPJ",
        },
      },
      permissions: [
        "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
        "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
        "RESOURCES_READ",
      ],
      expirationDateTime: "2022-10-21T08:30:00Z",
      transactionFromDateTime: "2021-09-01T00:00:00Z",
      transactionToDateTime: "2021-09-01T23:59:59Z",
    },
  });
}
module.exports = {
  todas,
  ope_credito,
  cart_credito,
  info_complementares,
  dados_cadastrais,
  dados_e_infor,
  dados_conta,
  ope_credito_cartao_credit,
  generalPJ,
};
