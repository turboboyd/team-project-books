import {
  currentPage,
  setCurrentPage,
  shoppingListKey,
  renderShoppingList,
} from './pagination';
import parseStorage from './parse-storage';

export const btnListPaginationEl = document.querySelector('.pagination-list');
export let countPerPage = 3;
if (isMobile()) {
  countPerPage = 4;
}

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
  for (let i = 1; i <= pageCount; i += 1) {
    const btnEl = `<li class="pagination-item"><button type="button" class="pagination-btn">${i}</button></li>`;
    arrBtnPage.push(btnEl);
  }
  const marcupBtn = arrBtnPage.join('');
  btnListPaginationEl.innerHTML = marcupBtn;
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
