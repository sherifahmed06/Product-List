const allItems = [
    {
        id: 1,
        category: "Waffle",
        name: "Waffle with Berries",
        price: 6.50,
        image: "images/image-waffle-desktop.jpg"
    },
    {
        id: 2,
        category: "Crème Brûlée",
        name: "Vanilla Bean Crème Brûlée",
        price: 7.00,
        image: "images/image-creme-brulee-desktop.jpg"
    },
    {
        id: 3,
        category: "Macaron",
        name: "Macaron Mix of Five",
        price: 8.00,
        image: "images/image-macaron-desktop.jpg"
    },
    {
        id: 4,
        category: "Tiramisu",
        name: "Classic Tiramisu",
        price: 45.50,
        image: "images/image-tiramisu-desktop.jpg"
    },
    {
        id: 5,
        category: "Baklava",
        name: "Pistachio Baklava",
        price: 4.00,
        image: "images/image-baklava-desktop.jpg"
    },
    {
        id: 6,
        category: "Pie",
        name: "Lemon Meringue Pie",
        price: 5.00,
        image: "images/image-meringue-desktop.jpg"
    },
    {
        id: 7,
        category: "Cake",
        name: "Red Velvet Cake",
        price: 4.50,
        image: "images/image-cake-desktop.jpg"
    },
    {
        id: 8,
        category: "Brownie",
        name: "Salted Caramel Brownie",
        price: 5.50,
        image: "images/image-brownie-desktop.jpg"
    },
    {
        id: 9,
        category: "Panna Cotta",
        name: "Vanilla Panna Cotta",
        price: 6.50,
        image: "images/image-panna-cotta-desktop.jpg"
    }
];

let cart = [];

function displayItems(){
    var cartona=''
    for (let i = 0; i < allItems.length; i++) {
        cartona+=`
        <div class="col-md-4 mb-4 col-6">
                        <div class="img-container">
                            <img src="${allItems[i].image}" alt="" class="w-100">
                            <div class="cart-add text-center py-2 px-4 addBtn"  onclick="addToCart(${i})">
                                <i class="fa-solid fa-cart-plus me-1"></i>
                                <span class="fw-bold">Add to Cart</span>
                            </div>
                            <div class="cart-count text-center py-2 px-4 d-flex justify-content-between align-items-center d-none">
                                <div class="operator d-flex justify-content-center align-items-center" onclick="minusItem(${i})">
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <span>1</span>
                                <div class="operator plus d-flex justify-content-center align-items-center" onclick="plusItem(${i})">
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div class="item-desc py-4">
                            <p class="sub-desc my-1">${allItems[i].category}</p>
                            <p class="main-desc fw-bold my-1">${allItems[i].name}</p>
                            <span class="price fw-bold">$${allItems[i].price}</span>
                        </div>
                    </div>
        `
    }
    document.getElementById('myRow').innerHTML=cartona
}

displayItems()

let cartAdd = document.querySelectorAll('.cart-add');
let cartCount = document.querySelectorAll('.cart-count');
let plusOperator = document.querySelectorAll('.plus');

function addToCart(index) {

    let foundItem = cart.find(function(item){
        return item.id === allItems[index].id;
    });

    if(foundItem){
        foundItem.quantity++;
    }
    else{
        cart.push({...allItems[index], quantity: 1});
    }

    // console.log(cart);

    cartAdd[index].classList.add('d-none');
    cartCount[index].classList.remove('d-none');

    let images = document.querySelectorAll('.img-container img');
    images[index].classList.add('selected-border');
    displayCart();
}


function plusItem(index){
    let countSpan = cartCount[index].querySelector('span');
    let currentCount = parseInt(countSpan.textContent);
    countSpan.textContent = currentCount + 1;
    let foundItem = cart.find(function(item){
        return item.id === allItems[index].id;
    });
    foundItem.quantity++;
    console.log(foundItem);
    console.log(cart);
    displayCart();
}


function minusItem(index){
    let countSpan = cartCount[index].querySelector('span');
    let currentCount = parseInt(countSpan.textContent);
    if (currentCount <= 1){
        cart = cart.filter(function(item){
        return item.id !== allItems[index].id;
            });
        cartAdd[index].classList.remove('d-none');
        cartCount[index].classList.add('d-none');
        let images = document.querySelectorAll('.img-container img');
        images[index].classList.remove('selected-border');
    }
    else {
        let foundItem = cart.find(function(item){
            return item.id === allItems[index].id;
        });
        foundItem.quantity--;
        countSpan.textContent = currentCount - 1;
}
    console.log(cart);
    displayCart();
}


