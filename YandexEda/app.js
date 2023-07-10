import createCustomElement from './utilis/createCustomElement.js';
import headerComponent from './components/header.js';
import sidebarMenuComponent from './components/sidebarMenu.js';
import previewComponent from './components/preview.js';
import categoryComponent from './components/category.js';
import cartComponent from './components/cart.js';
import cartFooterComponent from './components/cartFooter.js';
import productComponent from './components/product.js';
import categoryList from './categoryList.js';

// Наш главный блок
const mainWrapper = document.querySelector('.main-wrapper');

const { header } = headerComponent();
const { sidebarMenu } = sidebarMenuComponent();
const { cartFooter } = cartFooterComponent();

// Добавляем header в главный блок
mainWrapper.prepend(header);

// content
const content = createCustomElement({classes: `content`});
mainWrapper.append(content);
content.append(sidebarMenu);
const { preview } = previewComponent( {
    title: 'My-My'
});
const { cart } = cartComponent();

// main-block
const mainBlock = createCustomElement({ classes: `main-block`});
content.append(mainBlock);

mainBlock.append(preview);
// mainBlock.append(previewTwo);

// sidebar-right
const sidebarRight = createCustomElement({ classes: `sidebar-right`});
content.append(sidebarRight);
sidebarRight.append(cart);
cart.append(cartFooter);

// Пока 
// (() => { if (dateHour > 10 || dateHour < 20) { restaurantInformerDelivery.classList.remove(`invisible`) } else { restaurantInformerDelivery.classList.add(`invisible`) }})();

const product = productComponent( { price: '120₽', title: 'Салат из помидор со сметанной заправкой', weight: '120 г'} );
const productTwo = productComponent( { price: '350₽', title: 'Салат из помидор', weight: '150 г'} );
const productThree = productComponent( { price: '420₽', title: 'Салат из огурцов', weight: '100 г'} );

// Создаем категории
// const { category, addProduct } = categoryComponent({ title: 'Салаты и закуски'});
// const { category: categoryTwo, addProduct: addProductTwo } = categoryComponent({ title: 'Горячие блюда'});

categoryList.forEach((categoryData) => {
    // везде инициализирована 1 категория? 
    // рендер?
    const { category, categoryProductsList, addProduct } = categoryComponent({ title: categoryData.title });
    categoryProductsList.append(product); // (странно, что мы не можем продублировать один и тот же продукт)
    addProduct(product); // вот тут мы добавляем первую карточку
    addProduct(productTwo); // вот тут 2 ую 
    addProduct(productThree); // атут 3 тью карточку
    mainBlock.append(category);
});




