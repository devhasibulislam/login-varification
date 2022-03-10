const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
const loginBtn = document.getElementById('login-btn');
const rememberMe = document.getElementById('visible-btn');
const EMAIL_VARIFICATION = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const PASSWORD_VARIFICATION = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);

const btnVisibility = () => {
    if (rememberMe.checked) {
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }
}


loginBtn.addEventListener('click', () => {
    email = EMAIL_VARIFICATION.test(`${userEmail.value}`); // onlyboyrobin@gmail.com
    password = PASSWORD_VARIFICATION.test(`${userPassword.value}`); // ASDFasdf1234!@#$
    // email checker
    // console.log(userEmail.value);
    // console.log(typeof (userEmail.value));
    // console.log(email);
    // password check
    // console.log(userPassword.value);
    // console.log(typeof (userPassword.value));
    // console.log(password);
    // validation
    if (email && password) {
        alert('Login Success');
    } else {
        alert('Login Failed');
    }
})