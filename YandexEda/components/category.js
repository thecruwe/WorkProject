import createCustomElement from '../utilis/createCustomElement.js';
import icons from '../icons.js';

export default ( data ) => {

const { title = 'Название раздела меню'} = data;

let dateHour = new Date().getHours();

// category
const category = createCustomElement({ classes: `category`});

// restaurant-informer
const restaurantInformer = createCustomElement({ classes: `restaurant-informer`});
restaurantInformer.insertAdjacentHTML("beforeend", icons.restaurantInformerSvg);
category.prepend(restaurantInformer);

// restaurant-informer__title
const restaurantInformerTitle = createCustomElement({ classes: `restaurant-informer__title`, text: 'Ресторан ещё закрыт :('});
restaurantInformer.append(restaurantInformerTitle);

// restaurant-informer__delivery
// const restaurantInformerDelivery = createCustomElement({ classes: `restaurant-informer`});
// category.append(restaurantInformerDelivery);

// category__title
const categoryTitle = createCustomElement({ tag: 'h2', classes: `category__title`, text: title});
category.append(categoryTitle);

// category__products-list
const categoryProductsList = createCustomElement({ classes: `category__products-list`});
category.append(categoryProductsList);

const addProduct = (product) => {
    categoryProductsList.append(product)
};

(() => { if (dateHour < 10 || dateHour > 20) { restaurantInformer.classList.remove(`invisible`) } else { restaurantInformer.classList.add(`invisible`) }} )();

return {
    category,
    categoryProductsList,
    addProduct
};

};
