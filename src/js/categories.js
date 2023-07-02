// import BookAPI from './book-api';
// import Notiflix from 'notiflix';

// const bookApi = new BookAPI();
// const categorieEl = document.querySelector('.categorie-js');
// console.log('categorieEl: ', categorieEl);

// bookApi.getBooksCategoriesList()
//   .then(data => renderCategories(data))
//   .catch(error => {
//   console.error('Error retrieving top books:', error);
//   Notiflix.Notify.failure('Oops! Error retrieving top books. Please try again later.')
// });

// function renderCategories(categories) {
//   categories.map(categorie => markupCategorie(categorie));
// }

// function markupCategorie({ list_name }) {
//   const name = list_name;
//   const markup = `<li class="filter-item" data-active="${name}">${name}</li>`;
//   return categorieEl.insertAdjacentHTML('beforeend', markup);
// }
