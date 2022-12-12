carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
    ];

    let a = prompt("ta mashinii brand iin ehnii usgee oruulna uu");
    a = a.toUpperCase();

    for (let i = 0; i < carBrands.length; i++){
        if(carBrands[i][0][0] == a){
            console.log("brand: "+carBrands[i][0])
            console.log("country: "+carBrands[i][1])
            console.log("year: "+carBrands[i][2])
            console.log(" ")
        }
    }


//2. машины үйлвэрлэсэн улсаар хайх
    let input = prompt("Mashinii uildverlsen ulsiig oruulna uu")

    for (let i = 0; i < carBrands.length; i++){
        if(carBrands[i][1] == input){
            console.log(carBrands[i][0] + ", " + carBrands[i][1]+ ", " + carBrands[i][2]+", ")
        }
    }

//3. нийт хэдэн ширхэг мөр дата байгаа, хэдэн улсын brand байгааг харуулах
    let country = "" ;
    let b = 0;

    for (let i = 0; i < carBrands.length; i++){
        for (let j = 0; j<carBrands.length; j++){
            b = 0;
            if( carBrands[i][1] == carBrands[j][1] ){
                b++
                console.log(carBrands[i][1] + b);
            }
        }
    }
// console.log("Нийт " + carBrands.length + " мөр дата," + country);