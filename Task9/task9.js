// 19-06-2026 Java Script Task's - 9



let products = [];
let cart = [];
const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const loading = document.getElementById("loading");

fetch("https://fakestoreapi.com/products")

.then((response) => response.json())

.then((data) => {
    products = data;
    displayProducts(products);
    calculateStatistics();
})

.catch((error) => {
    console.log(error);
    loading.innerText =
    "Failed To Load Products";
})

.finally(() => {
    loading.style.color = "green";
    loading.innerText =
    "Products Loaded Successfully ✅";
});

function displayProducts(productList){
    const productTitles =
    productList.map(
        product => product.title
    );

    console.log(productTitles);
    productsContainer.innerHTML = "";
    productList.forEach((product) => {

        let card =
        document.createElement("div");
        card.className = "card";
        card.innerHTML = `

            <img
            src="${product.image}"
            alt="${product.title}">

            <h3>${product.title}</h3>

            <p>
            <strong>Price:</strong>
            $${product.price}
            </p>

            <p>
            <strong>Category:</strong>
            ${product.category}
            </p>

            <p>
            <strong>Rating:</strong>
            ⭐ ${product.rating.rate}
            </p>

            <button
            onclick="addToCart(${product.id})">

            Add To Cart
            </button>
        `;
        productsContainer.append(card);
    });
}

searchInput.addEventListener(
    "keyup",
    filterProducts
);

categorySelect.addEventListener(
    "change",
    filterProducts
);

function filterProducts(){
    let searchText =
    searchInput.value.toLowerCase();

    let selectedCategory =
    categorySelect.value;

    let filteredProducts =
    products.filter((product) => {

        let matchSearch =
        product.title
        .toLowerCase()
        .includes(searchText);

        let matchCategory =
        selectedCategory === "all"
        ||
        product.category ===
        selectedCategory;
        return (
            matchSearch &&
            matchCategory
        );
    });
    displayProducts(filteredProducts);
}

function calculateStatistics(){
    document.getElementById(
    "totalProducts"
    ).innerText =
    products.length;

    let totalPrice =
    products.reduce(
        (sum, product) => {
            return sum + product.price;
        },
        0
    );

    let averagePrice =
    (
        totalPrice /
        products.length
    ).toFixed(2);

    document.getElementById(
    "averagePrice"
    ).innerText =
    "$" + averagePrice;

    let highestProduct =
    [...products]
    .sort(
        (a,b) =>
        b.price - a.price
    )[0];

    let lowestProduct =
    [...products]
    .sort(
        (a,b) =>
        a.price - b.price
    )[0];

    document.getElementById(
    "highestPrice"
    ).innerText =
    highestProduct.title;

    document.getElementById(
    "lowestPrice"
    ).innerText =
    lowestProduct.title;
}

function addToCart(id){

    let product =
    products.find(
        (item) =>
        item.id === id
    );
    cart.push(product);
    updateCart();
}

function updateCart(){

    let cartItems =
    document.getElementById(
    "cartItems"
    );

    let cartCount =
    document.getElementById(
    "cartCount"
    );

    let cartTotal =
    document.getElementById(
    "cartTotal"
    );

    cartItems.innerHTML = "";
    if(cart.length === 0){
        cartItems.innerHTML =
        "<p>Your Cart Is Empty</p>";
    }

    cart.forEach((item) => {
        cartItems.innerHTML += `
        <div class="cart-item">
            <span>
            ${item.title}
            </span>

            <button
            onclick="removeFromCart(${item.id})">
            Remove
            </button>
        </div>
        `;
    });
    cartCount.innerText =
    cart.length;

    let total =
    cart.reduce(
        (sum, item) =>
        sum + item.price,
        0
    );
    cartTotal.innerText =
    total.toFixed(2);
}

function removeFromCart(id){

    let removed = false;
    cart = cart.filter((item) => {
        if(
            item.id === id &&
            !removed
        ){
            removed = true;
            return false
        }
        return true;
    });
    updateCart();
}

function scrollToProducts(){
    document
    .getElementById("productsSection")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function removeFromCart(id){
    let removed = false;
    cart = cart.filter((item) => {
        if(
            item.id === id &&
            !removed
        )
        {
            removed = true;
            return false;
        }
        return true;
    });
    updateCart();
}

function scrollToProducts(){
    document
    .getElementById("productsSection")
    .scrollIntoView({
        behavior:"smooth"
    });
}