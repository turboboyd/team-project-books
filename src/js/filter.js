import BookAPI from './book-api';
const bookApi = new BookAPI();

const containerContent = document.querySelector(
  '.render-container-js'
);
const categorieEl = document.querySelector('.categorie-js');


bookApi.getSelectedCategoryBooks().then(data => renderBooks(data));

function renderBooks(books) {
    cleaningBooks()
    books.map(book => markupBook(book));
}

function cleaningBooks() {
      containerContent.innerHTML = '';
}

function markupBook({
  book_image,
  book_image_width,
  book_image_height,
  list_name,
  author,
}) {
    const markup = `
    <li class="card-book">
        <img class="book-image" width="${book_image_width}" height="${book_image_height}" loading="lazy" src="${book_image}"/>
        <h3 class="book-title">${list_name}</h3>
        <p class="book-author">${author}</p>
    </li>
    `;
  return containerContent.insertAdjacentHTML('beforeend', markup);
}

bookApi.getBooksCategoriesList().then(data => renderCategories(data));

function renderCategories(categories) {
  categories.map(categorie => markupCategorie(categorie));
}

function markupCategorie({ list_name }) {
  const name = list_name;
  const markup = `<li class="filter-item" data-active="${name}">${name}</li>`;
  const element = document.createElement('div');
  element.innerHTML = markup;

  const filterItem = element.querySelector('.filter-item');
    filterItem.addEventListener('click', () => {
    bookApi.category = name; 
    bookApi.getSelectedCategoryBooks().then(data => renderBooks(data));
  });

  return categorieEl.appendChild(element.firstChild);
}
