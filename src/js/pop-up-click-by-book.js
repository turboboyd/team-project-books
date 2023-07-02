// Код JavaScript
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

function handleBookClick(event) {
  event.preventDefault();
  const cardBook = event.target.closest('.card-book');
  if (!cardBook) {
    return;
  }
  closeModalPopUpBtn.addEventListener('click', closePopUp);

  const bookId = cardBook.querySelector('.card-book-id').textContent;

  if (bookId) {
    fetchBookData(bookId)
      .then(bookData => {
        const book_image = bookData.book_image;
        const title = bookData.title;
        const author = bookData.author;
        const description = bookData.description;
        const amazon = bookData.buy_links.find(link => link.name === 'Amazon');
        const apple = bookData.buy_links.find(
          link => link.name === 'Apple Books'
        );
        const bookshop = bookData.buy_links.find(
          link => link.name === 'Bookshop'
        );

        const markup = `<img class="modal-img" src="${book_image}" alt="book cover" />
        <div class='modal-book-attributes'>
          <p class="modal-book-title">${title}</p>
          <p class="modal-book-author">${author}</p>
          <p class="modal-book-desc">${description}</p>
          <div class="modal-shops">
            <a class="modal-shop-link" href="${amazon.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
              <img class="modal-shop-img shopping-shopimg amazon" src="../images/amazon.png" alt="Amazon link" aria-label="Buy this book on Amazon" />
            </a>
            <a class="modal-shop-link" href="${apple.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">
              <img class="modal-shop-img shopping-shopimg apple" src="../images/books-io.png" alt="Apple Books link"  aria-label="Buy this book on Apple Books"/>
            </a>
            <a class="modal-shop-link" href="${bookshop.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
              <img class="modal-shop-img shopping-shopimg book-shop" src="../images/bookshop.png" alt="BookShop link" aria-label="Buy this book on BookShop"/>
            </a>
          </div>
        </div>`;

        renderMarkup(modalContentEl, markup);
        openPopUp();
      })
      .catch(error => {
        console.error('Error fetching book data:', error);
      });
  }
}

function fetchBookData(bookId) {
  const url = `${API_ENDPOINT}/books/${bookId}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    });
}

function renderMarkup(element, markup) {
  element.innerHTML = markup;
}

function clearMarkup(element) {
  element.innerHTML = '';
}
