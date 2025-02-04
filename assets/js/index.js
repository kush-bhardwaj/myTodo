const email = document.getElementById('email');
const username = document.getElementById('name');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const submit = document.getElementById('btn');
const form = document.getElementById('form');
const Storage_key ='user';
const key ='todo'
loginPage.addEventListener('click',()=>{
   window.location.href='./login.html'
});
function setStorage(data){
   localStorage.setItem(Storage_key,JSON.stringify(data))
   localStorage.setItem(key,JSON.stringify([]))
};
form.addEventListener('submit', (e) => {
   e.preventDefault()
   if (!email.value || email.value.trim() == "") {
      return 'Email missing'
   }
   if (!username.value || username.value.trim() == "") {
      return 'username missing'
   }
   if (!phone.value || phone.value.trim() == "") {
      return 'phone number missing'
   }
   if (!password.value || password.value.trim() == "" || password.value.length <= 5) {
      alert('password must more than 5 ')
      return 'Email missing'
   }
   const userForm = {
      username: username.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
   }
   setStorage(userForm)
   alert('Sinup successfull')
   window.location.href='./login.html'
   // console.log(userForm)
});