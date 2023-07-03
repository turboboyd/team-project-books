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

// import {
//   removeFromShoppingList,
//   getShoppingList,
//   saveShoppingList,
// } from '../pop-up-click-by-book';

export default function addEventListenerToTrash() {
  const trashEl = document.querySelectorAll('.shopping-trash');
  trashEl.forEach(el =>
    el.addEventListener('click', OnClickRemoveBookFromList)
  );
}

function OnClickRemoveBookFromList(e) {
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
    console.log('111');
    setCurrentPage(currentPage - 1);
    renderBtnList(data);
    renderShoppingList(data, currentPage);
  } else {
    if (booksCount === 0) {
      console.log('222');
      listIsEmpty();
      localStorage.removeItem(shoppingListKey);
    } else {
      console.log('333');
      renderBtnList(data);
      renderShoppingList(data, currentPage);
    }
  }
}

function removeFromShoppingList(bookId) {
  const shoppingList = getShoppingList();
  const index = shoppingList.findIndex(book => book._id === bookId);
  if (index !== -1) {
    shoppingList.splice(index, 1);
    saveShoppingList(shoppingList);
  }
}

function getShoppingList() {
  const shoppingList = JSON.parse(localStorage.getItem(shoppingListKey)) || [];
  return shoppingList;
}

function saveShoppingList(shoppingList) {
  localStorage.setItem(shoppingListKey, JSON.stringify(shoppingList));
}
