import './sass/main.scss';
import menuItemsMarkup from './js/markup-menu.js';

const menuList = document.querySelector('ul.js-menu');
menuList.insertAdjacentHTML('beforeend', menuItemsMarkup);
