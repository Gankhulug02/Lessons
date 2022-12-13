console.log(document.querySelector("ul").querySelectorAll("li")[0].innerText)

let last = document.querySelector("ul").querySelectorAll("li").length-1
console.log(document.querySelector("ul").querySelectorAll("li")[last].textContent)

console.log(document.querySelector("#aimag-315").textContent)

const li = document.querySelector("ul").querySelectorAll("li")
for (let i = 0; i<last+1; i++){
    li[i].style.color = "azure";
    li[i].style.fontSize = "22px";
    li[i].style.fontFamily = "arial";
    li[i].style.border = "1px solid black"
    li[i].style.width = "400px"
    li[i].style.padding = "10px"
    li[i].style.margin= "10px"

    let busNumber = document.querySelector("ul").querySelectorAll("li")[i].id[6];

    console.log(busNumber)

    if(busNumber == 1){
        li[i].style.backgroundColor = "green"
        li[i].innerHTML+=":  Хангайн бүс" 
    } else if(busNumber == 2){
        li[i].style.backgroundColor = "teal" 
        li[i].innerHTML+=":  Баруун бүс," 
    } else if(busNumber == 3){
        li[i].style.backgroundColor = "orange" 
        li[i].innerHTML+=":  Зүүн бүс" 
    } else if(busNumber == 4){
        li[i].style.backgroundColor = "blue" 
        li[i].innerHTML+=":  Төвийн бүс" 
    } else if(busNumber == 5){
        li[i].style.backgroundColor = "red" 
        li[i].innerHTML+=": Улаанбаатар" 
    } 
}

// console.log(document.querySelector("ul").querySelectorAll("li")[5].id[6])