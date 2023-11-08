import Notiflix from 'notiflix';
import Cleaning from './cleaning';
import BookAPI from './book-api';
import createMarkupBook from './create-markup-book';
import renderWrapCategories from './bestsellers';
import { showLoader, hideLoader } from './loader';
import scrollToMainTitle from './see-more-btn';
import * as Cache from '../js/support/sesion-storage-api'
const cleaning = new Cleaning();
const bookApi = new BookAPI();
const containerContent = document.querySelector('.books-render-js');
const categorieEl = document.querySelector('.categorie-js');
const homeContainerEl = document.querySelector('.home-container');
const categoriesListEl = document.querySelector('.categories_list');

let activeCategoty = null;
export let filterItemArray = [];

export function isActiveCategoryBtn(filterItem) {
  if (activeCategoty) {
    activeCategoty.classList.remove('filter-item-is-Active');
  }
  filterItem.classList.add('filter-item-is-Active');
  activeCategoty = filterItem;
}

export default function renderCategories(categories) {
  markupCategorie({ list_name: 'All categories' });
  categories
    .sort((a, b) => a.list_name.localeCompare(b.list_name))
    .map(categorie => markupCategorie(categorie));
}

export function generatePageFromCategories(name) {

  if (!Cache.getData(name)) {//if Cache not existing
    homeContainerEl.classList.add('hidden');
    showLoader();
    bookApi
      .getSelectedCategoryBooks(name)
      .then(data => {
        Cache.setData(name, data); //caching
        renderMainTitle(name);
        renderBooks(data);
        hideLoader();
        homeContainerEl.classList.remove('hidden');
        scrollToMainTitle();
      })
      .catch(error => {
        console.error('Error found category:', error);
        Notiflix.Notify.failure(
          'Oops, there is no category with that name. Please try again later.'
        );
      });

    
  } else {
    //if Cache exists
    const data = Cache.getData(name);
    renderMainTitle(name);
    renderBooks(data);
    scrollToMainTitle();
  }
  
}

function generatePageFromBestSellersCategory() {

  if (!Cache.getData('Top-Books')) {
    //if Cache not existing
    homeContainerEl.classList.add('hidden');
    showLoader();
    bookApi
      .getTopBooks()
      .then(data => {
        Cache.setData('Top-Books', data); //caching
        cleaning.clearElement(containerContent);  
        renderWrapCategories(data);
        renderMainTitle('Best Seller Books');
        hideLoader();
        homeContainerEl.classList.remove('hidden');
        scrollToMainTitle();
      })
      .catch(error => {
        console.error('Error retrieving top books:', error);
        Notiflix.Notify.failure(
          'Oops! Error retrieving top books. Please try again later.'
        );
      });
  } else {
    //if Cache exists
    const data = Cache.getData('Top-Books');
    cleaning.clearElement(containerContent);
    renderWrapCategories(data);
    renderMainTitle('Best Seller Books');
    hideLoader();
    homeContainerEl.classList.remove('hidden');
    scrollToMainTitle();
  }
  
}

function renderBooks(books) {
  cleaning.clearElement(containerContent);
  const markup = books.map(book => createMarkupBook(book)).join('');
  containerContent.insertAdjacentHTML('beforeend', markup);
}

function renderMainTitle(name) {
  cleaning.cleaningTitle();
  const words = name.split(' ');
  const lastWord = words.pop();
  const title = words.join(' ');
  const markup = `<h2 class="main-title">
       ${title} <span class="main-title_last-word">${lastWord}</span>
    </h2>`;
  homeContainerEl.insertAdjacentHTML('afterbegin', markup);
}

function onClickCategory(name, filterItem) {
  isActiveCategoryBtn(filterItem);
  if (name === 'All categories') {
    generatePageFromBestSellersCategory();
  } else {
    generatePageFromCategories(name);
  }
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
    onClickCategory(name, filterItem);
  });

  categorieEl.appendChild(element.firstChild);
  activeCategoty = categoriesListEl.firstElementChild;
}
