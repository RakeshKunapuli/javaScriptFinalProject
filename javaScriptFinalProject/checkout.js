// var cartproductitems = document.getElementsByClassName("cart-product-item");
// var grandTotal = document.getElementById("grand-total");
// let cartCountElement = document.getElementById("cart-count");

// // Load cart items from local storage
// var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// // Update cart count and render items
// updateCartCount();
// updatedCartItems();

// function updatedCartItems() {
//     // Clear existing items before rendering
//     $(cartproductitems).empty();

//     var totalPrice = 0;

//     for (var i = 0; i < cartItems.length; i++) {
//         var cartitem = cartItems[i];
//         var createDiv = document.createElement('div');
//         createDiv.classList.add('container');
//         createDiv.innerHTML =
//             `<img src="${cartitem.preview}" alt="image">
//             <div class="nametag">
//                 <h3>${cartitem.name}</h3>
//                 <p><b>Amount:</b><span>${cartitem.price}</span></p>
//                 <button onclick='removeitem(${cartitem.id},${i})'>Remove Item</button>
//             </div>`;

//         // Append each new item to the corresponding element in cartproductitems
//         $(cartproductitems).append(createDiv);

//         // Update total price
//         totalPrice += parseInt(cartitem.price);
//     }

//     // Update the total price in the UI
//     document.getElementById('price').innerText = totalPrice;

//     // Update cart count
//     updateCartCount();
// }

// function removeitem(id, i) {
//     cartItems.splice(i, 1);
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     updatedCartItems();
// }

// // Redirecting to the Thankyou page
// function thankyou() {
//     if (cartItems.length <= 0) {
//         alert("There are no items in the cart. Please add items to the cart!");
//     } else {
//         location.assign("thankyou.html");
//     }
// }

// // UpdateCart Function to Update The total cart Count
// function updateCartCount() {
//     var totalItemsInCart = cartItems.length;
//     if (cartCountElement && totalItemsInCart > 0) {
//         cartCountElement.innerText = totalItemsInCart;
//     } else {
//         if (cartCountElement) {
//             cartCountElement.innerText = "0";
//         }
//     }
// }





var cartproductitems = document.getElementsByClassName("cart-product-item");
var grandTotal = document.getElementById("grand-total");
let cartCountElement = document.getElementById("cart-count");
var mainprice = document.getElementById('price')

var cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

 updateCartCount()
updatedCartItems()


 function updatedCartItems() {
    $(cartproductitems).empty();
    var totalPrice =0
    for (var i = 0; i < cartItems.length; i++) {
        var cartitem = cartItems[i];
        var createDiv = document.createElement('div');
        createDiv.classList.add('container');
        createDiv.innerHTML =
            `<img src="${cartitem.preview}" alt="image">
            <div class="nametag">
                <h3>${cartitem.name}</h3>
                <p><b>Amount:</b><span>${cartitem.price}</span></p>
                <button class='removebtn' onclick='removeitem(${cartitem.id},${i})'>Remove Item</button>
                </div>`;

        // Append each new item to the corresponding element in cartproductitems
        $(cartproductitems).append(createDiv)
        totalPrice += parseInt(cartitem.price)
    }
mainprice.innerText = totalPrice
    updateCartCount();
}


function removeitem(id,i) {
      // Remove the item at index i from the cartItems array
      cartItems.splice(i, 1);
      // Update the localStorage with the modified cartItems
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      // Update the UI
      updatedCartItems();
}

var totalPrice =0


for(var i=0;i<cartItems.length;i++){
    var {id,price,name,preview} = cartItems[i]
    var price1 = price
    totalPrice += price1
    mainprice.innerText=totalPrice
}

// Redirecting to the Thankyou page
function thankyou() {
  if (cartItems.length <= 0) {
    alert("There are no items in the cart. Please add items to the cart!");
  }else{

      location.assign("thankyou.html");
  }
}



// UpdateCart Function to Update The total cart Count
function updateCartCount() {
  var totalItemsInCart = cartItems.length;
  if (totalItemsInCart > 0) {
    cartCountElement.innerText = totalItemsInCart;
  } else {
    cartCountElement.innerText = "0";
  }
}

updatedCartItems()