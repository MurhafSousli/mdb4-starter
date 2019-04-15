export class Cart {

  /**
   * Initialize cart
   */
  static init() {
    // Add click event for the clear button
    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', Cart.clear);

    // Add click event for the checkout button
    const checkOutButton = document.getElementById('checkout-button');
    checkOutButton.addEventListener('click', () => alert('Checked Out!'));
    Cart.update();
  }

  /**
   * Update shopping cart info
   */
  static update() {
    const cartInfo = document.getElementById('shopping-cart-info');
    const clearButton = document.getElementById('clear-button');
    const checkOutButton = document.getElementById('checkout-button');
    const cartItems = document.querySelectorAll('.cart-item');

    // Check if cart has items
    if (cartItems.length) {
      // Convert cartItems to an Array so we can call "map" and "reduce" functions
      const arr = Array.from(cartItems);

      // Convert the array of items to an array of their prices
      // Then sum all prices and put it in the "total" variable
      const total = arr
        .map((item) => JSON.parse(item.getAttribute('data')).price)
        .reduce((acc, value) => acc + value);

      // Set cart info template
      cartInfo.innerHTML = `
        <b>
          Total Price: ${total}$
        </b>
        <b>
          ${cartItems.length} items
        </b>
      `;

      // Enable clear and checkout buttons
      clearButton.removeAttribute('disabled');
      checkOutButton.removeAttribute('disabled');
    } else {
      // Disable clear and checkout buttons
      cartInfo.innerHTML = 'Your cart is empty!';
      clearButton.setAttribute('disabled', '');
      checkOutButton.setAttribute('disabled', '');
    }
  }

  /**
   * Add a product to the cart
   */
  static add(product) {

    const shoppingCart = document.getElementById('shopping-cart');

    // Create a cart item element
    const item = document.createElement('li');
    item.className = 'animated fadeIn cart-item list-group-item d-flex align-items-center';
    item.innerHTML = `
    <img src="${product.image}" width="40px" height="40px" class="d-flex rounded-circle m-1">
    <div class="flex-fill mx-2">
      <div class="cart-item-title">
        ${product.name}
      </div>
      <div class="text-primary bold text-monospace">
        ${product.price}$
      </div>
    </div>
  `;

    // Create a remove button element
    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-danger btn-sm remove-item waves-effect waves-light';
    removeButton.innerHTML = '<i class="fas fa-times"></i>';

    // Add the remove button to the item
    item.appendChild(removeButton);
    item.setAttribute('data', JSON.stringify(product));

    // Add the item to the cart
    shoppingCart.appendChild(item);

    removeButton.addEventListener('click', () => Cart.remove(item));

    Cart.update();
  }

  /**
   * Remove a product from the cart
   */
  static remove(item) {
    // Remove the element from the DOM
    item.remove();
    // Update shopping cart
    Cart.update();
  }

  /**
   * Clear cart items
   */
  static clear() {
    // Get all elements with class ".cart-items"
    const cartItems = document.querySelectorAll('.cart-item');
    // Convert HTMLCollection to Array so we can loop over each item and remove it
    cartItems.forEach((item) => item.remove());
    // Update shopping cart
    Cart.update();
  }

}
