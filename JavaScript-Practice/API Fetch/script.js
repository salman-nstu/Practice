const productContainer = document.getElementById("product-container");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("search-input");

const productListView = document.getElementById("product-list-view");
const productDetailView = document.getElementById("product-detail-view");
const productDetailContent = document.getElementById("product-detail-content");
const backBtn = document.getElementById("back-btn");

const cartView = document.getElementById("cart-view");
const cartContainer = document.getElementById("cart-container");
const navCartCount = document.getElementById("nav-cart-count");

const homeNav = document.getElementById("home-nav");
const cartNav = document.getElementById("cart-nav");
// const searchNav = document.getElementById("search-nav");


const limit = 10;

let currentPage = 1;
let totalProducts = 0;
let debounceTimer;
// let debounceTimer = 500 ;

let cart = [];


function updateCartCount() {

    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );
    navCartCount.textContent = totalQuantity;
}

// cartCount.textContent = totalQuantity;
// navCartCount.textContent = totalQuantity;


function addToCart(product, quantity) {

    const existingItem = cart.find(
        item => item.id === product.id
    );

    if (existingItem) {

        existingItem.quantity += quantity;

    } else {

        cart.push({
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
            quantity: quantity
        });

    }

    updateCartCount();

    alert("Product added to cart.");
}


function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    updateCartCount();

    renderCart();
}

// <div>
//     <button class="cart-minus">−</button>
//     <span>${item.quantity}</span>
//     <button class="cart-plus">+</button>
// </div>

// id: product.id,
//     title: product.title,
//         thumbnail: product.thumbnail,
//             price: product.price,
//                 quantity: quantity

function changeCartQuantity(productId, change) {

    const item = cart.find(
        item => item.id === productId
    );

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        removeFromCart(productId);
        return;
    }

    updateCartCount();

    renderCart();
}


function renderCart() {

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }


    cart.forEach(item => {

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}">

            <div>
                <h3>${item.title}</h3>

                <p>Price: $${item.price}</p>

                <div>
                    <button class="cart-minus">−</button>
                    <span>${item.quantity}</span>
                    <button class="cart-plus">+</button>
                </div>

                <p>
                    Total: $${(item.price * item.quantity).toFixed(2)}
                </p>

                <button class="remove-cart-item">
                    Remove
                </button>
            </div>
        `;


        cartItem
            .querySelector(".cart-minus")
            .addEventListener("click", () => {

                changeCartQuantity(item.id, -1);

            });


        cartItem
            .querySelector(".cart-plus")
            .addEventListener("click", () => {

                changeCartQuantity(item.id, 1);

            });


        cartItem
            .querySelector(".remove-cart-item")
            .addEventListener("click", () => {

                removeFromCart(item.id);

            });


        cartContainer.appendChild(cartItem);

    });
}


function showHome() {

    productDetailView.classList.add("hidden");
    cartView.classList.add("hidden");

    productListView.classList.remove("hidden");

}


function showCart() {

    productListView.classList.add("hidden");
    productDetailView.classList.add("hidden");

    cartView.classList.remove("hidden");

    renderCart();

}

// cartBtn.addEventListener("click", () => {
//     showCart();
// });

function showSearch() {

    productDetailView.classList.add("hidden");
    cartView.classList.add("hidden");

    productListView.classList.remove("hidden");

    searchInput.focus();

}


homeNav.addEventListener("click", () => {

    showHome();

});


cartNav.addEventListener("click", () => {

    showCart();

});


// searchNav.addEventListener("click", () => {

//     showSearch();

// });



function fetchProducts(page) {

    const skip = (page - 1) * limit;

    fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=id,title,description,thumbnail`
    )
        .then(res => res.json())
        .then(data => {

            totalProducts = data.total;

            displayProducts(data.products);

            createPagination();

        })
        .catch(error => {
            console.log("Error:", error);
        });
}


function searchProducts(query) {

    // fetch(
    //     `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,description,thumbnail`
    // )
    //     .then(res => res.json())
    //     .then(data => {

    fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
    )
        .then(res => res.json())
        .then(data => {

            totalProducts = data.total;

            displayProducts(data.products);
            pagination.innerHTML = "";

        })
        .catch(error => {
            console.log("Search error:", error);
        });
}


