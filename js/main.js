const allItems = [
    {
        id: 1,
        category: "Waffle",
        name: "Waffle with Berries",
        price: "$6.50",
        image: "images/image-waffle-desktop.jpg"
    },
    {
        id: 2,
        category: "Crème Brûlée",
        name: "Vanilla Bean Crème Brûlée",
        price: "$7.00",
        image: "images/image-creme-brulee-desktop.jpg"
    },
    {
        id: 3,
        category: "Macaron",
        name: "Macaron Mix of Five",
        price: "$8.00",
        image: "images/image-macaron-desktop.jpg"
    },
    {
        id: 4,
        category: "Tiramisu",
        name: "Classic Tiramisu",
        price: "45.50",
        image: "images/image-tiramisu-desktop.jpg"
    },
    {
        id: 5,
        category: "Baklava",
        name: "Pistachio Baklava",
        price: "$4.00",
        image: "images/image-baklava-desktop.jpg"
    },
    {
        id: 6,
        category: "Pie",
        name: "Lemon Meringue Pie",
        price: "$5.00",
        image: "images/image-meringue-desktop.jpg"
    },
    {
        id: 7,
        category: "Cake",
        name: "Red Velvet Cake",
        price: "$4.50",
        image: "images/image-cake-desktop.jpg"
    },
    {
        id: 8,
        category: "Brownie",
        name: "Salted Caramel Brownie",
        price: "$5.50",
        image: "images/image-brownie-desktop.jpg"
    },
    {
        id: 9,
        category: "Panna Cotta",
        name: "Vanilla Panna Cotta",
        price: "$6.50",
        image: "images/image-panna-cotta-desktop.jpg"
    }
];

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
                            <span class="price fw-bold">${allItems[i].price}</span>
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
    cartAdd[index].classList.add('d-none')
    cartCount[index].classList.remove('d-none')
    let images = document.querySelectorAll('.img-container img');
    images[index].classList.add('selected-border');
    }

function plusItem(index){
    let countSpan = cartCount[index].querySelector('span');
    let currentCount = parseInt(countSpan.textContent);
    countSpan.textContent = currentCount + 1;
}


function minusItem(index){
    let countSpan = cartCount[index].querySelector('span');
    let currentCount = parseInt(countSpan.textContent);

    if (currentCount <= 1){
        cartAdd[index].classList.remove('d-none');
        cartCount[index].classList.add('d-none');
        let images = document.querySelectorAll('.img-container img');
        images[index].classList.remove('selected-border');
    }
    else {
        countSpan.textContent = currentCount - 1;
    }
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