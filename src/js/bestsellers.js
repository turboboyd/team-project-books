import BookAPI from './book-api';
const bookApi = new BookAPI();
const containerContent = document.querySelector(
  '.content-rendering-container-js'
);

bookApi.getSelectedCategoryBooks().then(data => renderBooks(data));

function renderBooks(books) {
  containerContent.innerHTML = ''; // Очистка содержимого контейнера перед отрисовкой новых книг

  books.map(book => markupBook(book));
}

function markupBook({
  book_image,
  book_image_width,
  book_image_height,
  list_name,
  author,
}) {
  const markup = `
    <li class="card-book">
        <img class="book-image" width="${book_image_width}" height="${book_image_height}" loading="lazy" src="${book_image}"/>
        <h2 class="book-title">${list_name}</h2>
        <p class="book-author">${author}</p>
    </li>`;
  return containerContent.insertAdjacentHTML('beforeend', markup);
}




















