import './sass/main.scss';
import { refs } from './js/allRefs.js';

import menuItemsMarkup from './js/menuMarkup.js';
import onChangeTheme from './js/changeTheme.js';
import getPageLoad from './js/pageLoad.js';

refs.menuList.insertAdjacentHTML('beforeend', menuItemsMarkup);
refs.inputEl.addEventListener('change', onChangeTheme);
getPageLoad();
