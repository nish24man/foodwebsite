document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    function updateCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsElement.appendChild(li);
            total += item.price;
        });

        totalPriceElement.textContent = total;
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const menuItem = event.target.closest('.menu-item');
            const name = menuItem.getAttribute('data-name');
            const price = parseFloat(menuItem.getAttribute('data-price'));

            cartItems.push({ name, price });
            updateCart();
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Checkout is not implemented yet.');
    });
});
