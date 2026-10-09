// IC13 – COSC 2328 – Professor McCurry
// Implemented by: Jessica Dunlap

// variables
let currentSelectedProduct = null;
let quantity = 1;
let discountRate = 0;

// display update function
function updateDisplay() {
    // Selecting an element and changing its text
const summaryProduct = document.querySelector("#summary-product");
summaryProduct.textContent = "Selected Product: " + currentSelectedProduct;

if (currentSelectedProduct !== null) {
    const summaryTotal = document.querySelector("#summary-total");
    summaryTotal.textContent = "Total: " + (quantity * 100 * (1 - discountRate));
} else {
    const summaryTotal = document.querySelector("#summary-total");
    summaryTotal.textContent = "Total: $0";
}
}
