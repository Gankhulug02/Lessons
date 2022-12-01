// // // "comment can make code readable"
// // // Javascript lesson basic

// // // Variable.js

// // let Fullname = "Gankhulug";
// // let job;
// // let password = "asd123";
// // let ovog ;

// // console.log(Fullname);
// // console.log(job);
// // console.log(password);
// // console.log(ovog);


// // // datatypes.js

// //  console.log(typeof Fullname)
// //  console.log(typeof password)

// //  //Утга оноогоогүй хувьсагч зарлах 
// //  let asd;
// //  console.log(asd);

// //  //7. Утга оноосон хувьсагч зарлах 
// //  let asdf = "onooson";
// //  console.log(asdf);

// // // Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах 
// // let firstname = "Boldoo";
// // let lastname = "Dorjoo";
// // let marital_status = "Maried";
// // let country = "Mongolia";
// // let age = "18";

// // //Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах 
// // // let firstname = "Boldoo"; let lastname = "Dorjoo"; let marital_status = "Maried"; let country = "Mongolia"; let age = "18";

// // let myAge = "18"
// // let yourAge = "20"
// // console.log(myAge);
// // console.log(yourAge);

// // //11. Гурвалжингийн периметрийг олох 
// // let x = 3;
// // let y = 5;
// // let z = 7;

// // console.log("x =",x)
// // console.log("y =",y)
// // console.log("z =",z)
// // console.log("P =", x + y + z)

// // //m = y2-y1/x2-x1 хариуг олох 
// // let y1 = 1;
// // let y2 = 11;
// // let x1 = 1;
// // let x2 = 6;

// // console.log("m =", (y2 - y1) / (x2 -x1) )

// // // GB to bit
// // console.log("15gb = ", 15 * 1024 * 1024 * 1024 * 8)

// // //22. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич

// // // let m = 234;
// // // console.log (((m) - (m%100)) / 100 );

// // // let number
// // // number = prompt("your number");
// // // console.log (((number) - (number%100)) / 100);

// // //gurvaljin

// // let a, b, c ;
// // a = prompt("a")
// // b = prompt("b")
// // c = prompt("c")

// // console.log ( a );
// // console.log ( b );
// // console.log ( c );
// // console.log ( a + b + c );

// //Day 2 

// // let a = ( 10 );
// // let b = ( 20 );
// // console.log (a != b)

// let weekNumber = 4;
// let weekName;
// if (weekNumber == 1) {
//     weekName = 'Даваа';
// } else if (weekNumber == 2) {
//     weekName = 'Мягмар';
// } else if (weekNumber == 3) {
//     weekName = 'Лхагва';
// } else if (weekNumber == 4) {
//     weekName = 'Пүрэв';
// } else if (weekNumber == 5) {
//     weekName = 'Баасан';
// } else if (weekNumber == 6) {
//     weekName = 'бямба'; 
// } else if ( weekNumber == 7) {
//     weekName = 'Ням'
// } else {
//     weekName = 'Буруу тоо'
// }
// console.log (weekName);

// let gender = "male"; 
// let age = 19;

// if (gender ===  "male" && age >= 18) {
//     console.log ("насанд хүрсэн байна");
// } else{
//     console.log ("test")
// }
     
// 1. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:

// // let a = (100)
// let b = (79)
// let c = (89)
// let d = (69)

// let sum = (0)
// if(a > 80){
//     sum = sum + a; 
// } 
// if(b > 80){
//     sum += b ;
// } 
// if(c > 80){
//     sum += c;
// }
// if(d > 80){
//     sum += d;
// }
// console.log("sum=", sum);

// //2. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо

// let e = (3)
// let f = (7)
// let g = (2)
// let h = (4)

// let urjver = (1)

// if(e < 5){
//     urjver *= e;
// }
// if(f < 5){
//     urjver *= f;
// }
// if(g < 5){
//     urjver *= g;
// }
// if(h < 5){
//     urjver *= h;
// }
// console.log("urver=", urjver);

// //1. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.       

// let i = 4 > 3; //true
// let iii = 4 < 3; //false 
// let ii = 4 >= 3; //true
// let iv = 4 <= 3; //false
// let v = 4 == 4; //true
// let vi = 4 === 4; //true
// let vii = 4 != 4; //false
// let iix = 4 !== 4; //false 
// let ix = 4 != "4"; //false
// let x = 4 == "4"; //true
// let xi = 4 === "4"; //false

// console.log (i);
// console.log (iii);
// console.log (ii);
// console.log (iv);
// console.log (v);
// console.log (vi);
// console.log (vii);
// console.log (iix);
// console.log (ix);
// console.log (x);
// console.log (xi);

// //2. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.

// console.log("2. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.");

