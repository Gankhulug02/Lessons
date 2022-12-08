
let students = 
    [{name: "Гончигсумлай",
    birthOfYear: 1999, 
    hobby: "морь", 
    single: false},
    {name: "Naraa",
    birthOfYear: 2004,
    hobby: "car",
    single: true},
    {name: "Saraa",
    birthOfYear: 1996,
    hobby: "car",
    single: true
    }]

console.log(students);



let nas = (object) =>{
for (let i = 0; i < object.length; i++){
    // console.log(i)
    if(object[i].birthOfYear < 2000){
        age = 2022 - object[i].birthOfYear
        console.log(object[i].name + " " + age + " " + "nastai")
    }
}
}

nas(students);
console.log(" ")

let nas2 = (object) =>{
    for (let i = 0; i < object.length; i++){
        // console.log(i)
            age = 2022 - object[i].birthOfYear
            console.log(object[i].name + " " + age + " " + "nastai")
    }
    }
    nas2(students);

let marriage = (object) =>{
    for (let i = 0; i < object.length; i++){
        // console.log(i)
        if(object[i].single == true){
            console.log(object[i].name + " " + "Gerlesen")
        }
    }
}

marriage(students);