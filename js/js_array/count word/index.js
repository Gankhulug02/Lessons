let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];

let i=0;
let count=0;

while(i < data.length){
    if(data[i]=== 'байна.'){
        count ++
    }
    i++
}
console.log("нүүрс гэдэг үг", count, "байна")

//garaas avsan uguulberees ug haih program

let text_array;
let text= "";
let letter= "asd";

text = prompt("ta uguulber oruul");
letter = prompt("haih ugee oruul");
console.log(text);
text_array = text.split(" ");
console.log(text_array);

i = 0;
count = 0;
while(i < text.length){
    if(text_array[i]=== letter){
        count ++
    }
    i++
}

console.log (letter, "gedeg ug", count, "bn");