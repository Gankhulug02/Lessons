// // "comment can make code readable"
// // Javascript lesson basic

// // Variable.js

// let Fullname = "Gankhulug";
// let job;
// let password = "asd123";
// let ovog ;

// console.log(Fullname);
// console.log(job);
// console.log(password);
// console.log(ovog);


// // datatypes.js

//  console.log(typeof Fullname)
//  console.log(typeof password)

//  //Утга оноогоогүй хувьсагч зарлах 
//  let asd;
//  console.log(asd);

//  //7. Утга оноосон хувьсагч зарлах 
//  let asdf = "onooson";
//  console.log(asdf);

// // Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах 
// let firstname = "Boldoo";
// let lastname = "Dorjoo";
// let marital_status = "Maried";
// let country = "Mongolia";
// let age = "18";

// //Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах 
// // let firstname = "Boldoo"; let lastname = "Dorjoo"; let marital_status = "Maried"; let country = "Mongolia"; let age = "18";

// let myAge = "18"
// let yourAge = "20"
// console.log(myAge);
// console.log(yourAge);

// //11. Гурвалжингийн периметрийг олох 
// let x = 3;
// let y = 5;
// let z = 7;

// console.log("x =",x)
// console.log("y =",y)
// console.log("z =",z)
// console.log("P =", x + y + z)

// //m = y2-y1/x2-x1 хариуг олох 
// let y1 = 1;
// let y2 = 11;
// let x1 = 1;
// let x2 = 6;

// console.log("m =", (y2 - y1) / (x2 -x1) )

// // GB to bit
// console.log("15gb = ", 15 * 1024 * 1024 * 1024 * 8)

// //22. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич

// // let m = 234;
// // console.log (((m) - (m%100)) / 100 );

// // let number
// // number = prompt("your number");
// // console.log (((number) - (number%100)) / 100);

// //gurvaljin

// let a, b, c ;
// a = prompt("a")
// b = prompt("b")
// c = prompt("c")

// console.log ( a );
// console.log ( b );
// console.log ( c );
// console.log ( a + b + c );

//Day 2 

// let a = ( 10 );
// let b = ( 20 );
// console.log (a != b)

let weekNumber = 4;
let weekName;
if (weekNumber == 1) {
    weekName = 'Даваа';
} else if (weekNumber == 2) {
    weekName = 'Мягмар';
} else if (weekNumber == 3) {
    weekName = 'Лхагва';
} else if (weekNumber == 4) {
    weekName = 'Пүрэв';
} else if (weekNumber == 5) {
    weekName = 'Баасан';
} else if (weekNumber == 6) {
    weekName = 'бямба'; 
} else if ( weekNumber == 7) {
    weekName = 'Ням'
} else {
    weekName = 'Буруу тоо'
}
console.log (weekName);

let gender = "male"; 
let age = 19;

if (gender ===  "male" && age >= 18) {
    console.log ("насанд хүрсэн байна");
} else{
    console.log ("test")
}
     
//1. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:

let a = (100)
let b = (79)
let c = (89)
let d = (69)

let sum = (0)
if(a > 80){
    sum = sum + a; 
} 
if(b > 80){
    sum += b ;
} 
if(c > 80){
    sum += c;
}
if(d > 80){
    sum += d;
}
console.log("sum=", sum);

//2. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо

let e = (3)
let f = (7)
let g = (2)
let h = (4)

let urjver = (1)

if(e < 5){
    urjver *= e;
}
if(f < 5){
    urjver *= f;
}
if(g < 5){
    urjver *= g;
}
if(h < 5){
    urjver *= h;
}
console.log("urver=", urjver);

//1. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.       

let i = 4 > 3; //true
let iii = 4 < 3; //false 
let ii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false 
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

console.log (i);
console.log (iii);
console.log (ii);
console.log (iv);
console.log (v);
console.log (vi);
console.log (vii);
console.log (iix);
console.log (ix);
console.log (x);
console.log (xi);

//2. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.

console.log("2. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.");

let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; // true
let five = !(4 > 3); //flase
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //true 
let ten = !(4 === "4"); //true

console.log (one);
console.log (two);
console.log (three);
console.log (four);
console.log (five);
console.log (six);
console.log (eight);
console.log (nine);
console.log (ten);

//3.if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул. Харьцуулалт дээр үндэслэн үр дүнг консол руу хөгшин (би эсвэл та) гэж тэмдэглэнэ үү. Насыг оруулахын тулд prompt("Насаа оруулна уу:")-г ашиглана уу.

// let myAge = 18;
// let yourAge ;
// let duud ;
// yourAge = prompt ("your age")

// if(myAge < yourAge){
//     duud="ta";
// } else{
//     console.log("chi")
// }

// console.log (duud);

//5. Хэрэглэгчээс цаг оруулах, цаг тутамд үнэлгээ өгөх скрипт бичээрэй. Тухайн хүний цалинг тооцно уу
let hours = 40;
let ratePerHours = 28;
let ajilsanTsag ;

hours = prompt("Ta ajilsan tsagaa oruulna uu!");

console.log ("Tanii avah tsalin=", hours * ratePerHours, "$")