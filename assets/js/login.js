const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('btn');
const form = document.getElementById('form');
const signupPage = document.getElementById('signupPage')
const Storage_key = 'singup';
const key = 'todo'


//////////
signupPage.addEventListener('click', (e) => {
    window.location.href = './index.html'
});
//////////

///////////////

function setStorage(data) {
    localStorage.setItem(Storage_key, JSON.stringify(data))
    localStorage.setItem(key, JSON.stringify([]))
};

function getStorage() {
    if (localStorage.getItem(Storage_key))
        return JSON.parse(localStorage.getItem(Storage_key))
    else {
        return false
    }
}
/////////

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!email.value || email.value.trim() == "") {
        return 'Email missing'
    }
    if (!password.value || password.value.trim() == "" || password.value.length <= 5) {
        alert('password must more than 5 ')
        return 'Email missing'
    }
    const userForm = {
        email: email.value,
        password: password.value,
    }
    const isLogin = getStorage()
    if (!isLogin) {
        alert('Invalid User Please Create Account')
        window.location.href = './index.html'
    }
   else if (isLogin.password === userForm.password && isLogin.email === userForm.email) {
        window.location.href = './todo.html'
    } else {
        alert('wrong email and password')
    }
});