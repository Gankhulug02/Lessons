// // Loop 

// While 

// let count = 1;
// while ( count <= 100) {
//     console.log(count);
//     count = count + 2
// }

// Do While

// let count = 0

// do{
//     console.log (count);
//     count ++;  
// } while (count <= 10 );

// Sondgoi too

//  let count = 1;
// while ( count <= 10) {
//     console.log(count);
//     count = count + 2
// }

// tegsh too

// let count = 2;
// while ( count <= 10) {
//     console.log(count);
//     count = count + 2
// }

// 100 hurtelh toonii niilber 

// let total = 0;
// let n = 1;

// while ( n <= 5) {
//     total += n
//     n ++;
// }

// console.log (total)

// 8. N тооны факториал олох программ бич

// let total = 1;
// let n = 1;

// while ( n <= 2) {
//     total *= n
//     n ++;
// }

// console.log (total)

// 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич

// let a = parseInt(prompt ("ta duriin toogoo oruulna u"));

// console.log (a)

// console.log (Math.pow(2, 32));

// 11. N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич

// let total = 0;
// let n = 1;
// let a;

// a = Number (prompt("Ta toogoo oruulna uu"))

// while ( n <= a) {
//     // console.log(total)    
//     console.log(n)
//     total += n
//     n += 1;
// }

// console.log (total)

// 13. Өгөдсөн тооны цифрүүдийг reverse bolgodog ni

// let n = parseInt(prompt("Toogoo oruul"))
// let c = n;
// let a = 0;
// let b  = 0;

// while(n > 0 ){
//     a = n % 10;

//     b = (b*10)+a;

//     n = parseInt(n/10)
// }
// 13 aas palindromic number check

// console.log (b);

// if (b === c ){
//     console.log("True")
// } else {
//     console.log ("false")
// }

// huulav

// let num = parseInt(prompt("Toogoo oruul"))
// let rev = 0;
// let rem = 0;
// let i = "*";
// let o = "  ";

// while (num > 0) {
//     rem = num % 10;
//     // console.log (rem)
//     rev = (rev*10)+rem;
//     // console.log (rev)
    
//     num = parseInt(num/10)
//     // console.log (num)
//     console.log(i)
//     i = (i + "**")
// }

// // console.log(rev);

// // Square

// let row;
// let a;

// row = Number (prompt(" Durvuljinii unduriig ugnu uu"));
// a = row;

// // console.log (row);
// // console.log (typeof(row));
 
// while ( row >= 1) {
//     if( row == a){
//         console.log ("******")
//     } else if (row > 1 ){
//         console.log (`*    *`)
//     } else if (row == 1 ) {
//         console.log ("******")
//     } 
//     row --;
//     console.log ("");
// }

// //Pyramid

// let a = parseInt (prompt("ta too oruulnu"));
// // let a = 20;
// let b = 11111111111111111111; 
// let c = a;
// let d = "*";

// console.log (a);

// while (a > 0){
//     if (a == c ){ 
//         console.log(b + `   `+ '$')
//     } else if ( a < c){
//         d = d+"**"
//         b = parseInt (b/10);
//         console.log (b+ `   ` + d)
//     }
//     a --;
// }

// 13. Өгөдсөн тооны цифрүүдийг урвуугаар үгээр хэвлэх программ бич

let n = parseInt(prompt("Toogoo oruul"))
let c = n;
let a = 0;
let b  = 0;

while(n > 0 ){
    a = n % 10;

    b = (b*10)+a;

    n = parseInt(n/10)
}

console.log(b)

let num = "";
let d;

while(b > 0){
    d = b%10
    if(d==1){
        d = "one "
    } else if (d==0){
        d = "zero "
    } else if (d==2){
        d = "two "
    } else if (d==3){
        d = "three "
    } else if (d==4){
        d = "four "
    } else if (d==5){
        d = "five "
    } else if (d==6){
        d = "six "
    } else if (d==7){
        d = "seven "
    } else if (d==8){
        d = "eight "
    } else if (d==9){
        d = "nine "
    }
    num = num + d
    // console.log(b)
    b = Math.floor(b/10)
}
console.log  (num)
