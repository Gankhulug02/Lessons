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

d = 'honi uher ymaa';
a = d.split("");


let arrUpper = (arr) => {
    let retArr = "";
    for (let i = 0; i < arr.length; i++){
        // for(let j=0; j < arrUpper[i].length; j++){
            if(arr[i] == 'a'){
                retArr += 'A'
           } else if (arr[i] == 'b'){
               retArr += 'B'
           } else if (arr[i] == 'c'){
               retArr += 'C'
           } else if (arr[i] == 'd'){
               retArr += 'D'
           } else if (arr[i] == 'e'){
               retArr += 'E'
           } else if (arr[i] == 'f'){
               retArr += 'F'
           } else if (arr[i] == 'g'){
               retArr += 'G'
           } else if (arr[i] == 'h'){
               retArr += 'H';
           } else if (arr[i] == 'i'){
               retArr += 'I'
           } else if (arr[i] == 'g'){
               retArr += 'G'
           } else if (arr[i] == 'k'){
               retArr += 'K'
           } else if (arr[i] == 'l'){
               retArr += 'L'
           } else if (arr[i] == 'm'){
               retArr += 'M'
           } else if (arr[i] == 'n'){
               retArr += 'N'
           } else if (arr[i] == 'o'){
               retArr += 'O';
           } else if (arr[i] == 'p'){
               retArr += 'P'
           } else if (arr[i] == 'q'){
               retArr += 'Q'
           } else if (arr[i] == 'r'){
               retArr += 'R'
           } else if (arr[i] == 's'){
               retArr += 'S'
           } else if (arr[i] == 't'){
               retArr += 'T'
           } else if (arr[i] == 'u'){
               retArr += 'U'
           } else if (arr[i] == 'v'){
               retArr += 'V'
           } else if (arr[i] == 'w'){
               retArr += 'W'
           } else if (arr[i] == 'x'){
               retArr += 'X'
           } else if (arr[i] == 'y'){
               retArr += 'Y'
           } else if (arr[i] == 'z'){
               retArr += 'Z'
           } else if (arr[i] == ' '){
            retArr += ' '
        } 
        // }
    }
    return retArr;
}
// let a = (d[0].slice(0));
// a.unshift(1);
// console.log("M"+a)
// console.log(d);
;
console.log(arrUpper(d));
let txt = "adfrff";
console.log(d.toUpperCase())
