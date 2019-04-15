import faker from 'faker';
import { Cart } from './cart';
import { ShoppingList } from './list';

function fillShoppingList() {
  // Add 21 items
  for (let i = 0; i < 21; i++) {
    const product = {
      name: faker.commerce.productName(),
      image: faker.random.image(),
      price: parseFloat(faker.commerce.price()),
      adjective: faker.commerce.productAdjective(),
      material: faker.commerce.productMaterial(),
    };
    ShoppingList.add(product);
  }
}

// Initialize shopping cart
Cart.init();

// Initialize shopping list with products
fillShoppingList();