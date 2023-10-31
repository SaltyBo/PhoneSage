//  tab switching code
document.addEventListener('DOMContentLoaded', function () {

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content > div');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    tabContents.forEach((content) => (content.style.display = 'none'));
    tabContents[index].style.display = 'block';
    });
});
// Set Sign Up tab as active by default
tabs[0].click();
});



function playPurchaseSound() {
    var audio = document.getElementById("purchaseAudio");
    audio.play();
}




// Get a reference to the button and the nav ul element
const toggleNavButton = document.getElementById("toggleNavButton");
const navUl = document.querySelector("nav ul");

// Add a click event listener to the button
toggleNavButton.addEventListener("click", function() {
//   Toggle the display property of the nav ul element
  if (navUl.style.display === "none" || navUl.style.display === "") {
    navUl.style.display = "flex";
  } else {
    navUl.style.display = "none";
  }
});


// JavaScript code for filtering products, updating price label, and handling "Buy Now" buttons
const productFilter = document.getElementById("product-filter");
const priceFilter = document.getElementById("price-filter");
const priceLabel = document.getElementById("price-label");

// Event listener for product filter dropdown and price range slider
productFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("input", updatePriceLabel);
priceFilter.addEventListener("change", filterProducts);

// Initialize the price filter to its maximum value
priceFilter.value = priceFilter.max;

// Function to update the displayed price range label
function updatePriceLabel() {
    // Update the displayed price range label based on the slider value
    priceLabel.textContent = `$0 - $${priceFilter.value}`;
}

// Function to filter products based on category and price range
function filterProducts() {
    // Get selected category and price range values from filter elements
    const selectedCategory = productFilter.value;
    const selectedPrice = priceFilter.value;

    // Get all product elements on the page
    const products = document.querySelectorAll(".product");
    const data = document.querySelectorAll(".product-category");

    // Iterate through each product and check if it matches the selected criteria
    products.forEach((product) => {
        // Get the data-category attribute from the parent element (product-grid)
        const category = product.closest(".product-grid").getAttribute("data-category");
        const price = parseInt(product.querySelector("p").textContent.match(/\d+/)[0]);

        // Check if the product's category and price match the selected values
        const categoryMatch = selectedCategory === "All" || selectedCategory === category;
        const priceMatch = price <= selectedPrice;

        // Display or hide the product based on matching criteria
        if (categoryMatch && priceMatch) {
            product.style.display = "block"; // Show the product
        } else {
            product.style.display = "none"; // Hide the product
        }
    });
}

// Function to handle "Buy Now" button clicks
const buyButtons = document.querySelectorAll(".buy-button");
buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Custom logic can be added here when a "Buy Now" button is clicked
        alert("Product purchased!"); // For example, displaying an alert message
    });
});

// Initialize the price label to display the default price range
updatePriceLabel();


