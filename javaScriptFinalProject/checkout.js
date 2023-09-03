// Get all elements with the class "cart-product-item"
var cartproductitems = document.getElementsByClassName("cart-product-item");
var grandTotal = document.getElementById("grand-total")

// Load cart items from local storage
var cartItems = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartItems);

// Initialize the total price
var totalPrice = 0;

// Loop through each cart item and append it to the corresponding element
for (var i = 0; i < cartItems.length; i++) {
    var cartItem = cartItems[i];
    var cartproductitem = cartproductitems[i];

    // Update the total price with the product's price
    totalPrice += parseInt(cartItem.productprice);

    // Create a new div element to hold the cart item content
    var cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("container");
    
    // Set the inner HTML for the cart item
    cartItemDiv.innerHTML = `
        <img src="${cartItem.productpreview}" alt="image">
        <div class="nametag">
            <h3>${cartItem.productname}</h3>
            <p><b>Amount:</b><span>${cartItem.productprice}</span></p>
        </div>`;
    
    // Append the cart item div to the cart product item
    $(cartproductitems).append(cartItemDiv);
}

// Update the total price in the DOM
var price1 = document.getElementById("price");
price1.innerHTML = totalPrice;


var totalitems = 0
// $(document).ready(function() {
    var cartItems = window.localStorage.getItem('product-list');
    cartItems = cartItems === null || cartItems === '' ? [] : cartItems;
    cartItems = cartItems.length > 0 ? JSON.parse(cartItems) : [];

    var totalCount = 0;
    for(var i=0; i<cartItems.length; i++) {
        totalCount = totalCount + cartItems[i].count;
    }

    $('#cart-count').html(totalCount);
// })

function thankyou(){
    location.assign("thankyou.html")
}


