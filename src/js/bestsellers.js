import BookAPI from './book-api';
import Notiflix from 'notiflix';

import renderBook from './render-book-card';
const bookApi = new BookAPI();
const containerContent = document.querySelector('.books-render-js');

bookApi.getTopBooks()
  .then(data => renderWrapCategories(data))
  .catch(error => {
  console.error('Error retrieving top books:', error);
  Notiflix.Notify.failure('Oops! Error retrieving top books. Please try again later.')
});

function renderWrapCategories(categories) {
  categories.map(categorie => markupWrapCategories(categorie));
}

function markupWrapCategories(categorie) {
  const { list_name, books} = categorie;
  const markup = `    
    <li class="content-categories">
      <h3>${list_name}</h3>
        <ul class="books-grid " ()>
                  ${books
                    .map(book => {
                      return renderBook(book);
                    })
                    .join('')}
          </ul>
    <button>see more</button>
    </li>`;
  containerContent.insertAdjacentHTML('beforeend', markup);
}