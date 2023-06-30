import BookAPI from './book-api';
const bookApi = new BookAPI();
const containerContent = document.querySelector(
  '.content-rendering-container-js'
);
const toTopBtn = document.querySelector('.to-top');
bookApi.getSelectedCategoryBooks().then(data => renderBooks(data));

function renderBooks(books) {
  containerContent.innerHTML = ''; // Очистка содержимого контейнера перед отрисовкой новых книг
}
const categories = [
  'Combined Print and E-book Fiction',
  'Combined Print & E-book Nonfiction',
  'Hardcover fiction',
  'Hardcover nonfiction',
  'Paperback trade fiction',
  'Paperback nonfiction',
  'Advice, how-to & Miscellaneous',
  'Children’s middle grade hardcover',
];

categories.map(category => {
  const categoryElement = createCategoryElement(category);
  containerContent.appendChild(categoryElement);

  bookApi.getBooksByCategory(category).then(data => {
    const bookList = createBookList(data);
    categoryElement.appendChild(bookList);
  });
});

function createCategoryElement(category) {
  const categoryElement = document.createElement('div');
  categoryElement.classList.add('category');
  categoryElement.innerHTML = `
    <h2 class="category-title">${category}</h2>
    <button class="see-more-btn">See More</button>
  `;
  return categoryElement;
}
function onScrollToTopBtn() {
  const offsetScroll = 200;
  const pageOffset = window.pageYOffset;

  pageOffset > offsetScroll
    ? refs.toTopBtn.classList.remove('is-hidden')
    : refs.toTopBtn.classList.add('is-hidden');
}

function onTopScroll() {
  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });
}

function smoothScrollGallery() {
  const { height } =
    refs.galleryContainer.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: height * 2,
    behavior: 'instant',
  });
}
toTopBtn.addEventListener('click', onTopScroll);
galleryContainer.addEventListener('click', smoothScrollGallery);
window.addEventListener('scroll', onScrollToTopBtn);
