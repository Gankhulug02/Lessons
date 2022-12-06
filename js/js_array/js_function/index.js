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





console.log("2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.")

let b = [1,2,3,4,5,6,7,8,9]
let c = 9;
let hariu ;
console.log(b);
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




console.log("3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.");

let d = ['a','b','c','d','e','f','g'];
let e = 'd';
let hariuText =""; 
console.log(d)

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
console.log("tanii haisan ug", e +": "+ findText(d,e) + "t bn");





console.log("5. Өгөгдсөн array - ийн дундажыг олох функц бич.")

d = [12,45,23,48,15,23];
let sum = 0;
console.log('array = '+d)

let findAverage = (arrAverage) => {
    let i = 0;
    for (let i=0; i<arrAverage.length; i++){
        sum = sum + arrAverage[i] 
    }
    sum = sum / arrAverage.length
    return sum
}
console.log(findAverage(d))





console.log('6. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.')

console.log('array = '+d)
sum = 0;

let arrAdd = (arrAdd) => {
    let i = 0;
    for (let i=0; i<arrAdd.length; i++){
        sum = sum + arrAdd[i] 
    }
    // sum = sum / arrAdd.length
    return sum
}
console.log(arrAdd(d))





console.log("8. Өгөгдсөн тэмдэгт мөрийн бүх үсгийг том үсэг болгох функц бич.")

d = ['mongol','china','russia','german','sweden','turkey',]

let arrUpper = (arrUpper) => {
    
}