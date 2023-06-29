import BookAPI from './book-api';
const bookApi = new BookAPI();
const containerContent = document.querySelector(
  '.content-rendering-container-js'
);

bookApi.getTopBooks().then(data => renderWrapCategories(data));

function renderWrapCategories(categories) {
  categories.map(categorie => markupWrapCategories(categorie));
  // list_name: 'Advice How-To and Miscellaneous';
}

function markupWrapCategories({ list_name }) {
  const markup = `    <li class="content-categories">
    <h2>${list_name}</h2>
    <div class="wrap-categories"></div>
    <button></button>
    </li>`;
  containerContent.insertAdjacentHTML('beforeend', markup);

  const wrapCategories = document.querySelector('.wrap-categories');
  
}



// function renderBooks(books) {
//   containerContent.innerHTML = ''; 
// }
// const categories = [
//   'Combined Print and E-book Fiction',
//   'Combined Print & E-book Nonfiction',
//   'Hardcover fiction',
//   'Hardcover nonfiction',
//   'Paperback trade fiction',
//   'Paperback nonfiction',
//   'Advice, how-to & Miscellaneous',
//   'Children’s middle grade hardcover',
// ];

// categories.map(category => {
//   const categoryElement = createCategoryElement(category);
//   containerContent.appendChild(categoryElement);

//   bookApi.getBooksByCategory(category).then(data => {
//     const bookList = createBookList(data);
//     categoryElement.appendChild(bookList);
//   });
// });

// function createCategoryElement(category) {
//   const categoryElement = document.createElement('div');
//   categoryElement.classList.add('category');
//   categoryElement.innerHTML = `
//     <h2 class="category-title">${category}</h2>
//     <button class="see-more-btn">See More</button>
//   `;
//   return categoryElement;
// }
