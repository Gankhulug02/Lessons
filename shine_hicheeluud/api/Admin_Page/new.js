// let productName = document.querySelectorAll("input")[0].value
// let productUne = document.querySelectorAll("input")[1].value
// let productImage = document.querySelectorAll("input")[2].value
// let productCategory = document.querySelectorAll("select").value


const title = document.getElementById("title");
const saveBtn = document.getElementById("saveBtn");
const price = document.getElementById("price");
category = document.getElementById("category");



let hadgalah = async () => {
        await fetch("http://192.168.1.220:4040/product",{
        method: "POST",
        headers: { "Content-type": "application/json" },

        body: JSON.stringify({
            title: title.value,
            category: category.value,
            price: price.value,
            imageURL: `https://images.unsplash.com/photo-1531592937781-344ad608fabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2235&q=80`,
            isSpecial: false,

        }),
    })
}

saveBtn.addEventListener("click",hadgalah);


// console.log("🟩 🟩 🟩");

// const title  = document.getElementById("title");
// const category = document.getElementById("category");
// const price = document.getElementById("price");
// const saveBtn = document.getElementById("saveBtn");
// // const isSpecial = document.getElementById("radioNoLabel");


// let saveFun = async () => {
//     await fetch("http://192.168.1.220:4040/product",{
//     method: "POST",
//     headers: {"Content-type": "application/json"},

//     body: JSON.stringify({
//         title: title.value,
//         category: category.value,
//         price: price.value,
//         imageURL: `https://images.unsplash.com/photo-1531592937781-344ad608fabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2235&q=80`,
//         isSpecial: false,
//     }),
// })

// }

// saveBtn.addEventListener("click", saveFun);