// let one = 4 > 3 && 10 < 12; //true
// let two = 4 > 3 && 10 > 12; //false
// let three = 4 > 3 || 10 < 12; //true
// let four = 4 > 3 || 10 > 12; // true
// let five = !(4 > 3); //flase
// let six = !(4 < 3); //true
// let eight = !(4 > 3 && 10 < 12); //false
// let nine = !(4 > 3 && 10 > 12); //true 
// let ten = !(4 === "4"); //true

// console.log (one);
// console.log (two);
// console.log (three);
// console.log (four);
// console.log (five);
// console.log (six);
// console.log (eight);
// console.log (nine);
// console.log (ten);

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
// let hours = 40;
// let ratePerHours = 28;
// let ajilsanTsag ;

// hours = prompt("Ta ajilsan tsagaa oruulna uu!");

// console.log ("Tanii avah tsalin=", hours * ratePerHours, "$")
//1. Тоогоор илэрхийлсэн дүн буюу n-д утга онооход түүнд харгалзах үсгийг / A,B,C,D,F / хэвлэнэ.

// let n ;
// let day;
// let called;

// n = Number(prompt ("ta uduruu oruulna uu"));

// console.log (typeof n)

// switch (n) {
//     case 1:{
//         day = 31;
//         called = "January" ;
//       break;
//     }
//     case 2:{
//         day = "28 or 29";
//         called = "February" ;
//       break;
//     }
//     case 3:{
//         day = 30;
//         called = "March" ;
//       break;
//     }
//     case 4:{
//         day = 30;
//         called = "April" ;
//       break;
//     }
//     case 5:{
//         day = 31;
//         called = "May" ;
//       break;
//     }
//     case 6:{
//         day = 30;
//         called = "June" ;
//       break;
//     }
//     case 7:{
//         day = 31;
//         called = "July" ;
//       break;
//     }
//     case 8:{
//         day = 31;
//         called = "August" ;
//       break;
//     }
//     case 9:{
//         day = 30;
//         called = "September" ;
//       break;
//     }
//     case 10:{
//         day = 31;
//         called = "October" ;
//       break;
//     }
//     case 11:{
//         day = 30;
//         called = "November" ;
//       break;
//     }
//     case 12:{
//         day = 31;
//         called = "December" ;
//       break;
//     }
    
//   }

//   console.log (called + (" ") + day + (" ") + ("хоногтой") )

//4. n  хувьсагчын утгын дагуу эерэг эсвэл сөрөгийг олж хэвлэнэ.
// let too;
// let a;

// too = prompt ("too oruul")
// a = too%2
// console.log(a)
// if (a == 0){
//     b = "tegsh";
// } else {
//     b = "sondgoi";
// }
// console.log(b)
//3. Өгөгдсөн эерэг тоо нь 3-ын үржвэр эсвэл 7-ын үржвэр эсэхийг шалгана уу
// let n;
// let a;

// n = prompt ("urjveree oruul")
// a = n%10
// b = n%100
// d = (b-a)/10
// c = (((n - b)/100))
// f = (a + c + d)

// if (f == 3){
//     e = "3 iin urjver";
// } else if ( f == 6){
//     e = "3 iin urjver";
// } else if ( f == 9){
//     e = "3 iin urjver";
// } else {
//     e = "3 iin urjver bish"
// }

// console.log (n)
// console.log (a)
// console.log (b)
// console.log (c)
// console.log (d)
// console.log (f)
// console.log (e)

//Нас тооцоолох бодлого: yearOfBirth

// let age;
// let yearOfBirth;
// let old;

// yearOfBirth = prompt ("Tanii tursun on")
// age = (2022-yearOfBirth)

// if (age <= 0){
//     old = "On buruu baina"
// } else if (age <= 1){
//     old = "Infant"
// } else if (age <= 3){
//     old = "Toddler"
// } else if (age <= 5){
//     old = "Preschool"
// } else if (age <= 12){
//     old = "Gradeschooler"
// } else if (age <= 18){
//     old = "Teen"
// } else if (age <= 21){
//     old = "Yound Adult"
// } else if (age > 21){
//     old = "adult"
// }

// console.log (age)
// console.log (old)
//5. weight, height гэсэн 2 хувьсагчид утга оруулахад тухайн хэмжээнээс хамааран биеийн жингийн индексийг тооцож тухайн индекс-д харгалзах утгыг хэвлэнэ. 

// let weight ;
// let height ;
// let BMI ;
// let mass ;
// let index ;

// weight = Number (prompt ("Та биеийн жингээ оруулна уу."));
// height = Number (prompt ("Та биеийн өндөрөө оруулна уу."));

// BMI = ((weight / (height * height)) * 10000 )

// if (BMI < 18.5){
//     index = "Under Weight"
// } else if (BMI < 24.9){
//     index = "Normal"
// } else if (BMI < 29.9){
//     index = "Over Weight"
// } else if (BMI < 34.9){
//     index = "Obese"
// } else if (BMI > 35){
//     index = "Extremly Obese"
// } 

// console.log (BMI)
// console.log (index)

