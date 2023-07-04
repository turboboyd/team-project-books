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
export const shoppingListKey = 'shoppingList';
const shoppingListEl = document.querySelector('.shopping__list');
let savedBooks;
const navBtnListLeftEl = document.querySelector('.pagination-btn-left');
const navBtnListRightEl = document.querySelector('.pagination-btn-right');

export function setCurrentPage(newPage) {
  currentPage = newPage;
}
export function checkStorage() {
  const localSavedBooks = localStorage.getItem(shoppingListKey);
  if (localSavedBooks && localSavedBooks.length !== 0) {
    savedBooks = parseStorage(shoppingListKey);
    renderBtnList(savedBooks, currentPage);
    addClassListToCurrentBtn(currentPage);
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
  navBtnListLeftEl.classList.add('visually-hidden');
  navBtnListRightEl.classList.add('visually-hidden');
}

export function renderShoppingList(arrOfBooks, page) {
  if (arrOfBooks.length <= 3) {
    renderOnePage(page, arrOfBooks);
  } else {
    renderOnePage(page, arrOfBooks);
  }
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

export function OnClickrenderShoppingList(e) {
  rewriteValuecurrentPageOnClick(e);
  renderShoppingList(parseStorage(shoppingListKey), currentPage);
  addClassListToCurrentBtn(currentPage);
}

function rewriteValuecurrentPageOnClick(e) {
  const btnEl = e.target.closest('button');
  const pageBtn = Number(btnEl.textContent);
  setCurrentPage(pageBtn);
}
