function regular() {

    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let email = document.getElementById('email')


    let usernameErr = document.getElementById('name-err')
    let passwordErr = document.getElementById('password-err')
    let emailErr = document.getElementById('email-err')


    let usernameReg = /^[A-Za-z]+([ -'][A-Za-z]+)*$/;
    let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    let result1 = usernameReg.test(username.value)
    let result2 = passwordReg.test(password.value)
    let result3 = emailReg.test(email.value)



    // regex checking of username
    if (result1) {
        usernameErr.style.visibility = 'hidden'
    } else {
        usernameErr.style.visibility = 'visible'

    }

    if (result2) {
        passwordErr.style.visibility = 'hidden'
    } else {
        passwordErr.style.visibility = 'visible'
    }


    if (result3) {
        emailErr.style.visibility = 'hidden'
    } else {
        emailErr.style.visibility = 'visible'
    }

}