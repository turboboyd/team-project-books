import BookAPI from './book-api';
import { showLoader, hideLoader } from './loader';
import createMarkup from './create-markup-book';
import Cleaning from './cleaning';
import localstorageMethods from './localstorage-method';

const bookApi = new BookAPI();
const clearMarkup = new Cleaning();
const shopListMethods = new localstorageMethods();
const modalPopUp = document.querySelector('[data-pop-up]');
const modalContentEl = modalPopUp.querySelector('.modal-pop-up-content');
const closeModalPopUpBtn = modalPopUp.querySelector('[data-pop-up-close]');
const modalPopUpBtn = modalPopUp.querySelector('.modal-pop-up-btn');
const bookGrid = document.querySelector('.books-render-js');
const messageTextEl = document.getElementById('messageText');

bookGrid.addEventListener('click', handleBookClick);
modalPopUp.addEventListener('click', handleModalBackdropClick);
window.addEventListener('keydown', handleKeyDown);

let currentBookData = null;

function openPopUp() {
  modalPopUp.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
}

function closePopUp() {
  modalPopUp.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  clearMarkup.clearElement(modalContentEl);
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

function addChangeTextModalBtn() {
  modalPopUpBtn.textContent = 'Add to shopping list';
  messageTextEl.textContent = '';
}

function removeChangeTextModalBtn() {
  modalPopUpBtn.textContent = 'Remove from the shopping list';
  messageTextEl.textContent =
    'Congratulations! You have successfully added the book to your shopping list';
}

function addToShoppingList(bookData) {
  const shoppingList = shopListMethods.getShoppingList();
  shoppingList.push(bookData);
  shopListMethods.saveShoppingList(shoppingList);
}

async function handleBookClick(event) {
  event.preventDefault();
  const cardBook = event.target.closest('.card-book');
  if (!cardBook) {
    return;
  }

  const bookId = cardBook.querySelector('.card-book-id').textContent;
  closeModalPopUpBtn.addEventListener('click', closePopUp);

  if (bookId) {
    try {
      showLoader();
      const bookData = await bookApi.getBookInfo(bookId);

      currentBookData = bookData;

      renderMarkup(modalContentEl, createMarkup(bookData));
      openPopUp();

      const shoppingList = shopListMethods.getShoppingList();
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

modalPopUpBtn.addEventListener('click', () => {
  const bookId = modalContentEl.querySelector('.card-book-id').textContent;
  const shoppingList = shopListMethods.getShoppingList();

  if (shoppingList.some(book => book._id === bookId)) {
    shopListMethods.removeFromShoppingList(bookId);
    addChangeTextModalBtn();
  } else {
    addToShoppingList(currentBookData);
    removeChangeTextModalBtn();
  }
});

closeModalPopUpBtn.addEventListener('click', () => {
  const bookId = modalContentEl.querySelector('.card-book-id').textContent;
  const shoppingList = shopListMethods.getShoppingList();

  if (shoppingList.some(book => book._id === bookId)) {
    removeChangeTextModalBtn();
  } else {
    addChangeTextModalBtn();
  }
});