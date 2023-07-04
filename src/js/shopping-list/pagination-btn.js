import {
  currentPage,
  setCurrentPage,
  shoppingListKey,
  renderShoppingList,
  OnClickrenderShoppingList,
} from './pagination';
import parseStorage from './parse-storage';
import { arrowLeftMarcup, arrowRightMarcup } from './arrow-marcup';
export const btnListPaginationEl = document.querySelector('.pagination-list');
export let countPerPage = 3;
if (isMobile()) {
  countPerPage = 4;
}

function addEventListenerToArrowBtn() {
  const btnGoToFirstPage = document.querySelector(
    'button[data-go-to="first-page"]'
  );
  const btnGoToPreviosPage = document.querySelector(
    'button[data-go-to="previos-page"]'
  );

  const btnGoToNextPage = document.querySelector(
    'button[data-go-to="next-page"]'
  );
  const btnGoToLastPage = document.querySelector(
    'button[data-go-to="last-page"]'
  );
  btnGoToFirstPage.addEventListener('click', OnClickGoToFirstPage);
  btnGoToPreviosPage.addEventListener('click', OnClickGoPreviosPage);
  btnGoToNextPage.addEventListener('click', OnClickGoToNextPage);
  btnGoToLastPage.addEventListener('click', OnClickGoToLastPage);
}

export function isMobile() {
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth < 768;
  return isMobile;
}

export function addClassListToCurrentBtn(page) {
  const btnListPaginationEl = document.querySelector('.pagination-list');
  if (
    btnListPaginationEl &&
    document.querySelector('.current-btn-pagination')
  ) {
    const previousPage = document.querySelector('.current-btn-pagination');
    previousPage.classList.remove('current-btn-pagination');
  }

  if (btnListPaginationEl && btnListPaginationEl.childElementCount !== 0) {
    const currentBtn =
      btnListPaginationEl.children[page - 1].querySelector('button');
    if (currentBtn) {
      currentBtn.classList.add('current-btn-pagination');
    }
  }
}

export function renderBtnList(data, page) {
  const pageCount = Math.ceil(data.length / countPerPage);
  const arrBtnPage = [];
  let leftContainer = document.querySelector('.pagination-btn-left');
  let rightContainer = document.querySelector('.pagination-btn-right');
  for (let i = 1; i <= pageCount; i += 1) {
    const btnEl = `<li class="pagination-item"><button type="button" class="pagination-btn">${i}</button></li>`;
    arrBtnPage.push(btnEl);
  }
  const marcupBtn = arrBtnPage.join('');
  if (pageCount === 1) {
    if (leftContainer && rightContainer) {
      leftContainer.remove();
      rightContainer.remove();
    }
    btnListPaginationEl.innerHTML = marcupBtn;
    btnListPaginationEl.addEventListener('click', OnClickrenderShoppingList);
  } else {
    const paginationWrapEl = document.querySelector('.pagination-wrap');

    if (!leftContainer && !rightContainer) {
      leftContainer = document.createElement('ul');
      leftContainer.innerHTML = arrowLeftMarcup();
      paginationWrapEl.prepend(leftContainer);
      leftContainer.classList.add('nav-pagination-btn', 'pagination-btn-left');

      rightContainer = document.createElement('ul');
      rightContainer.innerHTML = arrowRightMarcup();
      paginationWrapEl.append(rightContainer);
      rightContainer.classList.add(
        'nav-pagination-btn',
        'pagination-btn-right'
      );
    }

    btnListPaginationEl.innerHTML = marcupBtn;
    btnListPaginationEl.addEventListener('click', OnClickrenderShoppingList);
    addEventListenerToArrowBtn();
  }
}

function OnClickGoToFirstPage() {
  if (currentPage > 1) {
    setCurrentPage(1);
    const data = parseStorage(shoppingListKey);
    renderShoppingList(data, currentPage);
    addClassListToCurrentBtn(currentPage);
  }
}

function OnClickGoPreviosPage() {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
    const data = parseStorage(shoppingListKey);
    renderShoppingList(data, currentPage);
    addClassListToCurrentBtn(currentPage);
  }
}

function OnClickGoToNextPage() {
  const lastPage = btnListPaginationEl.childElementCount;
  if (currentPage < lastPage) {
    setCurrentPage(currentPage + 1);
    const data = parseStorage(shoppingListKey);
    renderShoppingList(data, currentPage);
    addClassListToCurrentBtn(currentPage);
  }
}

function OnClickGoToLastPage() {
  const lastPage = btnListPaginationEl.childElementCount;
  if (currentPage !== lastPage) {
    setCurrentPage(lastPage);
    const data = parseStorage(shoppingListKey);
    renderShoppingList(data, currentPage);
    addClassListToCurrentBtn(currentPage);
  }
}
