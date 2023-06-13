
const logoutButton = new LogoutButton();

logoutButton.action = () => {
    const callback = (response) => {
        if (response.success) {
          location.reload();
        }
      };
      ApiConnector.logout(callback);
}
////////////////////////

ApiConnector.current((response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
    }
  })


  //////////////

const ratesBoard = new RatesBoard()


const requestRatesBoard = () => {

    ApiConnector.getStocks((response) => {

        if (response.success) {
            ratesBoard.clearTable()
            ratesBoard.fillTable(response.data)
         }
    })
     
}

requestRatesBoard()
setInterval(() => requestRatesBoard(), 60000)

///////////////

const moneyManager = new MoneyManager();

moneyManager.addMoneyCallback = ({currency, amount}) => {

  const callback = (response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
      moneyManager.setMessage(response.success, `Счет ${currency} успешно пополнен на ${amount} ${currency}`);
    } else {
      moneyManager.setMessage(response.success, response.error);
    }
  };

    ApiConnector.addMoney({currency, amount}, callback)
}


////////////////////////////

moneyManager.conversionMoneyCallback = ({fromCurrency, targetCurrency, fromAmount}) => {
  const callback = (response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
      moneyManager.setMessage(response.success, `${fromAmount} ${fromCurrency} успешно переведен(ы) в ${targetCurrency}`);
    } else {
      moneyManager.setMessage(response.success, response.error);
    }
  };
  ApiConnector.convertMoney({fromCurrency, targetCurrency, fromAmount}, callback);
};

///////////////////

moneyManager.sendMoneyCallback = ({to, currency, amount}) => {
  const callback = (response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
      moneyManager.setMessage(response.success, `Перевод средств успешно осуществлен`);
    } else {
      moneyManager.setMessage(response.success, response.error);
    }
  };
  ApiConnector.transferMoney({to, currency, amount}, callback);
};

/////////////////////////

const favoritesWidget = new FavoritesWidget();

