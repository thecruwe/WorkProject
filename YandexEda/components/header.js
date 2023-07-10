import createCustomElement from "../utilis/createCustomElement.js";
import icons from "../icons.js";

export default () => {
    
// Создаем header в main-wrapper
const header = createCustomElement({classes: 'header'});

// Создаем header__logo в header
const headerLogo = createCustomElement({classes: `header__logo`});

const logoLink = createCustomElement(
    {
        tag: 'a',
        attributes: {
                        href: 'https://eda.yandex.ru/moscow?shippingType=delivery'
                    }
    });
headerLogo.append(logoLink);

const logoImg = createCustomElement({
    tag: 'img',
    attributes: {
                    src: 'https://avatars.mds.yandex.net/get-bunker/994123/62e784df90b806d5d740ef444a393b528f3226bc/svg'
    },
});
logoLink.append(logoImg);

// Добавляем headerLogo в header
header.append(headerLogo);

// Создаем header__address
const headerAddress = createCustomElement({classes: `header__address`});

// Создаем header__address-action в header__address
const headerAddressAction = createCustomElement({classes: `header__address-action`});

// Создаем header__address-svg в header__address
headerAddressAction.insertAdjacentHTML("beforeend", icons.headerAddressSvg);

const headerAddressSpan = createCustomElement({tag: 'span', classes: `header__address-span`, text: 'Укажите адрес доставки'});
headerAddress.append(headerAddressAction);
headerAddressAction.append(headerAddressSpan);
header.append(headerAddress);

// Создаем header__language и присваиваем ему одноименный класс и добавялем его в header
const headerLanguage = createCustomElement({classes: `header__language`});
header.append(headerLanguage);

// Создаем header__language-svg внутри header__language, присваиваем ему одноименный класс и добавляем в header_language
headerLanguage.insertAdjacentHTML("beforeend", icons.headerLanguageSvg);

// Создаем header__language-span внутри header__language, присваиваем ему одноименный класс и добавляем в header_language
const headerLanguageSpan = createCustomElement({tag: 'span', classes: `header__language-span`, text: 'Русский'});
headerLanguage.append(headerLanguageSpan);

// header__sign-in
const headerSignIn = createCustomElement({classes: `header__sign-in`, text: 'Войти'});
headerSignIn.onclick = linkToSignIn;
header.append(headerSignIn);

function linkToSignIn() {
    headerSignIn.onclick = location.href='https://passport.yandex.ru/auth/welcome?backpath=https%3A%2F%2Feda.yandex.ru%2Fr%2Fmumu%3FplaceSlug%3DMuMu_Balaklavskii%26shippingType%3Ddelivery&origin=eats_desktop&retpath=https%3A%2F%2Feda.yandex.ru%2Fr%2Fmumu%3Fauth_from%3Dside_menu%26placeSlug%3DMuMu_Balaklavskii%26shippingType%3Ddelivery';
}

return {
    header
};

};
