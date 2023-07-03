import markupBookCard from './marcup-shopping-card';
import addEventListenerToTrash from './remove-books';
import parseStorage from './parse-storage';
import { addClassListToCurrentBtn } from './pagination-btn';
import { renderBtnPagination, countPerPage, isMobile } from './pagination-btn';

export let currentPage = 1;
export const paginationEl = document.querySelector('.pagination-list');
const shoppingListEl = document.querySelector('.shopping__list');
export const shoppingListKey = 'shoppingList';
let savedBooks;

export function checkStorage() {
  const localSavedBooks = localStorage.getItem(shoppingListKey);
  if (localSavedBooks) {
    savedBooks = parseStorage(shoppingListKey);
    renderBtnPagination(savedBooks);
    renderShoppingList(savedBooks);
  } else {
    shoppingListEl.innerHTML = '';
    paginationEl.innerHTML = '';
    // paginationEl.removeEventListener('click', OnClickrenderShoppingList);
    const ShoppingListIsEmpty = document.querySelector('.empty');
    ShoppingListIsEmpty.classList.remove('visually-hidden');
  }
}

function renderShoppingList(data) {
  if (data.length <= 3) {
    shoppingListEl.innerHTML = markupBookCard(data);
    addEventListenerToTrash();
  } else {
    renderList(currentPage, data);
    paginationEl.addEventListener('click', OnClickrenderShoppingList);
  }
}
export function renderList(page, arrBooks) {
  let start = countPerPage * page - 3;
  let end = countPerPage * page;
  if (isMobile()) {
    start = countPerPage * (page - 1);
  }
  const arrForRenderFirstPage = arrBooks.slice(start, end);
  shoppingListEl.innerHTML = markupBookCard(arrForRenderFirstPage);
  addEventListenerToTrash();
}

function OnClickrenderShoppingList(e) {
  const btnEl = e.target.closest('button');
  if (btnEl !== null) {
    const pageBtn = btnEl.textContent;
    currentPage = pageBtn;
    renderList(pageBtn, parseStorage(shoppingListKey));
    addEventListenerToTrash();
    addClassListToCurrentBtn(btnEl);
  }
}

checkStorage();
