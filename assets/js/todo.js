const Key = 'todo'
const form = document.getElementById('form')
const input = document.getElementById('input')
const taskList = document.getElementById('task')
const arr = []

const isLogin = () => {
    if (!localStorage.getItem('user')) {
        window.location.href = './login.html'
    } else {
        false
    }
}
//////
const setStorage = (newData) => {
    let storeData = localStorage.getItem(Key);
    let task = storeData ? JSON.parse(storeData) : []

    task.push(newData);
    localStorage.setItem(Key, JSON.stringify(task))

}
/////

/////
const loadTask = () => {
    let storeData = localStorage.getItem(Key);
    let task = storeData ? JSON.parse(storeData) : [];
    taskList.innerHTML = '';
    task.forEach((taskText, pos) => {
        const p = document.createElement('p');
        p.innerText = taskText

        const button = document.createElement('button');
        button.innerText = 'Delete';
        button.onclick = () => deleteTask(pos)
        p.appendChild(button)
        taskList.appendChild(p)
    });
}

const deleteTask = (pos) => {
    let storeData = localStorage.getItem(Key);
    let task = storeData ? JSON.parse(storeData) : [];
    if (pos >= 0 && pos < task.length) {
        task.splice(pos, 1);
        localStorage.setItem(Key, JSON.stringify(task))
        setTimeout(() => {
            loadTask()
        }, 1000)
    }
};
////
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!input.value || input.value.trim() == "") {
        alert('task empty')
        return;
    }
    setStorage(input.value)
    input.value = ""
    setTimeout(() => {
        loadTask()
    }, 1000)
});
window.addEventListener('load', () => {
    loadTask();
    isLogin()
})