let numbersBtn = document.getElementsByClassName("number");
let display = document.getElementById("display")

for(let i=0; i<numbersBtn.length; i++){
    numbersBtn[i].addEventListener("click", ()=>{
    display.textContent += numbersBtn[i].textContent;
  })
}

const tasks = [
  {value: 1},
  {value: 2},
  {value: 3},
  {value: 4},
  {value: 5},
  {value: 6},
]
const[task] = tasks
console.log(task)
const {value} = task
console.log(value)