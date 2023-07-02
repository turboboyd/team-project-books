import BookAPI from './book-api';
import markupBook from './render-book-card';
import Notiflix from 'notiflix';
import renderWrapCategories from './bestsellers';
import { showLoader, hideLoader } from './loader';

const bookApi = new BookAPI();
const containerContent = document.querySelector('.books-render-js');
const categorieEl = document.querySelector('.categorie-js');
const homeContainerEl = document.querySelector('.home-container');
const mainTitleEl = document.querySelector('.main-title');
const categoriesListEl = document.querySelector('.categories_list');
let filterItemArray = [];
let activeCategoty = null;

export default function renderCategories(categories) {
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
  const markup = `<li class="filter-item ${
    name === 'All categories' ? 'filter-item-is-Active' : ''
  }" data-active="${name}">${name}</li>`;
  const element = document.createElement('div');
  element.insertAdjacentHTML('beforeend', markup);
  const filterItem = element.querySelector('.filter-item');

  filterItemArray.push(filterItem);

  filterItem.addEventListener('click', () => {
    isActiveCategoryBtn(filterItem);
    if (name === 'All categories') {
      generateBestSellersCategories();
    } else {
      generateCategory(name);
    }
  });

  categorieEl.appendChild(element.firstChild);
  activeCategoty = categoriesListEl.firstElementChild;
}

function generateBestSellersCategories() {
  homeContainerEl.classList.add('hidden');
  showLoader();
  bookApi
    .getTopBooks()
    .then(data => {
      cleaningBooks();
      renderWrapCategories(data);
      renderMainTitle('Best Seller Books');
      hideLoader();
      homeContainerEl.classList.remove('hidden');
    })
    .catch(error => {
      console.error('Error retrieving top books:', error);
      Notiflix.Notify.failure(
        'Oops! Error retrieving top books. Please try again later.'
      );
    });
}

function generateCategory(name) {
  homeContainerEl.classList.add('hidden');
  showLoader();
  bookApi
    .getSelectedCategoryBooks(name)
    .then(data => {
      renderBooks(data);
      renderMainTitle(name);
      hideLoader();
      homeContainerEl.classList.remove('hidden');
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

function isActiveCategoryBtn(filterItem) {
  if (activeCategoty) {
    activeCategoty.classList.remove('filter-item-is-Active');
  }
  filterItem.classList.add('filter-item-is-Active');
  activeCategoty = filterItem;
}

containerContent.addEventListener('click', function (event) {
  if (event.target.classList.contains('see-more-btn')) {
    const listName = event.target.dataset.active;
    window.scrollTo({ top: mainTitleEl.offsetTop, behavior: 'smooth' });
    generateCategory(listName);
    searchCategoryName(listName);
  }
});

function searchCategoryName(list_name) {
  filterItemArray.forEach(element => {
    if (list_name === element.dataset.active) {
      isActiveCategoryBtn(element);
    }
  });
}




