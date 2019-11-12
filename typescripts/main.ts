window.onload = function() {
    initBuyBtns();
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

function buyProduct() {
    let currBuyBtn = <HTMLElement>this;
    let currProdDiv = currBuyBtn.parentElement;

    
    let prod = new Product();

    prod.name = currProdDiv.querySelector(".title").innerHTML;

    prod.description = currProdDiv.querySelector(".description").innerHTML;

    let price = currProdDiv.querySelector(".price").innerHTML;
    price = price.replace("$", "");
    prod.price =  parseFloat(price);

}