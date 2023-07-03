import renderBook from './create-markup-book';

const containerContent = document.querySelector('.books-render-js');

export default function renderWrapCategories(categories) {
  categories.map(categorie => markupWrapCategories(categorie));
}

function markupWrapCategories(categorie) {
  const { list_name, books } = categorie;
  const markup = `    
    <li class="content-categories">
      <h3 class="content-categories-title">${list_name}</h3>
        <ul class="books-grid books-grid-item" ()>
                  ${books
                    .map(book => {
                      return renderBook(book);
                    })
                    .join('')}
          </ul>
    <button class="btn see-more-btn" data-active="${list_name}">see more</button>
    </li>`;
  containerContent.insertAdjacentHTML('beforeend', markup);
}
