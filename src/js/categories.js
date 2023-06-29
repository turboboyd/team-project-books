import BookAPI from './book-api';
const bookApi = new BookAPI();
const categorieEl = document.querySelector('.categorie-js');
console.log('categorieEl: ', categorieEl);


bookApi.getBooksCategoriesList().then(data => renderCategories(data));

function renderCategories(categories) {
  categories.map(categorie => markupCategorie(categorie));
}

function markupCategorie({ list_name }) {
  const name = list_name;
  const markup = `<li class="filter-item" data-active="${name}">${name}</li>`;
  return categorieEl.insertAdjacentHTML('beforeend', markup);
}









