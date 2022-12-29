let table = document.querySelector("table")
let productList = document.querySelector("tbody")

console.log(productList)

const getData = async () => {
    const response = await fetch("http://192.168.1.220:4040/product");
    
    const data = await response.json();
    
    allProducts = data.product;
    
    console.log(data)
    displayProduct();
    // guudegBaraaDisplay();
    // displayCart();
};

getData();

const displayProduct = () => {
    productList.innerHTML = "";
    let i = 0;
    
    allProducts.forEach((product) => {
        i++;
        const productItem = `<tr>
        <th scope="row">${i}</th>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td>${product.isSpecial}</td>
        <td><img src="${product.imageURL}" alt="" class="w-25"></td>
        <td class="w-25">
        <button class="btn btn-success">Edit</button>
        <button class="btn btn-danger">Delete</button>
        </td>
        </tr>
        `
        productList.innerHTML += productItem;
    });
  };