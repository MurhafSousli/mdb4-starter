import { Cart } from './cart';

export class ShoppingList {

  /**
   * Add a product item to the shopping list
   */
  static add(product) {
    // Get a reference to the shopping list container
    const list = document.getElementById('shopping-list');

    // Create card element
    const card = document.createElement('div');
    card.className = 'list-item card m-3 card-cascade narrower';

    // Create card body element
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body card-body-cascade d-flex flex-column';

    // Create card title element
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerText = product.name;

    // Create card text element
    const cardText = document.createElement('p');
    cardText.className = 'card-text flex-fill';
    cardText.innerHTML = `
      <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> ${product.material}</h5>
      <span class="badge badge-secondary">${product.adjective}</span>
      <span class="badge badge-primary text-monospace">${product.price}$</span>
    `;

    // Create card button that adds the product to the cart
    const cardButton = document.createElement('button');
    cardButton.className = 'btn btn-unique btn-sm waves-effect waves-light btn-block';
    cardButton.innerHTML = '<i class="fas fa-plus mr-2"></i> Add to cart';
    cardButton.addEventListener('click', () => {
      Cart.add(product);
    });

    // Create card image
    const cardImage = document.createElement('div');
    cardImage.className = 'view view-cascade overlay';
    cardImage.innerHTML = `
      <img class="card-img-top" src="${product.image}" alt="${product.name}">
      <div class="mask rgba-white-slight"></div>
    `;

    // Add card's title, text and button elements to card's body element
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);

    // Add card's image and body elements to the card element
    card.appendChild(cardImage);
    card.appendChild(cardBody);

    // Add the product item to the list
    list.appendChild(card);
  }
}
