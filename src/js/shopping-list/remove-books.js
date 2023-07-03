import parseStorage from './parse-storage';
import {
  currentPage,
  listIsEmpty,
  shoppingListKey,
  renderShoppingList,
  setCurrentPage,
} from './pagination';
import {
  btnListPaginationEl,
  countPerPage,
  renderBtnList,
} from './pagination-btn';

export default function addEventListenerToTrash() {
  const trashEl = document.querySelectorAll('.shopping-trash');
  trashEl.forEach(el =>
    el.addEventListener('click', OnClickRemoveBookFromListandStorage)
  );
}

function OnClickRemoveBookFromListandStorage(e) {
  const target = e.target.closest('.shopping-trash');
  const id = target.dataset.id;
  const countPage = btnListPaginationEl.childElementCount;

  removeFromShoppingList(id);

  const data = parseStorage(shoppingListKey);
  const booksCount = data.length;

  if (
    booksCount !== 0 &&
    Number(countPage) === Number(currentPage) &&
    booksCount % countPerPage === 0
  ) {
    setCurrentPage(currentPage - 1);
    renderBtnList(data);
    renderShoppingList(data, currentPage);
  } else {
    if (booksCount === 0) {
      listIsEmpty();
      localStorage.removeItem(shoppingListKey);
    } else {
      renderBtnList(data);
      renderShoppingList(data, currentPage);
    }
  }
}

function removeFromShoppingList(bookId) {
  const shoppingList = parseStorage(shoppingListKey);
  const index = shoppingList.findIndex(book => book._id === bookId);
  if (index !== -1) {
    shoppingList.splice(index, 1);
    localStorage.setItem(shoppingListKey, JSON.stringify(shoppingList));
  }
}
