import markupBookCard from './marcup-shopping-card';
// import {
//   removeFromShoppingList,
//   getShoppingList,
//   saveShoppingList,
// } from '../pop-up-click-by-book';

function parseStorage(storageKey) {
  try {
    return JSON.parse(localStorage.getItem(storageKey));
  } catch (error) {
    console.log(error);
  }
}
const screenWidth = window.innerWidth;
const isMobile = screenWidth < 768;
let countPerPage = 3;
if (isMobile) {
  countPerPage = 4;
}
const shoppingListKey = 'shoppingList';
let savedBooks;
const paginationEl = document.querySelector('.pagination-list');

const shoppingListEl = document.querySelector('.shopping__list');

function renderBtnPagination(data) {
  const pageCount = Math.ceil(data.length / countPerPage);
  const arrBtnPage = [];
  for (let i = 1; i <= pageCount; i += 1) {
    const btnEl = `<button type="button" class="pagination-btn">${i}</button>`;
    arrBtnPage.push(btnEl);
  }
  //   const arrAllBtn = [...createArrowLeftBtnPagination(), ...arrBtnPage];
  //   console.log('arrAllBtn', arrAllBtn);
  const marcupBtn = arrBtnPage.join('');
  //   console.log('arrAllBtn', arrAllBtn);
  paginationEl.innerHTML = marcupBtn;
}

// function createArrowLeftBtnPagination() {
//   return [
//     `<button type="button" class="pagination-btn" data-go-to="leftSomePage"><svg class="icon-arrow icon-arrow-left" width="18" height="18">
//           <use href="./images/sprite.svg#icon-arrow-right"></use>
//         </svg><svg class="icon-arrow icon-arrow-left" width="18" height="18">
//           <use href="./images/sprite.svg#icon-arrow-right"></use>
//         </svg></button>,
//         <button type="button"class="pagination-btn" data-go-to="leftOnePage"><svg class="icon-arrow icon-arrow-left" width="18" height="18">
//           <use href="./images/sprite.svg#icon-arrow-right"></use>
//         </svg></button>`,
//   ];
// }

// function createArrowRightBtnPagination() {
//   return `<button type="button" class="pagination-btn" data-go-to="rightOnePage"><svg class="icon-arrow icon-arrow-right" width="18" height="18">
//           <use href="./images/sprite.svg#icon-arrow-right"></use>
//         </svg></button><button type="button" class="pagination-btn" data-go-to="rightSomePage"><svg class="icon-arrow icon-arrow-right" width="18" height="18">
//           <use href="./images/sprite.svg#icon-arrow-right"></use>
//         </svg><svg class="icon-arrow icon-arrow-right" width="18" height="18">
//           <use href="./images/sprite.svg#icon-arrow-right"></use>
//         </svg></button>`
// }

function checkStorage() {
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
checkStorage();

function renderShoppingList(data) {
  console.log(data);
  const firstBtn = paginationEl.children[0];
  firstBtn.classList.add('curent-btn-pagination');

  if (data.length <= 3) {
    shoppingListEl.innerHTML = markupBookCard(data);
    addEventListenerToTrash();
  } else {
    renderList(1, data);
    paginationEl.addEventListener('click', OnClickrenderShoppingList);
  }
}
function renderList(page, arrBooks) {
  let start = countPerPage * page - 3;
  let end = countPerPage * page;
  if (isMobile) {
    start = countPerPage * (page - 1);
  }
  const arrForRenderFirstPage = arrBooks.slice(start, end);
  shoppingListEl.innerHTML = markupBookCard(arrForRenderFirstPage);
  addEventListenerToTrash();
}

window.addEventListener('storage', function (event) {
  if (event.key === shoppingListKey && !event.newValue) {
    checkStorage();
  }
});

function OnClickrenderShoppingList(e) {
  const btnEl = e.target.closest('button');
  if (btnEl !== null) {
    const pageBtn = btnEl.textContent;
    renderList(pageBtn, parseStorage(shoppingListKey));
    addEventListenerToTrash();
    const previousPage = document.querySelector('.curent-btn-pagination');
    previousPage.classList.remove('curent-btn-pagination');
    btnEl.classList.add('curent-btn-pagination');
  }
}

function addEventListenerToTrash() {
  const trashEl = document.querySelectorAll('.shopping-trash');
  trashEl.forEach(el =>
    el.addEventListener('click', OnClickremoveBookFromList)
  );
}

function OnClickremoveBookFromList(e) {
  const target = e.target.closest('.shopping-trash');
  const id = target.dataset.id;
  console.log(id);
  removeFromShoppingList(id);
  const data = parseStorage(shoppingListKey);
  renderList(1, data);
  renderBtnPagination(data);
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
