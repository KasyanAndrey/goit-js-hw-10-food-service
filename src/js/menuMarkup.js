import menuItemsTpl from '../templates/menu-tamplate.hbs';
import menu from '../data/menu.json';

function createMenuItemsMarkup(cards) {
  return menuItemsTpl(cards);
}

const menuItemsMarkup = createMenuItemsMarkup(menu);

export default menuItemsMarkup;
