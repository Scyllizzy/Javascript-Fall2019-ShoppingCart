window.onload = function () {
    initBuyBtns();
    displayNumberOfItems();
    var cartIcon = document.querySelector("div#shopping-cart");
    cartIcon.onclick = showCartContents;
};
/**
 * Wire up all the "Buy" buttons to an onclick event.
 */
function initBuyBtns() {
    var buyButtons = document.querySelectorAll("div.buy");
    for (var i = 0; i < buyButtons.length; i++) {
        var currBtn = buyButtons[i];
        currBtn.onclick = buyProduct;
    }
}
/**
 * Adds the product that was clicked to the shopping cart and saves it to local storage.
 */
function buyProduct() {
    var currBtn = this; // The "Buy" button that was clicked
    var prod = getProduct(currBtn);
    saveProductToCart(prod);
    displayNumberOfItems();
}
/**
 * Get the product object for the currently selected product.
 */
function getProduct(currBuyBtn) {
    var currProdDiv = currBuyBtn.parentElement;
    var prod = new Product();
    prod.name = currProdDiv.querySelector(".title").innerHTML;
    prod.description = currProdDiv.querySelector(".description").innerHTML;
    var price = currProdDiv.querySelector(".price").innerHTML;
    price = price.replace("$", "");
    prod.price = parseFloat(price);
    return prod;
}
/**
 * Saves the product to the shopping cart in local storage.
 * @param p The product to be added.
 */
function saveProductToCart(p) {
    ProductStorage.addProduct(p);
    return ProductStorage.getAllProducts();
}
/**
 * Displays the number of products in the shopping cart.
 */
function displayNumberOfItems() {
    var numItems = ProductStorage.getNumOfProducts();
    var cartSpan = document.querySelector("div#shopping-cart > span");
    cartSpan.innerHTML = numItems.toString();
}
function showCartContents() {
    var displayDiv = document.querySelector("#display-cart");
    displayDiv.innerHTML = "";
    var allProds = ProductStorage.getAllProducts();
    for (var i = 0; i < allProds.length; i++) {
        var prod = allProds[i];
        //Create a div for each product
        var prodDiv = document.createElement("div");
        //Add a class for that div
        prodDiv.classList.add("display-product");
        //Create the h2
        var h2 = document.createElement("h2");
        //Add title w/ product name & price to the innerHTML of the h2
        h2.innerHTML = prod.name + " - $" + prod.price;
        //Create the paragraph
        var description = document.createElement("p");
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
/**Represents a single shopping cart item.*/
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
//Test code
{
    /*  let prod = new Product();
    
        prod.name = "something";
        prod.description = "other things";
        prod.price = 10.99;
    */
}
var ProductStorage = /** @class */ (function () {
    function ProductStorage() {
    }
    // Add Product
    ProductStorage.addProduct = function (p) {
        // Get exsisting products from local storage
        var prods = ProductStorage.getAllProducts();
        // Add the product
        prods.push(p);
        // Turn it into a JSON string again
        var data = JSON.stringify(prods);
        // Re-add it back to local storage
        localStorage.setItem("prods", data);
    };
    // Retrieve all products
    /**
     * Returns all products, or returns an empty array if no products are stored.
     */
    ProductStorage.getAllProducts = function () {
        var data = localStorage.getItem("prods");
        if (data == null)
            return new Array();
        return JSON.parse(data);
    };
    // Get number of products
    ProductStorage.getNumOfProducts = function () {
        return ProductStorage.getAllProducts().length;
    };
    return ProductStorage;
}());
