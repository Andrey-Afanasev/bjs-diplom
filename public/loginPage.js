'use strict'

const userForm = new UserForm();

/* в описании классов, в методе используют {login, password}, а в примере видео data, тоже не нашел нигде в коде свять, что по итогу использовать?*/
userForm.loginFormCallback = data => {
    
    /* Проверьте успешность запроса.  понять какой аргумент использова, нужно ведь сравнить имеющамися логинами и паролями и сравнить?*/ 
    let callback = () => {

        if () {
            location.reload()
        } else {
            setLoginErrorMessage('message')
        }
    }

    ApiConnector.login(data, callback)
}

userForm.registerFormAction = data => {

    let callback = () => {
        if () {
            location.reload()
        } else {
            registerErrorMessageBox('message')
        }
    }

    ApiConnector.register(data, callback)
}