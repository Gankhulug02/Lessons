console.log("ECOMMERCE")
//all vaiables
const productsList = document.querySelector(".items");
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
                            <button class="text-end">Нэмэх</button>
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