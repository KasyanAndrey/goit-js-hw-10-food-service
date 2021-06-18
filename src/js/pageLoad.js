import { Theme } from './allThemes.js';
import { STORAGE_KEY } from './allThemes.js';
import { setThemeLight } from './setThemes';
import { setThemeDarck } from './setThemes';

function getPageLoad() {
  if (localStorage.getItem(STORAGE_KEY) === Theme.DARK) {
    setThemeDarck();
  } else {
    setThemeLight();
  }
}

export default getPageLoad;
