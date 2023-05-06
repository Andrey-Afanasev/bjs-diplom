'use strict'

const userForm = new UserForm();

userForm.loginFormCallback = data => {
    
    let callback = (response) => {

        if (response.executed) {
            location.reload()
        } else {
            userForm.setLoginErrorMessage(response.error)
        }
    }

    ApiConnector.login(data, callback)
}

userForm.registerFormAction = data => {

    let callback = (response) => {
        if (response.executed) {
            location.reload()
        } else {
            userForm.registerErrorMessageBox(response.error)
        }
    }

    ApiConnector.register(data, callback)
}