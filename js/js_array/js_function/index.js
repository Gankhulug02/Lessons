//1. Өгөгдсөн 2 тооны ихийг олох функц бич

console.log("1. Өгөгдсөн 2 тооны ихийг олох функц бич")

let max = (a, b,c) =>{

    let arrayOfNumbers = [a, b,c];

    let max = arrayOfNumbers[0];
    for(let i=0; i < arrayOfNumbers.length; i++ ) {
    if(max < arrayOfNumbers[i]) {
        max = arrayOfNumbers[i]
    }
}
    return max
}

console.log (max(7,5,10));


//2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
console.log("2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.")

let b = [1,2,3,4,5,6,7,8,9]
let c = 9;
let hariu ;
let findNumber = (arrNumber,c) =>{
    // let i = 0;
    for (let i=0; i < arrNumber.length; i++){
        if(arrNumber[i] == c){
            hariu = i;
            break
        } else{
            hariu = -1
        }
    }
    return hariu
}

console.log("tanii haisan too", + c + ": " +findNumber(b,c)+ "d baina");

// Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.

let d = ['a','b','c','d','e','f','g'];
let e = 'd';
let hariuText =""; 

let findText = (arrText, e) => {
    let i=0;
    for(let i=0; i < arrText.length; i++){
        if(arrText[i] == e){
            hariuText = i;
            break
        }else{
            hariuText = -1;
        }
    }
    return hariuText
}
console.log(findText(d,e));