// document.getElementById("text").innerHTML="date: " + Date();


// document.getElementsByClassName("dummy")[0].innerHTML="By class"

// document.querySelectorAll(".profile")[0].style.color = "Azure";
// document.querySelectorAll(".profile")[0].style.fontSize = "222px";

const color = ["red", "green","blue"]
let colorindex= 0;

// const box = document.getElementsByTagName("box")[1];
const divs = document.getElementsByClassName("box1");
const change = ( ) => {
    if(colorindex >= 3){
        colorindex = 0;
    }
    let r = Math.floor(Math.random() * (255 - 0)).toString(16)
    let g = Math.floor(Math.random() * (255 - 0)).toString(16)
    let b = Math.floor(Math.random() * (255 - 0)).toString(16)
    let r1 = Math.floor(Math.random() * (255 - 0)).toString(16)
    let g1 = Math.floor(Math.random() * (255 - 0)).toString(16)
    let b1 = Math.floor(Math.random() * (255 - 0)).toString(16)
    let r2 = Math.floor(Math.random() * (255 - 0)).toString(16)
    let g2 = Math.floor(Math.random() * (255 - 0)).toString(16)
    let b2 = Math.floor(Math.random() * (255 - 0)).toString(16)
    let r3 = Math.floor(Math.random() * (255 - 0)).toString(16)
    let g3 = Math.floor(Math.random() * (255 - 0)).toString(16)
    let b3 = Math.floor(Math.random() * (255 - 0)).toString(16)
    let r4 = Math.floor(Math.random() * (255 - 0)).toString(16)
    let g4 = Math.floor(Math.random() * (255 - 0)).toString(16)
    let b4 = Math.floor(Math.random() * (255 - 0)).toString(16)

    box1.style.backgroundColor = `#${r}${g}${b}`
    box2.style.backgroundColor = `#${r1}${g1}${b1}`
    box3.style.backgroundColor = `#${r2}${g2}${b2}`
    box4.style.backgroundColor = `#${r3}${g2}${b3}`
    box5.style.backgroundColor = `#${r4}${g2}${b4}`
    // body.style = `background-color: ${color[colorindex]}`;
    colorindex ++;
}

myBtn.addEventListener("click", change)
myBtn1.addEventListener("click", change)
myBtn2.addEventListener("click", change)