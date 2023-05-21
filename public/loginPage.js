'use strict'

const userForm = new UserForm();

userForm.loginFormCallback = ({login, password}) => {
    
    let callback = (response) => {

        if (response.success) {
            location.reload()
        } else {
            userForm.setLoginErrorMessage(response.error)
        }
    }

    ApiConnector.login({login, password}, callback)
}

userForm.registerFormCallback = ({login, password}) => {

    let callback = (response) => {
        if (response.success) {
            location.reload()
        } else {
            userForm.setRegisterErrorMessagex(response.error)
        }
    }

    ApiConnector.register({login, password}, callback)
}