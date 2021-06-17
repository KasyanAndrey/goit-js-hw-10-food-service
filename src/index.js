import './sass/main.scss';
import { allRef } from './js/allRef.js';
import menuItemsMarkup from './js/markup-menu.js';
import onChangeTheme from './js/changeTheme.js';

allRef.menuList.insertAdjacentHTML('beforeend', menuItemsMarkup);
allRef.bodyEl.classList.add('light-theme');
allRef.controlEl.addEventListener('click', onChangeTheme);
