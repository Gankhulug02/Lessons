//3. Хамгийн их тоог ол.

let arrayOfNumbers = [45, 123, 450, 23, 123, 45678];

let max = arrayOfNumbers[0];
for(let i=0; i < arrayOfNumbers.length; i++ ) {
    if(max < arrayOfNumbers[i]) {
        max = arrayOfNumbers[i]
    }
}
console.log(max);

// 4. Хамгийн бага тоог ол.


min = arrayOfNumbers[0];
for(let i=0; i < arrayOfNumbers.length; i++ ) {
    if(min > arrayOfNumbers[i]) {
        min = arrayOfNumbers[i]
    }
}
console.log(min);

// 5. Array - ийн эхэнд дурын 1 тоог нэм.


console.log(arrayOfNumbers);
arrayOfNumbers.unshift(1);
console.log(arrayOfNumbers,"unshift");
// 6. Array - ийн төгсгөлд дурын 1 тоог нэм.


console.log(arrayOfNumbers);
arrayOfNumbers.push(1);
console.log(arrayOfNumbers,"push");

//Evan and odd

//1. Хэдэн ширхэг тэгш тоо байгаа вэ?
console.log("1. Хэдэн ширхэг тэгш тоо байгаа вэ?")


let arrayNumbers = [5, 6, 2, 4, 12, 19, 121, 1, 7, 9, 63];
i = 0;
while(i < arrayNumbers.length){
    if(arrayNumbers[i]%2 === 0){
        console.log(arrayNumbers[i]);
    }
    i ++
}
//2. Хэдэн ширхэг сондгой тоо байгаа вэ?
console.log("2. Хэдэн ширхэг сондгой тоо байгаа вэ?")

i = 0;
while(i < arrayNumbers.length){
    if(arrayNumbers[i]%2 !== 0){
        console.log(arrayNumbers[i]);
    }
    i ++
}

let now = new Date();
console.log( now );