import { showLoader, hideLoader } from './loader';

const categoryContainerEl = document.querySelector(
  '.content-rendering-container'
);
const modalPopUp = document.querySelector('[data-pop-up]');
const modalContentEl = modalPopUp.querySelector('.modal-pop-up-content');
const closeModalPopUpBtn = modalPopUp.querySelector('[data-pop-up-close]');
const bookGrid = document.querySelector('.books-render-js');

bookGrid.addEventListener('click', handleBookClick);
modalPopUp.addEventListener('click', handleModalBackdropClick);
window.addEventListener('keydown', handleKeyDown);

const API_ENDPOINT = 'https://books-backend.p.goit.global';

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

function createMarkup(bookData) {
  return `<img class="modal-img" src="${bookData.book_image}" alt="book cover" />
    <div class='modal-book-attributes'>
      <p class="modal-book-title">${bookData.title}</p>
      <p class="modal-book-author">${bookData.author}</p>
      <p class="modal-book-desc">${bookData.description}</p>
      <p class="card-book-id visually-hidden">${bookData._id}</p>
      <div class="modal-shops">
        <a class="modal-shop-link" href="${bookData.amazonUrl}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
          <img class="modal-shop-img shopping-shopimg amazon" src="../images/amazon.png" alt="Amazon link" aria-label="Buy this book on Amazon" />
        </a>
        <a class="modal-shop-link" href="${bookData.appleUrl}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">
          <img class="modal-shop-img shopping-shopimg apple" src="../images/books-io.png" alt="Apple Books link"  aria-label="Buy this book on Apple Books"/>
        </a>
        <a class="modal-shop-link" href="${bookData.bookshopUrl}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
          <img class="modal-shop-img shopping-shopimg book-shop" src="../images/bookshop.png" alt="BookShop link" aria-label="Buy this book on BookShop"/>
        </a>
      </div>
    </div>`;
}

function renderMarkup(element, markup) {
  element.innerHTML = markup;
}

function clearMarkup(element) {
  element.innerHTML = '';
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
      const markup = createMarkup(bookData);
      renderMarkup(modalContentEl, markup);
      openPopUp();
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
