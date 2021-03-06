import { refs } from './allRefs.js';
import { Theme } from './allThemes.js';
import { setThemeLight } from './setThemes';
import { setThemeDarck } from './setThemes';

function onChangeTheme(evt) {
  if (refs.bodyEl.classList.contains(Theme.LIGHT)) {
    setThemeDarck();
  } else {
    setThemeLight();
  }
}
export default onChangeTheme;
