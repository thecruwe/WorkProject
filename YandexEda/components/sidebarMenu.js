import createCustomElement from '../utilis/createCustomElement.js';
import icons from '../icons.js';

export default () => {
    
// sidebar-menu
const sidebarMenu = createCustomElement({classes: `sidebar-menu`});

// menu__action
const menuAction = createCustomElement({ classes: `menu__action`});
menuAction.insertAdjacentHTML("beforeend", icons.menuActionSvg);
sidebarMenu.append(menuAction);

// menu__action-span
const menuActionSpan = createCustomElement({ tag: 'span', classes: `menu__action-span`, text: 'Все рестораны'});
menuAction.append(menuActionSpan);

// sidebar-menu__title
const sidebarMenuTitle = createCustomElement({ tag: 'h1', classes: `sidebar-menu__title`, text: 'Меню'});
sidebarMenu.append(sidebarMenuTitle);

// ul
const sidebarMenuUl = createCustomElement({tag: 'ul'});
sidebarMenu.append(sidebarMenuUl);

// li
sidebarMenuUl.insertAdjacentHTML("beforeend", `<li class="sidebar-menu__item active">Салаты и закуски</li>
<li class="sidebar-menu__item">Паста</li>
<li class="sidebar-menu__item">Суши-бар</li>
<li class="sidebar-menu__item">Горячие блюда</li>`);

return {
    sidebarMenu
}

};
