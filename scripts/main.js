window.onload = function () {
    initBuyBtns();
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
function buyProduct() {
    var currBuyBtn = this;
    var currProdDiv = currBuyBtn.parentElement;
    var prod = new Product();
    prod.name = currProdDiv.querySelector(".title").innerHTML;
    prod.description = currProdDiv.querySelector(".description").innerHTML;
    var price = currProdDiv.querySelector(".price").innerHTML;
    price = price.replace("$", "");
    prod.price = parseFloat(price);
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
