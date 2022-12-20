const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");
const pr = document.getElementById("pr");
const a = document.getElementsByTagName("h3")[2];
let b = 0;
let allTask =[
  {name:"JS", status: true, priority: "high"},
  {name:"HTML", status: false, priority: "medium"}
];

const addTodo = () => {
  // allTask array ruu ruu text iig nemne.
  let text = inputText.value;
  // let a = priority.value;
  // console.log(a)
  allTask.push({name:text, status:false, priority:"high"} );
  renderTodoApp();
  inputText.value = ("")
};


addBtn.addEventListener("click", addTodo);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        addTodo();
    }
})


const renderTodoApp = () => {
  //AllTask array aar delgetsend list haruulna
  tasks.innerHTML = "";
  for (let i = 0; i < allTask.length; i++) {
    const done = allTask[i].status ? "strikethrough" : "";
    const item = `   
    <div class="task ${allTask[i].priority}">
    <input type="text" class="text ${done}" readonly value="${allTask[i].name}" />
    <div class="actions">
    <button class="edit" onclick="edit(this)"><i class="fas fa-pen"></i></button>
    <button class="done" onclick="check(this)"><i class="fas fa-check"></i></button>
    <button class="delete" onclick="deleteTodo(${i})"><i class="fas fa-trash"></i></button>
    </div>
    </div>`;
    taskList.innerHTML += item;
  }
};
//date
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
  //Task
  b = taskList.children.length
  a.innerHTML = `${b} tasks left`
};
timer = setInterval(increment, 10);

//Buttons
const deleteTodo = (index) => {
  console.log("II", index);
  allTask.splice(index, 1);
  renderTodoApp();
};
const check = (e)=>{
    let a = e.parentNode.parentNode.children[0];
    let i = Number(e.parentNode.children[2].attributes[1].value[11])
    console.log(allTask)
    if(allTask[i].status == true){
      allTask[i].status = false
    } else{
      allTask[i].status = true
    }
  //   console.log(e.parentNode.parentNode)
  // if(inputText.parentNode.children[1][2].value == "high"){
  //   e.parentNode.parentNode.classList.add("black")
  // }
    renderTodoApp();
}
const edit = (e)=>{
    let a = e.parentNode.parentNode.children[0];
    let b = e.firstChild.classList;
    let i = Number(e.parentNode.children[2].attributes[1].value[11])
    allTask[i].name = a.value

    if(a.hasAttribute("readonly")){
        b.remove("fa-pen");
        b.add("fa-plus");
        a.removeAttribute("readonly")
    } else {
        b.remove("fa-plus");
        b.add("fa-pen")
        a.setAttribute("readonly", true)
    }
    
}