let numbersBtn = document.getElementsByClassName("number");
let display = document.getElementById("display")
let plusBtn = document.getElementsByClassName("operator")[3];
let equalsBtn = document.getElementsByClassName("operator")[4];
let minusBtn = document.getElementsByClassName("operator")[2];
let timesBtn = document.getElementsByClassName("operator")[1];
let orBtn = document.getElementsByClassName("operator")[0];



for(let i=0; i<numbersBtn.length; i++){
    numbersBtn[i].addEventListener("click", ()=>{
    display.textContent += numbersBtn[i].textContent;
    console.log(display.textContent)
  })
}

let plus = () =>{
  console.log(typeof display.textContent)
}

plusBtn.addEventListener("click", plus); 