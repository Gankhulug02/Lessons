let numbersBtn = document.getElementsByClassName("number");
let aBtn = document.querySelectorAll("[data-value");
let display = document.getElementById("display")
let plusBtn = document.getElementsByClassName("operator")[3];
let equalsBtn = document.getElementsByClassName("operator")[4];
let minusBtn = document.getElementsByClassName("operator")[2];
let timesBtn = document.getElementsByClassName("operator")[1];
let orBtn = document.getElementsByClassName("operator")[0];

// console.log(minusBtn.outerHTML)
console.log(aBtn)

// for(let i=0; i<numbersBtn.length; i++){
//     numbersBtn[i].addEventListener("click", ()=>{
//     display.textContent += numbersBtn[i].textContent;
//     console.log(display.textContent)
//   })
// }
for(let i=0; i<aBtn.length; i++){
    aBtn[i].addEventListener("click", ()=>{
    display.textContent += aBtn[i].textContent;
    console.log(display.textContent)
  })
}

let plus = () => {

} 
plusBtn.addEventListener("click", plus); 
// equalsBtn.addEventListener("click", equals); 