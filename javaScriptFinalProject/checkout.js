
var cartproductitems = document.getElementsByClassName("cart-product-item");
var grandTotal = document.getElementById("grand-total")


var cartItems = JSON.parse(localStorage.getItem("cartItems"));
var totalPrice = 0;
for (var i = 0; i < cartItems.length; i++) {
    var cartItem = cartItems[i];
    var cartproductitem = cartproductitems[i];
    totalPrice += parseInt(cartItem.productprice);
    var cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("container");
    cartItemDiv.innerHTML = `
        <img src="${cartItem.productpreview}" alt="image">
        <div class="nametag">
            <h3>${cartItem.productname}</h3>
            <p><b>Amount:</b><span>${cartItem.productprice}</span></p>
        </div>`;
    
    $(cartproductitems).append(cartItemDiv);
}

var price1 = document.getElementById("price");
price1.innerHTML = totalPrice;



    var cartItems = window.localStorage.getIt("cartItems");
    cartItems = cartItems === null || cartItems === '' ? [] : cartItems;
    cartItems = cartItems.length > 0 ? JSON.parse(cartItems) : [];
    updateCartCount()
    var totalCount = 0;
    for(var i=0; i<cartItems.length; i++) {
        totalCount = totalCount + cartItems[i].count;
    }

    $('#cart-count').html(totalCount);

function thankyou(){
    location.assign("thankyou.html")
}

function updateCartCount() {
    var totalItemsInCart = cartItems.length;
    cartCountElement.textContent = totalItemsInCart;
}


