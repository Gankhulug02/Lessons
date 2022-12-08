let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 23,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]


for (let i=0; i<students.length; i++){
    for (let j=i+1; j<students.length; j++){
        if(students[i].age == students[j].age){
            console.log(students[i].name +", "+ students[j].name +" "+ students[j].age)
        }
    }
}

let male ="";
let female ="";
let findSex = (object) => {
    for(let i = 0; i<students.length; i++ ){
        if(students[i].gender == 'male'){
            male ++
        } else{
            female ++
        }
    }
    count = ("Male " + male +" Female " +female) 
    return count
}

console.log(findSex(students));