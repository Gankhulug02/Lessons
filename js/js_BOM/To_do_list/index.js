const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");

const ustgah = (e) => {
    // alert("Ustgagdlaa.");
    const parent = e.parentNode.parentNode.parentNode;
    const child = e.parentNode.parentNode;
    parent.removeChild(child)
}

const check = (e)=>{
    let a=e.parentNode.parentNode;
    a.classList.add("check");
    // console.log(a)
}
const edit = (e)=>{
    let a=e.parentNode.parentNode.parentNode;
    // a.removeAttribute("readonly");
    console.log(a)
    // console.log(a.firstChild)
}
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

const taskAdd = () => {
    let text = inputText.value;
    if(text === ""){
        alert("Ta utga oruulaagui baina");
    }else{
        
        taskList.innerHTML += cardItem(text);
    }
    inputText.value = "";
}

addBtn.addEventListener("click",taskAdd);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        taskAdd();
    }
})