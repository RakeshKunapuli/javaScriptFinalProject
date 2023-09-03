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
 var totalitems = 0
$(document).ready(function() {
    var cartItems = window.localStorage.getItem('product-list');
    cartItems = cartItems === null || cartItems === '' ? [] : cartItems;
    cartItems = cartItems.length > 0 ? JSON.parse(cartItems) : [];

    var totalCount = 0;
    for(var i=0; i<cartItems.length; i++) {
        totalCount = totalCount + cartItems[i].count;
    }

    $('#cart-count').html(totalCount);
})
})
