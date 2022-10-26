const url = "https://products.adazhu.no/wp-json/wc/store/products";
const productsContainer = document.querySelector (".products-content2");

async function getProduct () {
    try {
        const response = await fetch (url);
        const results = await response.json();
        console.log(results);

        createHTML (results);
    }
    catch (error) {
        console.log (error);
    }
}

getProduct ();

function createHTML (products) {
    products.forEach (function (product) {
        productsContainer.innerHTML += `
        <a href ="details.html?id=${product.id}" class="product">
           <img src="${product.images[0].src}" alt="${product.name}">
           <h3>${product.name}</h3>
           <p> ${product.prices.price} kr</p>
           <button id="btn"><i class="fa-sharp fa-solid fa-cart-plus"></i> Add to cart</button>
        </a>`;
    }
    )
}