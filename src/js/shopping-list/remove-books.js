import parseStorage from './parse-storage';
import { renderList, currentPage, renderBtnPagination } from './pagination';
const paginationEl = document.querySelector('.pagination-list');
const shoppingListKey = 'shoppingList';

export function OnClickRemoveBookFromList(e) {
  const target = e.target.closest('.shopping-trash');
  const id = target.dataset.id;
  const CountBtn = paginationEl.length;
  console.log('CountBtnBeforeRemove', CountBtn);
  removeFromShoppingList(id);
  const data = parseStorage(shoppingListKey);
  renderList(currentPage, data);
  renderBtnPagination(data);
  //   console.log('CountBtnAfterRemove', CountBtn);
  //   console.log('CountBtnAfterRemove', CountBtn);
  const currentBtn =
    paginationEl.children[currentPage - 1].querySelector('button');
  currentBtn.classList.add('curent-btn-pagination');
  console.log(currentPage);
}

export function removeFromShoppingList(bookId) {
  const shoppingList = getShoppingList();
  const index = shoppingList.findIndex(book => book._id === bookId);
  if (index !== -1) {
    shoppingList.splice(index, 1);
    saveShoppingList(shoppingList);
  }
}

export function getShoppingList() {
  const shoppingList = JSON.parse(localStorage.getItem(shoppingListKey)) || [];
  return shoppingList;
}

export function saveShoppingList(shoppingList) {
  localStorage.setItem(shoppingListKey, JSON.stringify(shoppingList));
}
