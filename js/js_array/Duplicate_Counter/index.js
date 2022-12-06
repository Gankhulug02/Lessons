//олон оронтой n тоо оруулахад тухайн n тоонд 0-9 цифр хэд хэдэн удаа орсон харуулах.
// input: 12341

let input = parseInt(prompt("Ta duriin olon orontoi toogoo oruulna yy"));
let count = [0,0,0,0,0,0,0,0,0,0];
let i = ['0', '1', '2', '3', '4', '5', '6', '7','8', '9'];

while(input > 0){
    if(input%10 == 1){
        count[1] = count[1] + 1
    } else if (input%10 == 2){
        count[2] = count[2] + 1
    } else if (input%10 == 3){
        count[3] = count[3] + 1
    } else if (input%10 == 4){
        count[4] = count[4] + 1
    } else if (input%10 == 5){
        count[5] = count[5] + 1
    } else if (input%10 == 6){
        count[6] = count[6] + 1
    } else if (input%10 == 7){
        count[7] = count[7] + 1
    } else if (input%10 == 8){
        count[8] = count[8] + 1
    } else if (input%10 == 9){
        count[9] = count[9] + 1
    } else if (input%10 == 0){
        count[0] = count[0] + 1
    }
    input =Math.floor(input/10);
}
console.log(i[0]+ ":" + count[0] )
console.log(i[1]+ ":" + count[1] )
console.log(i[2]+ ":" + count[2] )
console.log(i[3]+ ":" + count[3] )
console.log(i[4]+ ":" + count[4] )
console.log(i[5]+ ":" + count[5] )
console.log(i[6]+ ":" + count[6] )
console.log(i[7]+ ":" + count[7] )
console.log(i[8]+ ":" + count[8] )
console.log(i[9]+ ":" + count[9] )

// console.log(input);
// let arrayOfNumbers = [45, 123, 450, 23, 123, 45678];

// let max = arrayOfNumbers[0];
// for(let i=0; i < arrayOfNumbers.length; i++ ) {
//     if(max < arrayOfNumbers[i]) {
//         max = arrayOfNumbers[i]
//     }
// }
// console.log(max);