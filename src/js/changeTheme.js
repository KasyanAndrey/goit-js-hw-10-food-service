import { allRef } from './allRef';

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

function onChangeTheme() {
  if (allRef.bodyEl.classList.contains('light-theme')) {
    allRef.bodyEl.classList.remove('light-theme');
    allRef.bodyEl.classList.add('dark-theme');
  } else if (allRef.bodyEl.classList.contains('dark-theme')) {
    allRef.bodyEl.classList.remove('dark-theme');
    allRef.bodyEl.classList.add('light-theme');
  }
}

export default onChangeTheme;
