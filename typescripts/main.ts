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
    alert("You clicked buy");
}