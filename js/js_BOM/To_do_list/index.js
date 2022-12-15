const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");

//Date
const h3 = document.getElementsByTagName("h3")[1];
let count = 0;
let timer = null;
let day = 0;
let month= 0;
let year = 0;
const increment = () => {
  day = new Date().getDate();
  month = new Date().getMonth()+1;
  year = new Date().getFullYear();
  h3.innerHTML = `${year}:${month}:${day}`;
};
timer = setInterval(increment, 10);


const cardItem = (text) =>{ 
    const item = `   
    <div class="task">
    <input type="text" id="text" class="text" readonly value="${text}" />
    <div class="actions">
    <button class="edit" onclick="edit(this)"><i class="fas fa-pen"></i></button>
    <button class="done" onclick="check(this)"><i class="fas fa-check"></i></button>
    <button class="delete" onclick="ustgah(this)"><i class="fas fa-trash"></i></button>
    </div>
    </div>`;
    return item;
}
//Task
const task = document.getElementsByTagName("h3")[2];
let tasks = 0;

const taskAdd = () => {
    let text = inputText.value;
    if(text === ""){
        alert("Ta utga oruulaagui baina");
    }else{
        taskList.innerHTML += cardItem(text);
    }
    inputText.value = "";
    //Task nemeh
    tasks = taskList.children.length
    task.innerHTML = `${tasks} days left`
}

addBtn.addEventListener("click",taskAdd);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        taskAdd();
    }
})
const ustgah = (e) => {
    const parent = e.parentNode.parentNode.parentNode;
    const child = e.parentNode.parentNode;
    parent.removeChild(child)
    //Task hasah
    tasks --
    task.innerHTML = `${tasks} days left`}

const check = (e)=>{
    let a=e.parentNode.parentNode.children[0];
    a.classList.add("check");
}
const edit = (e)=>{
    let a = e.parentNode.parentNode.children[0];
    let b = e.firstChild.classList;
    a.setAttribute("value", a.value);

    if(b.contains("fa-pen")){
        b.remove("fa-pen");
        b.add("fa-plus");
        a.removeAttribute("readonly")
    } else {
        b.remove("fa-plus");
        b.add("fa-pen")
        a.setAttribute("readonly", true)
    }
}