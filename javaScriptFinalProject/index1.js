$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });

    var clothingElement = document.getElementById("clothing-items");
    var accessory = document.getElementById("accessories-item");
     var cartCountElement = document.getElementById("cart-count")

    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function (response) {
        var data = response;

        for (let i = 0; i < data.length; i++) {
            if (data[i].isAccessory === false) {
                clothingElement.innerHTML += `
                    <div class="product-card" id="${data[i].id}">
                            <img class="image" src="${data[i].preview}" alt="Product Image">
                        <div class="details">
                            <h3 class="name">${data[i].name}</h3>
                            <h4 class="brand">${data[i].brand}</h4>
                            <h5 class="price">Rs <span>${data[i].price}</span></h5>
                        </div>
                    </div>
                `;
                }else{
                    accessory.innerHTML += `
                    <div class="product-card" id="${data[i].id}">
                            <img class="image" src="${data[i].preview}" alt="Product Image">
                        <div class="details">
                            <h3 class="name">${data[i].name}</h3>
                            <h4 class="brand">${data[i].brand}</h4>
                            <h5 class="price">Rs <span>${data[i].price}</span></h5>
                        </div>
                    </div>
                `;
            }
        }
    
    });

      $(document).on("click",'.product-card',function(){
        var productId = $(this).attr("id")
        window.location.href=`details.html?productId=${productId}`

 })
 function addToCart() {
    var Obj = {
        productprice: productData.price,
        productname: productData.name,
        productpreview: productData.preview
    };

    cartItems.push(Obj);
    updateCartCount();
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Item added to cart");
}

function updateCartCount() {
    var totalItemsInCart = cartItems.length;
    cartCountElement.textContent = totalItemsInCart;
}
})


$(document).on("click", '.product-card', function () {
    var productId = $(this).attr("id");
    window.location.href = `details.html?productId=${productId}`;
});

// Load cart items from local storage and update cart count
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
updateCartCount();

// Function to add items to the cart
function addToCart(productData) {
    var Obj = {
        productprice: productData.price,
        productname: productData.name,
        productpreview: productData.preview
    };

    cartItems.push(Obj);
    updateCartCount();
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
}
function updateCartCount() {
    var totalItemsInCart = cartItems.length;

    if (totalItemsInCart > 0) {
        cartCountElement.innerText = totalItemsInCart;
    } else {
        cartCountElement.innerText = "0";
    }
}
;