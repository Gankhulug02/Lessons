// "comment can make code readable"
// Javascript lesson basic

// Variable.js

let Fullname = "Gankhulug";
let job;
let password = "asd123";
let ovog ;

console.log(Fullname);
console.log(job);
console.log(password);
console.log(ovog);


// datatypes.js

 console.log(typeof Fullname)
 console.log(typeof password)

 //Утга оноогоогүй хувьсагч зарлах 
 let asd;
 console.log(asd);

 //7. Утга оноосон хувьсагч зарлах 
 let asdf = "onooson";
 console.log(asdf);

// Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах 
let firstname = "Boldoo";
let lastname = "Dorjoo";
let marital_status = "Maried";
let country = "Mongolia";
let age = "18";

//Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах 
// let firstname = "Boldoo"; let lastname = "Dorjoo"; let marital_status = "Maried"; let country = "Mongolia"; let age = "18";

let myAge = "18"
let yourAge = "20"
console.log(myAge);
console.log(yourAge);

//11. Гурвалжингийн периметрийг олох 
let x = 3;
let y = 5;
let z = 7;

console.log("x =",x)
console.log("y =",y)
console.log("z =",z)
console.log("P =", x + y + z)

//m = y2-y1/x2-x1 хариуг олох 
let y1 = 1;
let y2 = 11;
let x1 = 1;
let x2 = 6;

console.log("m =", (y2 - y1) / (x2 -x1) )

// GB to bit
console.log("15gb = ", 15 * 1024 * 1024 * 1024 * 8)

//22. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич

let m = 234;
console.log (((m) - (m%100)) / 100 );