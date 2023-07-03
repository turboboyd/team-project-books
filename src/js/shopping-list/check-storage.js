import { checkStorage, shoppingListKey } from './pagination';

window.addEventListener('storage', function (event) {
  if (
    (event.key === shoppingListKey && event.newValue === null) ||
    (!event.key && event.newValue === null)
  ) {
    checkStorage();
  }
});
