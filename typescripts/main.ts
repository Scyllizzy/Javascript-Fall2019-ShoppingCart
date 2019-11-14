window.onload = function() {
    initBuyBtns();
    displayNumberOfItems();

    let cartIcon = <HTMLElement>document.querySelector("div#shopping-cart");
    cartIcon.onclick = showCartContents;
}

/**
 * Wire up all the "Buy" buttons to an onclick event.
 */
function initBuyBtns() {
    let buyButtons = document.querySelectorAll("div.buy");

    for (let i = 0; i < buyButtons.length; i++) {
        let currBtn = <HTMLElement>buyButtons[i];
        currBtn.onclick = buyProduct;
    }
}

/**
 * Adds the product that was clicked to the shopping cart and saves it to local storage.
 */
function buyProduct() {
    let currBtn = this; // The "Buy" button that was clicked
    let prod = getProduct(currBtn);
    saveProductToCart(prod);
    displayNumberOfItems();
}

/**
 * Get the product object for the currently selected product. 
 */
function getProduct(currBuyBtn:HTMLElement) {
    let currProdDiv = currBuyBtn.parentElement;

    let prod = new Product();

    prod.name = currProdDiv.querySelector(".title").innerHTML;
    prod.description = currProdDiv.querySelector(".description").innerHTML;
    let price = currProdDiv.querySelector(".price").innerHTML;
    price = price.replace("$", "");
    prod.price = parseFloat(price);

    return prod;
}

/**
 * Saves the product to the shopping cart in local storage.
 * @param p The product to be added.
 */
function saveProductToCart(p:Product):Product[] {
    ProductStorage.addProduct(p);
    return ProductStorage.getAllProducts();
}

/**
 * Displays the number of products in the shopping cart.
 */
function displayNumberOfItems() {
    let numItems = ProductStorage.getNumOfProducts();
    let cartSpan = document.querySelector("div#shopping-cart > span");
    cartSpan.innerHTML = numItems.toString();
}

function showCartContents() {
    let displayDiv = document.querySelector("#display-cart");
    displayDiv.innerHTML = "";

    let allProds = ProductStorage.getAllProducts();

    for (let i = 0; i < allProds.length; i++) {
        const prod = allProds[i];

        //Create a div for each product
        let prodDiv = document.createElement("div");
        //Add a class for that div
        prodDiv.classList.add("display-product");

        //Create the h2
        let h2 = document.createElement("h2");
        //Add title w/ product name & price to the innerHTML of the h2
        h2.innerHTML = prod.name + " - $" + prod.price;

        //Create the paragraph
        let description = document.createElement("p");
        //Add the product description to the paragraph innerHTML 
        description.innerHTML = prod.description;

        //Add the h2 as a child element to the product div
        prodDiv.appendChild(h2);
        //Add the p as a child element to the product div under the h2
        prodDiv.appendChild(description);

        //Add the whole product to the display div for all the products
        displayDiv.appendChild(prodDiv);
    }
}