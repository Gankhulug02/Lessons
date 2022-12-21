let numbersBtn = document.getElementsByClassName("number");
let display = document.getElementById("display")

for(let i=0; i<numbersBtn.length; i++){
    numbersBtn[i].addEventListener("click", ()=>{
    display.textContent += numbersBtn[i].textContent;
  })
}