import markupBookCard from './marcup-shopping-card';

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
console.log('in', countPerPage);

let savedBooks;
const paginationEl = document.querySelector('.pagination-list');

const shoppingListEl = document.querySelector('.shopping__list');

function renderBtnPagination(data) {
  const pageCount = Math.ceil(data.length / countPerPage);
  const arrBtn = [];
  for (let i = 1; i <= pageCount; i += 1) {
    console.log('countofBook', i);
    const liEl = `<li class="pagination-item"><p class="pagination-text">${i}</p></li>`;
    arrBtn.push(liEl);
  }
  const marcupBtn = arrBtn.join('');
  paginationEl.innerHTML = marcupBtn;
}

function checkStorage() {
  const localSavedBooks = localStorage.getItem('shoppingList');
  if (localSavedBooks) {
    savedBooks = parseStorage('shoppingList');
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
}

window.addEventListener('storage', function (event) {
  console.log('Storage event:', event);
  if (event.key === 'shoppingList' && !event.newValue) {
    checkStorage();
  }
});

function OnClickrenderShoppingList(e) {
  const liElement = e.target.closest('li');
  if (liElement !== null) {
    const pElement = liElement.querySelector('p');
    const pageBtn = pElement.textContent;
    console.log(pageBtn);
    renderList(pageBtn, parseStorage('shoppingList'));
    const previousPage = document.querySelector('.curent-btn-pagination');
    previousPage.classList.remove('curent-btn-pagination');
    liElement.classList.add('curent-btn-pagination');
  }
}
