const startBtn = document.getElementsByTagName("button")[0];
const stopBtn = document.getElementsByTagName("button")[1];
const body = document.getElementsByTagName("body")[0];
const h = document.getElementsByTagName("h1")[0];


const h1 = document.getElementsByTagName("h1")[0];

let timer = null;
let seconds = 0;
let minutes = 0;
let milliseconds = 0;



// let clear = ()=> {
//     count = 0;
//     h1.textContent = count;
//     stop();
// }


let increat =() => {
    milliseconds ++;
    // body.style.backgroundColor = getColor();
    h.style.color = getColor();
    startBtn.style.backgroundColor = getColor();
    stopBtn.style.backgroundColor = getColor();

    if(milliseconds >= 100){
        milliseconds = 00
        seconds ++
    }
    if(seconds >= 60){
        seconds = 00;
        minutes ++
    }
    if(minutes >= 60){
        minutes =00;
    }
    h1.textContent = `Time ${minutes}:${seconds}:${milliseconds}`
}

const getColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };
const start = () => {
    timer = setInterval(increat, 10);
};
const clear = () => {
    timer = setInterval(increat, 1000);
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", clear);