let cartContainer = document.querySelector('.card-items');
let emptyCart = document.querySelector('.card-empty-img');
let cartCounter = document.querySelector('.your-cart')

function displayCart(){
    var cartona=''
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
        cartona+=`
        <div class="items mb-3 d-flex justify-content-between align-items-center">
                            <div class="left-side">
                                <p class="mt-4 mb-1 fw-bold">${cart[i].name}</p>
                                <span class="item-count me-3 fw-bold">${cart[i].quantity}x</span>
                                <span class="item-price my-0 me-2 text-muted">@ $${cart[i].price}</span>
                                <span class="item-price-total my-0 fw-bold">$${cart[i].price * cart[i].quantity}</span>
                            </div>
                            <div class="right-side">
                                <div class="delete-item" onclick="deleteItem(${i})">
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </div>
                            </div>
                        </div>
        `
    }
    cartona+=`
    <div class="order-conclusion mt-4 d-flex justify-content-between align-items-center">
                            <div class="order-total">
                                <p>Order Total</p>
                            </div>
                            <div class="order-price">
                                <h4 class="fw-bold">$${total.toFixed(2)}</h4>
                            </div>

                        </div>
                        <div class="order-confirmation mt-2">
                            <button class="py-3 w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="displayModal()">Confirm Order</button>
                        </div>
    `
    if(cart.length > 0){
        emptyCart.classList.add('d-none');
        cartContainer.classList.remove('d-none');
        cartCounter.innerHTML = `Your Cart (${cart.length})`
    }
    else{
        emptyCart.classList.remove('d-none');
        cartContainer.classList.add('d-none');
        cartCounter.innerHTML = `Your Cart (0)`

    }
    cartContainer.innerHTML = cartona;

}

function deleteItem(index){

    let deletedItem = cart[index];
    let originalIndex = allItems.findIndex(function(item){
        return item.id === deletedItem.id;
    });

    cart.splice(index, 1);

    cartAdd[originalIndex].classList.remove('d-none');
    cartCount[originalIndex].classList.add('d-none');

    let images = document.querySelectorAll('.img-container img');
    images[originalIndex].classList.remove('selected-border');

    let countSpans = document.querySelectorAll('.cart-count span');
    countSpans[originalIndex].textContent = 1;

    displayCart();
}

let modalBody = document.querySelector('.modal-body')
function displayModal(){
    let cartona=''
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
        cartona+=`
        <div class="ordered-items">
                            <div class="cart-ordered d-flex align-items-center justify-content-between p-3">
                                <div class="d-flex">
                                    <div class="order-details d-flex align-items-center gap-3">
                                        <div class="ordered-img">
                                            <img src="${cart[i].image}" class="w-100" alt="">
                                        </div>
                                        <div class="order-name-quanitity">
                                            <h6 class="fw-bold">${shortName(cart[i].name)}</h6>
                                            <span class="me-3 fw-bold">${cart[i].quantity}x</span>
                                            <span>@ $${cart[i].price}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-price">
                                    <p class="fw-bold">$${cart[i].price * cart[i].quantity}</p>
                                </div>
                            </div>
                        </div>
        `
        
    }
    cartona+=`
    <div class="order-verify p-3 d-flex justify-content-between align-items-center">
                            <p class="my-0 py-0">Order Total</p>
                            <p class="fw-bold my-0 py-0">$${total.toFixed(2)}</p>
                        </div>
                        `
    modalBody.innerHTML = cartona
}


function startNewOrder() {

    cart = [];

    for (let i = 0; i < cartAdd.length; i++) {
        cartAdd[i].classList.remove('d-none');
        cartCount[i].classList.add('d-none');
    }

    let images = document.querySelectorAll('.img-container img');
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('selected-border');
    }

    let countSpans = document.querySelectorAll('.cart-count span');
    for (let i = 0; i < countSpans.length; i++) {
        countSpans[i].textContent = 1;
    }

    displayCart();

    bootstrap.Modal.getInstance(
        document.getElementById('staticBackdrop')
    ).hide();
}

function shortName(name){
    let words = name.split(' ');

    if(words.length > 3){
        return words.slice(0,3).join(' ') + '...';
    }

    return name;
}








function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        btn.textContent = '🌙';
    } else {
        html.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️';
    }
}