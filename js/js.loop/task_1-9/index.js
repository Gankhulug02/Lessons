console.log ("1. 10 хүртэлх натурал тоог хэвлэх программ бич")
let count = 1;
while ( count <= 10) {
    console.log(count);
    count = count + 1
}


console.log ("2. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич")
count = 2;
while ( count <= 10) {
    console.log(count);
    count = count + 2
}


console.log ("3. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич")
count = 1;
while ( count <= 10) {
    console.log(count);
    count = count + 2
}

console.log(`4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич`)

let total = 0;
let n = 1;

while ( n <= 100) {
    total += n
    n ++;
}

console.log (total)

//5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич

console.log(`5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич`)

total = 0;
n = 1;
 
let b = parseInt(prompt(`хэд хүртэлх тооны нийлбэр олох вэ?`))
 
while ( n <= b) {
    total += n
    n ++;
}

console.log (total)

console.log(`8. N тооны факториал олох программ бич
`)

total = 1;
n = 1;

let a = Number (prompt(`хэдийн факториал олох вз?`));

while ( n <= a) {
    total *= n
    n ++;
}

console.log (total)

//9. Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич
console.log(`9. Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич
`)

n = parseInt(prompt(`Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ`));

a=0;
b=0;

while(n > 0){
    a = n%10
    b = b + a
    n = Math.floor (n/10);
}
console.log(b);