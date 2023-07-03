import BookAPI from './book-Api';
import { showLoader, hideLoader } from './loader';
import createMarkup from './create-markup-book';

const bookApi = new BookAPI();
const modalPopUp = document.querySelector('[data-pop-up]');
const modalContentEl = modalPopUp.querySelector('.modal-pop-up-content');
const closeModalPopUpBtn = modalPopUp.querySelector('[data-pop-up-close]');
const modalPopUpBtn = modalPopUp.querySelector('.modal-pop-up-btn');
const bookGrid = document.querySelector('.books-render-js');
const messageTextEl = document.getElementById('messageTextPop');

bookGrid.addEventListener('click', handleBookClick);
modalPopUp.addEventListener('click', handleModalBackdropClick);
window.addEventListener('keydown', handleKeyDown);

const API_ENDPOINT = 'https://books-backend.p.goit.global';
const shoppingListKey = 'shoppingList';

let currentBookData = null;

function openPopUp() {
  modalPopUp.classList.remove('is-hidden');
}

function closePopUp() {
  modalPopUp.classList.add('is-hidden');
  clearMarkup(modalContentEl);
}

function handleModalBackdropClick(event) {
  if (event.target === modalPopUp) {
    closePopUp();
  }
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closePopUp();
  }
}

function renderMarkup(element, markup) {
  element.innerHTML = markup;
}

function clearMarkup(element) {
  element.innerHTML = '';
}

function addToShoppingList(bookData) {
  const shoppingList = getShoppingList();
  shoppingList.push(bookData);
  saveShoppingList(shoppingList);
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

async function handleBookClick(event) {
  event.preventDefault();
  const cardBook = event.target.closest('.card-book');
  if (!cardBook) {
    return;
  }
  closeModalPopUpBtn.addEventListener('click', closePopUp);

  const bookId = cardBook.querySelector('.card-book-id').textContent;

  if (bookId) {
    try {
      showLoader();
      const bookData = await getBookData(bookId);

      currentBookData = bookData;

      renderMarkup(modalContentEl, createMarkup(bookData));
      openPopUp();

      const shoppingList = getShoppingList();
      if (shoppingList.some(book => book._id === bookId)) {
        modalPopUpBtn.textContent = 'Remove from the shopping list';
      } else {
        modalPopUpBtn.textContent = 'Add to shopping list';
      }

      hideLoader();
    } catch (error) {
      console.error('Error handling book click:', error);
    }
  }
}

async function getBookData(bookId) {
  const url = `${API_ENDPOINT}/books/${bookId}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
}

modalPopUpBtn.addEventListener('click', () => {
  const bookId = modalContentEl.querySelector('.card-book-id').textContent;
  const shoppingList = getShoppingList();

  if (shoppingList.some(book => book._id === bookId)) {
    removeFromShoppingList(bookId);
    modalPopUpBtn.textContent = 'Add to shopping list';
    messageTextEl.textContent = '';
  } else {
    addToShoppingList(currentBookData);
    modalPopUpBtn.textContent = 'Remove from the shopping list';
    messageTextEl.textContent =
      'Congratulations! You have successfully added the book to your shopping list';
  }
});

closeModalPopUpBtn.addEventListener('click', () => {
  const bookId = modalContentEl.querySelector('.card-book-id').textContent;
  const shoppingList = getShoppingList();

  if (shoppingList.some(book => book._id === bookId)) {
    modalPopUpBtn.textContent = 'Remove from the shopping list';
    messageTextEl.textContent =
      'Congratulations! You have successfully added the book to your shopping list';
  } else {
    modalPopUpBtn.textContent = 'Add to shopping list';
    messageTextEl.textContent = '';
  }
});
