import BookAPI from './book-api';
import markupBook from './render-book-card'
const bookApi = new BookAPI();

const containerContent = document.querySelector(
  '.render-container-js'
);
const categorieEl = document.querySelector('.categorie-js');


bookApi.getBooksCategoriesList().then(data => renderCategories(data));

bookApi.getSelectedCategoryBooks().then(data => renderBooks(data));


function renderBooks(books) {
    cleaningBooks()
    books.map(book => markupBook(book));
}

function cleaningBooks() {
    containerContent.innerHTML = '';
}





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
