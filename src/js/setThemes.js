import { refs } from './allRefs.js';
import { Theme } from './allThemes.js';
import { STORAGE_KEY } from './allThemes.js';

export function setThemeLight() {
  refs.inputEl.checked = false;
  refs.bodyEl.classList.remove(Theme.DARK);
  refs.bodyEl.classList.add(Theme.LIGHT);
  localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
}

export function setThemeDarck() {
  refs.inputEl.checked = true;
  refs.bodyEl.classList.remove(Theme.LIGHT);
  refs.bodyEl.classList.add(Theme.DARK);
  localStorage.setItem(STORAGE_KEY, Theme.DARK);
}
