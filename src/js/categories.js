
const BASE_URL = 'https://books-backend.p.goit.global/books/category-list';

function fetchBreeds() {
  return fetch(`${BASE_URL}`).then(r => {
    if (!r.ok) {
      throw new Error();
    }
    return r.json();
  });
}

fetchBreeds().then(data => renderCategories(data));





const categorieEl = document.querySelector('.categorie-js');

function renderCategories(categories) {
  categories.map(categorie => markupCategorie(categorie));
}

function markupCategorie({ list_name }) {
  const markup = `<li>${list_name}</li>`;
  return categorieEl.insertAdjacentHTML('beforeend', markup);
}

