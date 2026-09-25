let cart = [];
let total = 0;

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
}

function toggleLogin() {
    const modal = document.getElementById('login-modal');
    modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = cart.map(item => `<p>${item.name} - $${item.price}</p>`).join('');
    cartCount.innerText = cart.length;
    cartTotal.innerText = total;
}

function processPayment() {
    if(cart.length === 0) return alert("Cart is empty!");
    alert("Processing Payment... Order Placed Successfully!");
    cart = [];
    total = 0;
    updateCartUI();
    toggleCart();
}