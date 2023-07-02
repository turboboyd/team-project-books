import BookAPI from './book-api';
import markupBook from './render-book-card';
import Notiflix from 'notiflix';
import renderWrapCategories from './bestsellers';

const bookApi = new BookAPI();
const containerContent = document.querySelector('.books-render-js');
const categorieEl = document.querySelector('.categorie-js');
const homeContainerEl = document.querySelector('.home-container');

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

function renderCategories(categories) {
  markupCategorie({ list_name: 'All categories' });
  categories
    .sort((a, b) => a.list_name.localeCompare(b.list_name))
    .map(categorie => markupCategorie(categorie));
}

function renderBooks(books) {
  cleaningBooks();
  const markup = books.map(book => markupBook(book)).join('');
  containerContent.insertAdjacentHTML('beforeend', markup);
}

function renderMainTitle(name) {
  cleaningTitle();
  const words = name.split(' ');
  const lastWord = words.pop();
  const title = words.join(' ');
  const markup = `<h2 class="main-title">
       ${title} <span class="main-title_last-word">${lastWord}</span>
    </h2>`;
  homeContainerEl.insertAdjacentHTML('afterbegin', markup);
}

function markupCategorie({ list_name }) {
  const name = list_name;
  const markup = `<li class="filter-item" data-active="${name}">${name}</li>`;
  const element = document.createElement('div');
  element.insertAdjacentHTML('beforeend', markup);

  const filterItem = element.querySelector('.filter-item');

  filterItem.addEventListener('click', () => {
    if (name === 'All categories') {
      generateBestSellersCategories();
    } else {
      generateCategory(name);
    }
  });

  return categorieEl.appendChild(element.firstChild);
}

function generateBestSellersCategories() {
  bookApi
    .getTopBooks()
    .then(data => {
      cleaningBooks();
      renderWrapCategories(data);
      renderMainTitle('Best Seller Books');
    })
    .catch(error => {
      console.error('Error retrieving top books:', error);
      Notiflix.Notify.failure(
        'Oops! Error retrieving top books. Please try again later.'
      );
    });
}

function generateCategory(name) {
  bookApi
    .getSelectedCategoryBooks(name)
    .then(data => {
      renderBooks(data);
      renderMainTitle(name);
    })
    .catch(error => {
      console.error('Error found category:', error);
      Notiflix.Notify.failure(
        'Oops, there is no category with that name. Please try again later.'
      );
    });
}

function cleaningBooks() {
  containerContent.innerHTML = '';
}

function cleaningTitle() {
  const titleElements = homeContainerEl.getElementsByClassName('main-title');
  for (let i = titleElements.length - 1; i >= 0; i--) {
    const titleElement = titleElements[i];
    titleElement.parentNode.removeChild(titleElement);
  }
}

containerContent.addEventListener('click', function (event) {
  if (event.target.classList.contains('see-more-btn')) {
    const listName = event.target.dataset.active;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    generateCategory(listName);
  }
});

