const btn = document.querySelectorAll("button")
let jagsaaltuud = document.querySelector(".jagsaaltuud")
// let jagsaalt = document.querySelector("#jagsaalt")
let nemehBtn = btn[0]
let editBtn = btn[1]
let correctBtn = btn[2]
let trashBtn = btn[3]
// console.log(nemehBtn)
// console.log()



//Nemeh Button 

document.addEventListener("keyup", (e) => {
        if(e.key =="Enter"){
            let utga = document.querySelector("#deed-input").value
            let div = document.createElement("div");
            let items = `<div class="jagsaalt">
            <input type="text" id="j-input" readonly>
            <div class="icons">
            <button><i class="fa-solid fa-pen"></i></button>
            <button><i class="fa-sharp fa-solid fa-check"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
            </div>`
            
            div.innerHTML = items;
            jagsaaltuud.appendChild(div)
            div.getElementsByTagName("input")[0].value = utga
            } 
        })

        const add = () => {
            let utga = document.querySelector("#deed-input").value
            let div = document.createElement("div");
            let items = `<div class="jagsaalt">
            <input type="text" id="j-input" readonly>
            <div class="icons">
            <button><i class="fa-solid fa-pen"></i></button>
            <button><i class="fa-sharp fa-solid fa-check"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
            </div>`
            for(let i = 0; i<5; i++){
                correctBtn
            }
            div.innerHTML = items;
            jagsaaltuud.appendChild(div)
            div.getElementsByTagName("input")[0].value = utga            
       }
        
nemehBtn.addEventListener("click", add);

//Correct Button
       const correct = () => {
        // nemehBtn.style.color("red")
        console.log("asd")
       }

correctBtn.addEventListener("click", correct)