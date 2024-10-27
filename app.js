// Sample JavaScript to manage filtering, adding to cart, etc.

function filterProducts() {
    const category = document.getElementById("category").value;
    const ecoScore = document.getElementById("eco-score").value;
    document.getElementById("eco-score-display").textContent = ecoScore;
    // Filtering logic and dynamic product update goes here
}

function addToCart(product) {
    alert("Added " + product + " to the cart!");
    // Add to cart logic goes here
}

function checkout() {
    alert("Proceeding to checkout...");
    // Checkout logic goes here
}