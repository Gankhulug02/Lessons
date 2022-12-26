console.log("Fetch");

// fetch("http://127.0.0.1:5500/js/fetch/data.html")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     data.employees.forEach((emp) => {
//       console.log(emp.firstName);
//     });
//   });

const container = document.getElementById("container");
async function getdata() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    // console.log(data);
    data.products.forEach((product) => {
      const item = `
      <div class="background">
        <img src=" ${product.thumbnail}" alt="">
        <div class="text">
        ${product.brand}: ${product.title} - $${product.price}
        </div>
      </div>
      `;
      container.innerHTML += item;
    });
  } catch (err) {
    console.log("Aldaa:", err.message);
  }
}

getdata();