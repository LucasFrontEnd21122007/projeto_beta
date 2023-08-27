// Array para armazenar os itens do cardápio
const menuItems = [
    { name: 'Hamburguer', price: 15.00 },
    { name: 'Pizza', price: 20.00 },
    { name: 'Sorvete', price: 8.00 }
];

// Função para renderizar os itens do cardápio
function renderMenuItems() {
    const itemsList = document.querySelector('.items');

    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = `Delicioso ${item.name.toLowerCase()} com preço de R$ ${item.price.toFixed(2)}`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Adicionar ao Carrinho';
        addToCartButton.classList.add('add-to-cart-btn');
        addToCartButton.addEventListener('click', () => addToCart(item));

        listItem.appendChild(itemName);
        listItem.appendChild(itemDescription);
        listItem.appendChild(addToCartButton);

        itemsList.appendChild(listItem);
    });
}

// Função para adicionar item ao carrinho de compras
const cart = [];
function addToCart(item) {
    cart.push(item);
    updateCart();
}

// Função para atualizar o carrinho de compras e o total
function update
