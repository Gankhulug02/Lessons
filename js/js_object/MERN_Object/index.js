const users = [
    {
        name:   'Alex',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30
      },
    {
        name:   'Job',
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
    {
        name:   'Brook',
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 50
      },
    {
        name:   'Daniel',
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40
      },
    {
        name:   'John',
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
    {
        name:   'Thomas',
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40
      },
    {
        name:    'Paul',
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40
      }
    ]
    console.log("1.Нэг хэрэглэгчийн объектын бүх утгыг авч хэвлэх.");
    console.log(users[0])
    console.log(" ")


    console.log("2.Хэрэглэгчийн объектод олон ур чадвар эзэмшсэн хүнийг олоорой.")
    for(let i=0; i<users.length; i++){
        if(users[i].skills.length >= 2){
            console.log(users[i].name +": "+users[i].skills)
        }
    }
    console.log(" ")
    console.log("3.Нэвтэрсэн хэрэглэгчдийг тоолж, дараах объектоос 50-аас дээш оноо авсан хэрэглэгчдийг тоол.")

    let count1 = 0;
    let count2 = 0;
    for(let i = 0; i<users.length; i++){
        if(users[i].isLoggedIn == true){
            count1 ++
            if(users[i].points > 50){
                count2 ++
            }
        }
    }
    console.log("Нэвтэрсэн хэрэглэгчид: "+ count1)
    console.log("50-аас дээш оноо авсан хэрэглэгчид: "+ count2)
    console.log("")

    let ner =" ";
    console.log("4.Хэрэглэгчийн объектоос MERN ( MongoDB, Express, React, Node ) стек хөгжүүлэгч хүмүүсийг олоорой.")
    for(let i=0; i<users.length; i++){
        for( let j=0; j<users[i].skills.length; j++){
            if(users[i].skills[j]== "MongoDB"){
                if(users[i].skills[j+1] == "Express"){
                    if(users[i].skills[j+2] == "React"){
                        if(users[i].skills[j+3] == "Node"){
                            ner = ner + users[i].name +", "
                        }
                    }
                }
            }
        }
    }
    console.log("( MongoDB, Express, React, Node ) стек хөгжүүлэгч:" + ner)
