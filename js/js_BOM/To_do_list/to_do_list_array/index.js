const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");
let allTask =[];

const addTodo = () => {
  // allTask array ruu ruu text iig nemne.
  let text = inputText.value;
  allTask.push(text);
  renderTodoApp();
  inputText.value = ("")
};

addBtn.addEventListener("click", addTodo);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        addTodo();
    }
})

const deleteTodo = (index) => {
  console.log("II", index);
  allTask.splice(index, 1);
  renderTodoApp();
};

const renderTodoApp = () => {
  //AllTask array aar delgetsend list haruulna
  tasks.innerHTML = "";
  for (let i = 0; i < allTask.length; i++) {
    const item = `   
                <div class="task">
                    <input type="text" class="text" readonly value="${allTask[i]}" />
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
};
timer = setInterval(increment, 1000);

//Buttons
const check = (e)=>{
    let a=e.parentNode.parentNode.children[0];
    a.classList.add("check");
}
const edit = (e)=>{
    let a = e.parentNode.parentNode.children[0];
    let b = e.firstChild.classList;
    console.log(a)
    a.setAttribute("value", a.value);

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