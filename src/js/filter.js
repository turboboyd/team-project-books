import BookAPI from './book-api';
import markupBook from './render-book-card';
import Notiflix from 'notiflix';
import renderWrapCategories from './bestsellers';

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
  .then(data => {
    renderBooks(data);
  })
  .catch(error => {
    console.error('Error:', error);
    Notiflix.Notify.failure(
      'Oops! Something went wrong. Please try again later.'
    );
  });

function renderBooks(books) {
  cleaningBooks();
  const markup = books.map(book => markupBook(book)).join('');
  containerContent.insertAdjacentHTML('beforeend', markup);
}

function cleaningBooks() {
  containerContent.innerHTML = '';
}

function renderCategories(categories) {
  markupCategorie({ list_name: 'All categories' });
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
    if (name === 'All categories') {
      bookApi
        .getTopBooks()
        .then(data => {
          cleaningBooks();
          renderWrapCategories(data);
          mainTitleEl.textContent = 'Best Seller Books';
        })
        .catch(error => {
          console.error('Error retrieving top books:', error);
          Notiflix.Notify.failure(
            'Oops! Error retrieving top books. Please try again later.'
          );
        });
    } else {
      bookApi
        .getSelectedCategoryBooks(name)
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
    }
  });

  return categorieEl.appendChild(element.firstChild);
}

// Клик по кнопке
containerContent.addEventListener('click', function (event) {
  if (event.target.classList.contains('see-more-btn')) {
    const listName = event.target.dataset.categoriesName;
          bookApi.getSelectedCategoryBooks(listName).then(data => {
            renderBooks(data);
            mainTitleEl.textContent = listName;
          });
  }
});