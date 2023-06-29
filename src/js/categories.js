

import BookAPI from './book-api';
const bookApi = new BookAPI();
const categorieEl = document.querySelector('.categorie-js');


bookApi.getBooksCategoriesList().then(data => renderCategories(data));

function renderCategories(categories) {
  categories.map(categorie => markupCategorie(categorie));
}

function markupCategorie({ list_name }) {
  const markup = `<li>${list_name}</li>`;
  return categorieEl.insertAdjacentHTML('beforeend', markup);
}

