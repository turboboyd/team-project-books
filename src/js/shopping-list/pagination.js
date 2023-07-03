import parseStorage from './parse-storage';
import markupBookCard from './marcup-shopping-card';
import addEventListenerToTrash from './remove-books';
import {
  btnListPaginationEl,
  addClassListToCurrentBtn,
  renderBtnList,
  countPerPage,
  isMobile,
} from './pagination-btn';

export let currentPage = 1;
export function setCurrentPage(newPage) {
  currentPage = newPage;
}
const shoppingListEl = document.querySelector('.shopping__list');
export const shoppingListKey = 'shoppingList';
let savedBooks;

export function checkStorage() {
  const localSavedBooks = localStorage.getItem(shoppingListKey);
  if (localSavedBooks && localSavedBooks.length !== 0) {
    savedBooks = parseStorage(shoppingListKey);
    renderBtnList(savedBooks);
    renderShoppingList(savedBooks, currentPage);
  } else {
    listIsEmpty();
  }
}
checkStorage();

export function listIsEmpty() {
  shoppingListEl.innerHTML = '';
  btnListPaginationEl.innerHTML = '';
  const ShoppingListIsEmpty = document.querySelector('.empty');
  ShoppingListIsEmpty.classList.remove('visually-hidden');
}

export function renderShoppingList(arrOfBooks, page) {
  if (arrOfBooks.length <= 3) {
    renderOnePage(page, arrOfBooks);
  } else {
    renderOnePage(page, arrOfBooks);
    btnListPaginationEl.addEventListener('click', OnClickrenderShoppingList);
  }
  addClassListToCurrentBtn(page);
}

export function renderOnePage(page, arrBooks) {
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
  rewriteValuecurrentPageOnClick(e);
  renderShoppingList(parseStorage(shoppingListKey), currentPage);
}

function rewriteValuecurrentPageOnClick(e) {
  const btnEl = e.target.closest('button');
  const pageBtn = btnEl.textContent;
  currentPage = pageBtn;
}
