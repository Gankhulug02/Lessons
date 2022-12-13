const boxes = document.querySelectorAll(".box")
const btn = document.querySelector("button")

const color = ["red","green","blue"]


const change = () =>{
    for (let i = 0; i<boxes.length; i++){
        let color = getColor()
        boxes[i].style.backgroundColor = color
        
    }
}
const getColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

btn.addEventListener("click", change)