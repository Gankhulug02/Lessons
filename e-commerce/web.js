console.log("ECOMMERCE")

//all vaiables
const productsList = document.querySelector(".items");
const items = document.querySelector(".sidebar-items")
let sagsButton = document.querySelector(".sagsBtn")
let sidebar = document.querySelector(".sidebar")
let allProducts = [] ;

const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    allProducts = data.products;
    displayProduct();
    console.log("Data,: ", allProducts)
}
console.log()

getProducts()

const displayProduct = () => {
    allProducts.forEach((product) => {
        const item = `<div class="card" style="width: 20rem;">
                        <div class="img">
                            <img class="card-img-top mx-25" src="${product.thumbnail}" alt="ip-9">
                        </div>
                        <div class="card-body">
                        <h4 class="card-title text-center">${product.title}</h4>
                        <div class="d-flex justify-content-between">
                            <h5 class="price">$${product.price}</h5>
                            <p class="discount">${product.discountPercentage}% Off</p>
                        </div>
                        <p class="card-text text-truncate">${product.description}</p>
                        <div class="w-100 d-flex justify-content-between">
                            <div class="d-flex ">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <p>${product.rating}</p>
                            </div>
                            <button class="text-end "onclick="nemeh(this)">Нэмэх</button>
                        </div>
                        </div>
                    </div>
                `
        productsList.innerHTML += item
    })
}
displayProduct()

sags = () => {
    sidebar.classList.toggle("sags2")
}
sagsButton.addEventListener("click", sags)

//Sidebar iin innerHTML nemeh function
const itemsnemeh = () => {
    let item = `<div class="sidebar-item d-flex flex-col justify-content-around">
            <div class="count d-flex flex-column justify-content-around">
                <button onclick="countNemeh(this)">+</button>
                <p class="m-0 text-center">1</p>
                <button onclick="countHasah(this)">-</button>
            </div>
            <img src="../image/e-commerce/iphone9 1ip9.svg" alt="" class="w-25">
            <div class="sidebar-item-title w-25">
                <p class="text-truncate">iPhone 9</p>
                <p class="m-0">500</p>
                <p class="m-0 text-secondary">1</p>
            </div>
            <p class="my-auto h-25">$12345</p>
            <button class="border-0 bg-white text-secondary"><i class="fa fa-x"></i></button>
        </div>`
    items.innerHTML += item
}

const nemeh = (e) => {
    console.log("asd")
    itemsnemeh()
}
//Sidebar iin count hiih buttonuud

const countNemeh = (e) => {
    a = e.parentNode.children[1];
    b = e.parentNode.parentNode.children[2].children;
    c = b[1];
    d = e.parentNode.parentNode.children[3]

    a.innerHTML ++ ;
    b[2].innerHTML = a.innerHTML
    d.innerHTML = "$" + b[1].innerHTML * b[2].innerHTML
}
const countHasah = (e) => {
    a = e.parentNode.children[1];
    b = e.parentNode.parentNode.children[2].children;
    c = b[1];
    d = e.parentNode.parentNode.children[3]

    a.innerHTML -- ;
    b[2].innerHTML = a.innerHTML
    d.innerHTML = "$" + b[1].innerHTML * b[2].innerHTML
}

