import createCustomElement from '../utilis/createCustomElement.js';
import icons from '../icons.js';
import productsList from '../productsList.json' assert {type:'json'};

export default ( data ) => {

const {
    price = 'Цена', 
    title = 'Название блюда',
    weight = 'Вес', 
} = data;    

// product
const product = createCustomElement({ classes: `product`});
product.insertAdjacentHTML("beforeend", icons.productPicture);

// product__price
const productPrice = createCustomElement({ tag: 'span', classes: `product__price`, text: price});
product.append(productPrice);

// product__title
const productTitle = createCustomElement({ classes: `product__title`, text: title});
product.append(productTitle);

// product__weight
const productWeight = createCustomElement({ classes: `product__weight`, text: weight});
product.append(productWeight);

// product__actions
const productActions = createCustomElement({ classes: `product__actions`});
product.append(productActions);

// product__action
const productAction = createCustomElement({ classes: `product__action`});
productAction.onclick = addProductToCart;
product.append(productAction);
productAction.insertAdjacentHTML("beforeend", icons.productActionSvg);

function addProductToCart() {
};

// product__action-title
const productActionTitle = createCustomElement({ tag: 'span', classes: `product__action-title`, text: 'Добавить'});
productAction.append(productActionTitle);

for (let item in productsList.dishes) {
    if (productsList.dishes.hasOwnProperty(item)) {
        console.log(productsList.dishes[item])
    };
}

return product;
}
