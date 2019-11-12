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
    alert("You clicked buy");
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
