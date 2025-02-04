const Key ='todo'
const form = document.getElementById('form')
const input = document.getElementById('input')
const taskList = document.getElementById('task')

const setStorage=(data)=>{
    console.log(data)
//     if(localStorage.getItem('key')){
//     }
//    else{
//     localStorage.setItem('myArray',JSON.stringify(data))
//    }
}
form.addEventListener('submit',(e)=>{
   e.preventDefault()
   if(!input.value || input.value.trim()==""){
    alert('task empty')
   }
    const p = document.createElement('p');
    p.innerText = input.value;
    taskList.appendChild(p)
    setStorage(input.value)
    input.value = ""
})