import createCustomElement from '../utilis/createCustomElement.js';

export default () => {
    
// cart
const cart = createCustomElement({ classes: 'cart'});

// cart__title
const cartTitle = createCustomElement({ tag: 'h2', classes: `cart__title`, text: 'Корзина'});
cart.append(cartTitle);

// cart__empty-block
const cartEmptyBlock = createCustomElement({ classes: `cart__empty-block`});
cart.append(cartEmptyBlock);

// cart__empty-block-img
const cartEmptyBlockImg = createCustomElement({ 
tag: 'img', 
classes: `cart__empty-block-img`, 
attributes: {
src: 'https://avatars.mds.yandex.net/get-bunker/61205/a11b38948b6d328e2f739d602fa36b15b2680ba8/svg'
}});
cartEmptyBlock.append(cartEmptyBlockImg);

// cart__empty-block-title
const cartEmptyBlockTitle = createCustomElement({ classes: `cart__empty-block-title`, text: 'В вашей корзине пока пусто'});
cartEmptyBlock.append(cartEmptyBlockTitle);

return {
    cart
};

};
