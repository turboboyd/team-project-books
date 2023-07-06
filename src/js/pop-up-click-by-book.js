import BookAPI from './book-api';
import { showLoader, hideLoader } from './loader';
// import createMarkup from './create-markup-book';
import Cleaning from './cleaning';
import localstorageMethods from './localstorage-method';
import amazon from '../images/stores/amazon.png';
import amazon2x from '../images/stores/amazon@2x.png';
import bookStore from '../images/stores/book.png';
import bookStore2x from '../images/stores/book@2x.png';
import bookShop from '../images/stores/book-shop.png';
import bookShop2x from '../images/stores/book-shop@2x.png';
import Notiflix from 'notiflix';
const bookApi = new BookAPI();
const clearMarkup = new Cleaning();
const shopListMethods = new localstorageMethods();
const modalPopUp = document.querySelector('[data-pop-up]');
const modalContentEl = modalPopUp.querySelector('.modal-pop-up-content');
const closeModalPopUpBtn = modalPopUp.querySelector('[data-pop-up-close]');
const modalPopUpBtn = modalPopUp.querySelector('.modal-pop-up-btn');
const bookGrid = document.querySelector('.books-render-js');
const messageTextEl = document.getElementById('messageTextPop');

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

function createMarkup({
  _id,
  book_image,
  title,
  author,
  description,
  buy_links,
}) {
  return `<img class="modal-img" src="${book_image}" alt="book cover" />
    <div class='modal-book-attributes'>
      <p class="modal-book-title">${title}</p>
      <p class="modal-book-author">${author}</p>
      <p class="modal-book-desc">${description}</p>
      <p class="card-book-id visually-hidden">${_id}</p>
      <div class="modal-shops">
        <a class="modal-shop-link" href="${buy_links[0].url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
          <img 
          class="modal-shop-img shopping-shopimg amazon" 
           srcset="${amazon} 1x, ${amazon2x} 2x"
                src="${amazon}";
                alt="Amazon shop"
               
          aria-label="Buy this book on Amazon" />
        </a>
        <a class="modal-shop-link" href="${buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">
          <img class="modal-shop-img shopping-shopimg apple"     srcset="${bookStore} 1x, ${bookStore2x} 2x"
                src="${bookStore}"
                alt="Book shop"
                  aria-label="Buy this book on Apple Books"/>
        </a>
        <a class="modal-shop-link" href="${buy_links[4].url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
          <img class="modal-shop-img shopping-shopimg book-shop"  srcset=" ${bookShop} 1x, ${bookShop2x} 2x"
                src="${bookShop2x}"
                alt="Book shop"
                aria-label="Buy this book on BookShop"/>
        </a>
      </div>
    </div>`;
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
      await showLoader();
      const bookData = await bookApi.getBookInfo(bookId);

      currentBookData = bookData;

      renderMarkup(modalContentEl, createMarkup(bookData));

      hideLoader();
      openPopUp();

      const shoppingList = shopListMethods.getShoppingList();
      if (shoppingList.some(book => book._id === bookId)) {
        modalPopUpBtn.textContent = 'Remove from the shopping list';
      } else {
        modalPopUpBtn.textContent = 'Add to shopping list';
      }
    } catch (error) {
      console.error('Error handling book click:', error);
      Notiflix.Notify.failure(
        `Error handling book click: ${error}`
      );
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

function elementIsDisableb(element) {
  element.disabled = true;
}

function elementIsActive(element) {
  element.disabled = false;
}