function displayProducts(products) {

    productContainer.innerHTML = "";

    if (products.length === 0) {
        productContainer.innerHTML = "<p>No products found.</p>";
        return;
    }

    products.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">

            <h3>${product.title}</h3>

            <p>${product.description}</p>
        `;


        card.addEventListener("click", () => {
            fetchProductDetails(product.id);
        });


        productContainer.appendChild(card);
    });
}


function fetchProductDetails(productId) {

    productDetailContent.innerHTML =
        "<p>Loading details...</p>";

    productListView.classList.add("hidden");
    cartView.classList.add("hidden");

    productDetailView.classList.remove("hidden");


    fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {

            renderProductDetails(product);

        })
        .catch(error => {

            console.log("Error fetching details:", error);

            productDetailContent.innerHTML =
                "<p>Failed to load product details.</p>";

        });
}

function renderProductDetails(product) {
    // const imagesHtml = product.images
    //     : "";

    //<div class="detail-gallery">${imagesHtml}</div>
    let quantity = 1;


    productDetailContent.innerHTML = `

        <div class="detail-wrapper">

            <div class="detail-image-section">

                <img
                    src="${product.thumbnail}"
                    alt="${product.title}"
                    class="detail-main-img"
                >

            </div>


            <div class="detail-info-section">

                <h2>${product.title}</h2>

                <p class="brand">
                    <strong>Brand:</strong>
                    ${product.brand || 'N/A'}
                </p>

                <p class="category">
                    <strong>Category:</strong>
                    ${product.category}
                </p>

                <p class="price">
                    <strong>Price:</strong>
                    $${product.price}
                </p>

                <p class="rating">
                    <strong>Rating:</strong>
                    ${product.rating}
                </p>

                <p class="stock">
                    <strong>Stock:</strong>
                    ${product.stock} items left
                </p>

                <p class="description">
                    ${product.description}
                </p>


                <!-- Quantity -->

                <div class="quantity-control">

                    <button id="quantity-minus">
                        −
                    </button>

                    <span id="quantity-value">
                        1
                    </span>

                    <button id="quantity-plus">
                        +
                    </button>

                </div>


                <!-- Add To Cart -->

                <button id="add-to-cart">
                    Add to Cart
                </button>

            </div>

        </div>

    `;


    const quantityValue =
        document.getElementById("quantity-value");

    const quantityMinus =
        document.getElementById("quantity-minus");

    const quantityPlus =
        document.getElementById("quantity-plus");

    const addToCartButton =
        document.getElementById("add-to-cart");


    quantityMinus.addEventListener("click", () => {

        if (quantity > 1) {

            quantity--;

            quantityValue.textContent = quantity;

        }

    });


    quantityPlus.addEventListener("click", () => {

        if (quantity < product.stock) {

            quantity++;

            quantityValue.textContent = quantity;

        }

    });


    addToCartButton.addEventListener("click", () => {

        addToCart(product, quantity);

    });

}


backBtn.addEventListener("click", () => {
    productDetailView.classList.add("hidden");
    productListView.classList.remove("hidden");
});



function createPagination() {

    pagination.innerHTML = "";

    const totalPages = Math.ceil(totalProducts / limit);

    const maxVisiblePages = 5;

    let startPage;
    let endPage;

    if (totalPages <= maxVisiblePages) {

        startPage = 1;
        endPage = totalPages;

    } else {

        const half = Math.floor(maxVisiblePages / 2);

        startPage = currentPage - half;
        endPage = currentPage + half;

        if (startPage < 1) {
            startPage = 1;
            endPage = maxVisiblePages;
        }

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = totalPages - maxVisiblePages + 1;
        }
    }

    const prevButton = document.createElement("button");

    prevButton.innerHTML = "&#8592;";

    prevButton.disabled = currentPage === 1;

    prevButton.addEventListener("click", () => {

        if (currentPage > 1) {

            currentPage--;

            fetchProducts(currentPage);
        }
    });

    pagination.appendChild(prevButton);


    for (let page = startPage; page <= endPage; page++) {

        const button = document.createElement("button");

        button.textContent = page;

        if (page === currentPage) {

            button.classList.add("active");

            button.disabled = true;
        }

        button.addEventListener("click", () => {

            currentPage = page;

            fetchProducts(currentPage);
        });

        pagination.appendChild(button);
    }




    const nextButton = document.createElement("button");

    nextButton.innerHTML = "&#8594;";

    nextButton.disabled = currentPage === totalPages;

    nextButton.addEventListener("click", () => {

        if (currentPage < totalPages) {

            currentPage++;

            fetchProducts(currentPage);
        }
    });

    pagination.appendChild(nextButton);
}


searchInput.addEventListener("input", () => {

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {

        const searchTerm = searchInput.value.trim();

        // currentPage = 1;
        // fetchProducts(currentPage);

        if (searchTerm === "") {

            fetchProducts(currentPage);

            return;
        }

        searchProducts(searchTerm);

    }, 500);
});


updateCartCount();

fetchProducts(currentPage);