
    var productId = new URLSearchParams(location.search).get("productId");
var imageElement = document.getElementById("image");
var detailsElement = document.getElementById("details");
var cartCountElement = document.getElementById("cart-count"); // Get the cart count element

$.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`, function (response) {
        var productData = response;
        
        // Create and append the main product image
        const mainImg = document.createElement("img");
        mainImg.id = "mainImg";
        mainImg.src = productData.preview;
        imageElement.appendChild(mainImg);

        // Create and append other product details (name, brand, price, description, etc.)
        const nameElement = document.createElement("h1");
        nameElement.classList.add("name");
        nameElement.innerText = productData.name;
        detailsElement.appendChild(nameElement);

        const brandElement = document.createElement("h1");
        brandElement.classList.add("brand");
        brandElement.innerText = productData.brand;
        detailsElement.appendChild(brandElement);

        const priceElement = document.createElement("p");
        priceElement.classList.add("price");
        priceElement.innerHTML = `Price: Rs <span>${productData.price}</span>`;
        detailsElement.appendChild(priceElement);

        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("descriptiondiv");

        const descriptionHeading = document.createElement("h2");
        descriptionHeading.classList.add("description-heading");
        descriptionHeading.innerText = "Description";
        descriptionDiv.appendChild(descriptionHeading);

        const descriptionContent = document.createElement("p");
        descriptionContent.classList.add("description-para");
        descriptionContent.innerText = productData.description;
        descriptionDiv.appendChild(descriptionContent);

        detailsElement.appendChild(descriptionDiv);

        const productPreview = document.createElement("h1");
        productPreview.classList.add("product-preview");
        productPreview.innerText = "Product Preview";
        detailsElement.appendChild(productPreview);

        const imagesDiv = document.createElement("div");
        imagesDiv.id = "previewing";

        for (let i = 0; i < productData.photos.length; i++) {
            const image = document.createElement("img");
            image.id = `images_${i}`;
            image.src = productData.photos[i];

            if (i === 0) {
                image.classList.add("active");
            }

            image.onclick = function () {
                activeClass(i);
            }

            imagesDiv.appendChild(image);
        }
        detailsElement.appendChild(imagesDiv);

        function activeClass(num) {
            const previousCard = document.getElementsByClassName("active")[0];
            previousCard.classList.remove("active");

            const activeCard = document.getElementById(`images_${num}`);
            activeCard.classList.add("active");

            const mainImg = document.getElementById("mainImg");
            mainImg.src = productData.photos[num];
        }

var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Update cart count on page load
updateCartCount();

 var buttonElement = document.createElement("button")
buttonElement.id = "btn-add-to-cart";
buttonElement.innerText = "Add to Cart";
detailsElement.appendChild(buttonElement);

buttonElement.addEventListener("click", addToCart);

function addToCart() {
    var Obj = {
        productprice: productData.price,
        productname: productData.name,
        productpreview: productData.preview
    };

    cartItems.push(Obj);
    updateCartCount();
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Yay..!! Item Added To The Cart");
}

function updateCartCount() {
    var totalItemsInCart = cartItems.length;
    cartCountElement.textContent = totalItemsInCart;
}

})



//     var productId = new URLSearchParams(location.search).get("productId");

//     var imageElement = document.getElementById("image");
//         var detailsElement = document.getElementById("details");
//         var cart = document.getElementById("cart-count")

//     // Make an AJAX request to fetch product details
    
    



// var productContainer = document.getElementById("container")
//  var cartButton = document.getElementById("btn-add-to-cart");

// var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// buttonElement.addEventListener("click", addToCart);
// function addToCart() {
//     var Obj = {
//         productprice: productData.price,
//         productname: productData.name,
//         productpreview: productData.preview
//     };
//     cartItems.push(Obj);
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     alert("Item added to cart");
// }

// var totalitems = 0
// $(document).ready(function() {
//     var cartItems = window.localStorage.getItem('product-list');
//     cartItems = cartItems === null || cartItems === '' ? [] : cartItems;
//     cartItems = cartItems.length > 0 ? JSON.parse(cartItems) : [];

//     var totalCount = 0;
//     for(var i=0; i<cartItems.length; i++) {
//         totalCount = totalCount + cartItems[i].count;
//     }

//     $('#cart-count').html(totalCount);
// })
