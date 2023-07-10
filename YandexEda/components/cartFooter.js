import icons from '../icons.js';
import createCustomElement from '../utilis/createCustomElement.js';

export default () => {// cart-footer
const cartFooter = createCustomElement({ classes: `cart-footer`});

// cart-footer__bottom-img
const cartFooterBottomImg = createCustomElement({ classes: `cart-footer__bottom-img`});
cartFooterBottomImg.setAttribute("style","background-image: url(https://avatars.mds.yandex.net/get-bunker/60661/e0b70b2b2a584c45a33c9f9866609f9b2e95019c/svg)");
cartFooter.append(cartFooterBottomImg);

// cart__footer-info
const cartFooterInfo = createCustomElement({ classes: `cart__footer-info`});
cartFooter.append(cartFooterInfo);

// cart__footer-info-title
const cartFooterInfoTitle = createCustomElement({ classes: `cart__footer-info-title`, text: 'Бесплатная доставка от 600 ₽ · 25–35 мин'});
cartFooterInfo.append(cartFooterInfoTitle);

//cart__footer-info-subtitle
const cartFooterInfoSubtitle = createCustomElement({ classes: `cart__footer-info-subtitle`, text: 'Подробные условия'});
cartFooterInfo.append(cartFooterInfoSubtitle);
cartFooter.insertAdjacentHTML('beforeend', icons.cartFooterInfoSvg);

return {
    cartFooter
}

};