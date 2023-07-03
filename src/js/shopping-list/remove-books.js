import parseStorage from './parse-storage';
import { renderList, currentPage } from './pagination';
import { renderBtnPagination } from './pagination-btn';

// import {
//   removeFromShoppingList,
//   getShoppingList,
//   saveShoppingList,
// } from '../pop-up-click-by-book';

const shoppingListKey = 'shoppingList';

export default function addEventListenerToTrash() {
  const trashEl = document.querySelectorAll('.shopping-trash');
  trashEl.forEach(el =>
    el.addEventListener('click', OnClickRemoveBookFromList)
  );
}

function OnClickRemoveBookFromList(e) {
  const paginationEl = document.querySelector('.pagination-list');
  const target = e.target.closest('.shopping-trash');
  const id = target.dataset.id;
  const startCount = paginationEl.childElementCount;
  removeFromShoppingList(id);
  const data = parseStorage(shoppingListKey);
  renderBtnPagination(data);
  const endCount = paginationEl.childElementCount;
  startCount === endCount
    ? renderList(currentPage, data)
    : renderList(currentPage - 1, data);
  const currentBtn =
    paginationEl.children[currentPage - 1].querySelector('button');
  currentBtn.classList.add('curent-btn-pagination');
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
