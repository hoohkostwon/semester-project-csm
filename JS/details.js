const detailContainer = document.querySelector (".product-details");
const queryString = document.location.search;
const params= new URLSearchParams (queryString);
const id=params.get ("id");

const url = "https://products.adazhu.no/wp-json/wc/store/products/" + id;

async function fetchProduct () {
    try {
        const response = await fetch (url);
        const results = await response.json();
        createHTML (results);
        console.log (results)
    }
    catch(error) {
        console.log (error)
    }
}

fetchProduct();

function createHTML (products) {
    detailContainer.innerHTML = `
    <a href ="Eshop.html" class="page-link2"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back </a>
    <div class="product-container">
     <div class= "product-images">
         <img src="${products.images[0].src}" alt="${products.name}">
     </div>
     <div class= "product-summery">
          <h1> ${products.name} </h1>
          <p> ${products.prices.price} kr</p>
          <p> ${products.short_description} </p>
          <input type="number" id="quantity" class="qty text" step="1" min="1" max="" name="quantity" value="1" title="Qty" inputmode="numeric">
          <button id="btn"><i class="fa-sharp fa-solid fa-cart-plus"></i> Add to cart</button>
     </div>
     <div class= "product-description">
          <h3> Description </h3>
          <p> ${products.description} </p>
          <h3>${products.attributes[0].name}</h3>
          <p>${products.attributes[0].terms[0].name}</p>
          <h3>${products.attributes[1].name}</h3>
          <p>${products.attributes[1].terms[0].name}</p>
     </div>
    </div>`;
} 

