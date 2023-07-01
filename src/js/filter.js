import BookAPI from './book-api';
import markupBook from './render-book-card';
import Notiflix from 'notiflix';

const bookApi = new BookAPI();
const containerContent = document.querySelector('.books-render-js');
const categorieEl = document.querySelector('.categorie-js');
const mainTitleEl = document.querySelector('.main-title');

bookApi
  .getBooksCategoriesList()
  .then(data => {
    renderCategories(data);
  })
  .catch(error => {
    console.error('Error:', error);
    Notiflix.Notify.failure(
      'Oops! Something went wrong. Please try again later.'
    );
  });

bookApi
  .getSelectedCategoryBooks()
  .then(data => renderBooks(data))
  .catch(error => {
    console.error('Error:', error);
    Notiflix.Notify.failure(
      'Oops! Something went wrong. Please try again later.'
    );
  });

function renderBooks(books) {
  cleaningBooks();
  const markup = books.map(book => markupBook(book)).join('');
  return containerContent.insertAdjacentHTML('beforeend', markup);
}

function cleaningBooks() {
  containerContent.innerHTML = '';
  // containerContent.innerHTML = '';
}

function renderCategories(categories) {
  categories
    .sort((a, b) => a.list_name.localeCompare(b.list_name))
    .map(categorie => markupCategorie(categorie));
}

function markupCategorie({ list_name }) {
  const name = list_name;
  const markup = `<li class="filter-item" data-active="${name}">${name}</li>`;
  const element = document.createElement('div');
  element.insertAdjacentHTML('beforeend', markup);

  const filterItem = element.querySelector('.filter-item');
  filterItem.addEventListener('click', () => {
    bookApi.category = name;
    bookApi
      .getSelectedCategoryBooks()
      .then(data => {
        renderBooks(data);
        mainTitleEl.textContent = name;
      })
      .catch(error => {
        console.error('Error found category:', error);
        Notiflix.Notify.failure(
          'Oops, there is no category with that name. Please try again later.'
        );
      });
  });

  return categorieEl.appendChild(element.firstChild);
}
