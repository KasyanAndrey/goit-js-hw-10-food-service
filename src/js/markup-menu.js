import menuItemsTpl from '../templates/menu-items.hbs';
import menu from './menu.json';

function createMenuItemsMarkup(cards) {
  return menuItemsTpl(cards);
}

const menuItemsMarkup = createMenuItemsMarkup(menu);

export default menuItemsMarkup;