//Өгөгдсөн жилийг өндөр жил мөн эсэхийг шалгаад хэрвээ мөн бол өндөр жил мөн үгүй бол үгүй гэж хариулна уу.

// let years;
// let hariu_1;
// let hariu_2;
// let hariu_3;
// let leap;

// years = Number (prompt("Ta jilee oruulna uu") )


// if ( years % 400 === 0){
//     leap = "Leap Year"
// } else if (years % 100 === 0){
//     leap = "Not Leap Year"
// } else if (years % 4 === 0){
//     leap = "Leap Year"
// }

// console.log (leap)

// let asd = Number.isInteger(123) //buhel esehiig shalgana

//1. Өөрийн нэрийн урт, овог нэрийнхээ уртыг харьцуулж үз.

// let firstName = ("gankhulug");
// let lastName = ("urtnasan");

// console.log(firstName.length); 
// console.log(lastName.length); 

// console.log(firstName.toUpperCase()); 
// console.log(lastName.toLowerCase()); 

//4. 'Pinecone academy- н' болон ' leap хөтөлбөрт тавтай морилго уу? ' - г нэг мөр болгон нэгтгэнэ үү. “concat()”

// let a = "Pinecone academy " ;
// let b = a.concat("leap хөтөлбөрт тавтай морилго уу?") ;

// console.log (a);
// console.log (b);

//5. firstName, LastName, country, city, age, job хувьсагч зарлан эдгээр хувьсагч орсон өгүүлбэр зохионо уу. Жишээ нь:  Намайг Болд гэдэг. Би Сүхбаатар дүүрэгт амьдардаг.  гэх мэт

// let firstName = ("Gankhulug");
// let lastName = ("Urtnasan");
// let country = ("Mongol");
// let age = ("18");
// let job = ("Software Engineer");
// let city = ("Ulaanbaatar");

// firstName = prompt ("Neree oruulna uu");
// lastName = prompt ("Ovogoo oruulna uu");
// country = prompt ("Country");
// age = Number (prompt ("Nasaa Oruulna uu"));
// job = prompt ("Ajilaa oruulna uu");
// city = prompt ("City");

// console.log (`Namaig ${firstName} gedeg. Bi ${country} oronii ${city} hotod amidargad bi ${age} nastai` )\

//6. Дараах загварыг хэвлэхийн тулд console.log() болон escape тэмдэгтүүдийг ашиглана уу.

// let a = " 1 2 3 4 5 \n 2 3 4 5 1 \n 3 4 5 1 2 \n 4 5 1 2 3 \n 5 1 2 3 4"

// console.log(a);

//Гараас огноо, сар, өдөр гэсэн утгуудыг аван дараах форматын дагуу харуулна уу. Жишээ 2009, 12, 31 гэж орж ирвэл “2009-12-31”. Анхаарах зүйл хэрвээ өдөр, сар нэг оронтой байвал 2 оронтой болгох буюу сар нь  1 гэж байвал “01” болгох, гараас оруулж байгаа утгыг шалгах

// let ognoo; 
// let sar;
// let udur;
// let utga;

// ognoo = Number (prompt("Ognoo"))
// sar = Number (prompt("Sar"))
// udur = Number (prompt("Udur"))

// if ( sar <= 9 ){
//     sar = ("0" + sar)
// }
// if ( udur <= 9){
//     udur = ("0" + udur )
// }

// console.log (`"${ognoo}-${sar}-${udur}"`)

//2. Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг (Unitel, Mobicom, G-Mobile, Skytel) хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх

// let a = 88888888;
// let dugaar ;
// let operator;

// a = Number (prompt ("Ta dugaaraa oruulna uu!"));

// dugaar = (Math.floor(a/1000000))

// if ( dugaar === 60){
//     operator = "Ondo"
// } else if ( dugaar === 66){
//     operator = "Ondo"
// } else if ( dugaar === 96){
//     operator = "Skytel"
// } else if ( dugaar === 91){
//     operator = "Skytel"
// } else if ( dugaar === 90){
//     operator = "Skytel"
// } else if ( dugaar === 98){
//     operator = "G-Mobile"
// } else if ( dugaar === 93){
//     operator = "G-Mobile"
// } else if ( dugaar === 83){
//     operator = "G-Mobile"
// } else if ( dugaar === 80){
//     operator = "Unitel"
// } else if ( dugaar === 86){
//     operator = "Unitel"
// } else if ( dugaar === 88){
//     operator = "Unitel"
// } else if ( dugaar === 89){
//     operator = "Unitel"
// } else if ( dugaar === 85){
//     operator = "Mobicom"
// } else if ( dugaar === 84){
//     operator = "Mobicom"
// } else if ( dugaar === 89){
//     operator = "Mobicom"
// } else if ( dugaar === 94){
//     operator = "Mobicom"
// } else {
//     operator = "Ta dugaaraa shalgana uu!!!"
// }

// console.log ("Tanii dugaar", a);
// console.log (Math.floor(dugaar));
// console.log (operator)

//