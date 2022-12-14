console.log("ECOMMERCE");
// All variables and DOM
const productList = document.querySelector(".items");
const cartList = document.querySelector(".sidebar-items");
const cartCount = document.querySelector(".cartCount");
const guudegBaraa = document.querySelector(".guudeg-baraa")
const categoryList = document.querySelector(".nav-bottom")
const cartPrice = document.querySelector(".cartPrice");

let sidebar = document.querySelector(".sidebar")
let sidebarUstgahBtn = document.querySelectorAll("button")[2]
let allProducts = [];
let cartProducts = [];

const displayProduct = () => {
  productList.innerHTML = "";
  allProducts.forEach((product, idx) => {
    const productItem = `<div class="card" style="width: 20rem;">
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
                                <div class="d-flex text-warning">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <p>${product.rating}</p>
                                </div>
                                <button class="text-end " onclick="addCart(${product.id})">??????????</button>
                            </div>
                            </div>
                        </div>
`
    productList.innerHTML += productItem;
  });
};



const displayCategory = () => {
  categoryList.innerHTML = " ";
  allCategories.forEach((category) => {
    const categoryItem = `
      <button onclick="getCategoryProduct('${category}')">${category}</button>
    `;
    categoryList.innerHTML += categoryItem;
  });
};

const getCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = await response.json();
  allCategories = data;
  displayCategory();
};

const getCategoryProduct = async (category) => {
  console.log(category);
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
};



const guudegBaraaDisplay = () => {
  guudegBaraa.innerHTML = "";
  console.log("asd")
  allProducts.forEach((product, idx) => {
    const productItem = ` <div class="card text-end" >
                              <img class="card-img-top" src="${product.thumbnail}" alt="Card image cap">
                              <div class="card-body">
                                <p class="card-title h-50 overflow-hidden">${product.description}</p>
                                <p class="price"> $${product.price}</p>
                              </div>
                            </div>`
    guudegBaraa.innerHTML += productItem;
  });
};

const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
  guudegBaraaDisplay();
  displayCart();
};

getCategories();
getProducts();

//sagsandeer darahaar hide unhide hiih button
sags = () => {
  sidebar.classList.toggle("sags2")
}

// sagsButton.addEventListener("click", sags)
const sagsBtn = () => sags();

//sidebar dotorh x button
sidebarUstgahBtn.addEventListener("click", sags)



const addCart = (productId) => {
  const findIdx = cartProducts.findIndex((item) => item.id === productId);
  if (findIdx > -1) {
    //ene baraa cartProducts array dotor bval nemehgui harin baraanii too hemjee nemne
    cartProducts[findIdx].count += 1;
  } else {
    //bhgui bol baraag nemne
    const findIndex = allProducts.findIndex((item) => item.id === productId);

    const newBaraa = { count: 1, ...allProducts[findIndex] };
    cartProducts.push(newBaraa);
  }
  cartCount.innerText = cartProducts.length;
  displayCart();
};

const calculateCartPrice = () => {
  let sumPrice = 0;
  for (product of cartProducts) {
    sumPrice = sumPrice + product.price * product.count;
  }
  return sumPrice;
};

const displayCart = () => {
  cartList.innerHTML = " ";
  for (product of cartProducts) {
    const cartItem = `<div class="sidebar-item  d-flex flex-col justify-content-around">
                          <div class="count d-flex flex-column justify-content-around">
                              <button onclick="countNemeh(this)">+</button>
                              <p class="m-0 text-center">1</p>
                              <button onclick="countHasah(this)">-</button>
                          </div>
                          <img src="${product.thumbnail}">
                          <div class="sidebar-item-title w-25">
                              <p class="text-truncate">${product.title}</p>
                              <p class="m-0">$${product.price}</p>
                              <p class="m-0 text-secondary">1</p>
                          </div>
                          <p class="my-auto h-25">$${product.price}</p>
                          <button class="border-0 bg-white text-secondary"><i class="fa fa-x"></i></button>
                          </div>
                      `
    cartList.innerHTML += cartItem;
  }
  const totalCartPrice = calculateCartPrice();
  cartPrice.innerText = `$${totalCartPrice}`;
};  


//Sidebar baraanii too nemdeg hasdag button

const countNemeh = (e) => {
    let a = e.parentNode.children[1];
    let b = e.parentNode.parentNode.children[2].children;
    let c = b[1];
    let d = e.parentNode.parentNode.children[3]
    console.log(d.innerHTML)

    a.innerHTML ++ ;
    b[2].innerHTML = a.innerHTML
    d.innerHTML = "$" + product.price * b[2].innerHTML
}


const countHasah = (e) => {
  let a = e.parentNode.children[1];
  let b = e.parentNode.parentNode.children[2].children;
  let c = b[1];
  let d = e.parentNode.parentNode.children[3]
  console.log(d.innerHTML)

  if(a.innerHTML > 0){
    a.innerHTML -- ;
  }
  b[2].innerHTML = a.innerHTML
  d.innerHTML = "$" + product.price * b[2].innerHTML
}
