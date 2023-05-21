
const logoutButton = new LogoutButton();

LogoutButton.action = () => {
    const callback = (response) => {
        if (response.success) {
          location.reload();
        }
      };
      ApiConnector.logout(callback);
}

ApiConnector.current((response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
    }
  })

const ratesBoard = new RatesBoard()

const requestRatesBoard = () => {

    ApiConnector.getStocks(() => {

        if (response.success) {
            RatesBoard.clearTable()
            RatesBoard.fillTable(response.data)
         }
    })
     
}

requestRatesBoard()
setInterval(() => requestRatesBoard(), 60000)


const moneyManager = new MoneyManager();

moneyManager.addMoneyCallback = () => {

    ApiConnector.addMoney({currency, amount}, callback)
}