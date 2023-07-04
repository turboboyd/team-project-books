import amazon from '../../images/amazon.png';
import booksIo from '../../images/books-io.png';
import bookshop from '../../images/bookshop.png';

export default function markupBookCard(books) {
  const marcup = books
    .map(
      (book, index) => `<li class="shopping-item">
    <img
      class="shopping-book-cover"
      src="${book.book_image}"
      alt="book cover"
      width="100"
      height="142"
      loading="lazy"
    />
    <div class="shopping-wrap">
      <h2 class="shopping-book-title">${book.title}</h2>
      <button class="shopping-trash" type="button" data-id="${book._id}" data-index="${index}">
        <svg class="icon-shopping-trash" width="18" height="18">
          <use href="./images/sprite.svg#icon-trash"></use>
        </svg>
      </button>

      <p class="shopping-book-categories">${book.list_name}</p>
      <p class="shopping-book-description text">${book.description}</p>
      <div class="shopping-wrapper">
        <p class="shopping-book-author">${book.author}</p>

        <ul class="shop-list">
          <li>
            <a class="shop-link" href="${book.amazon_product_url}" target="_blank">
              <img
                class="shop-img"
                src="${amazon}"
                alt="amazon"
                width="32"
                height="11"
              />
            </a>
          </li>
          <li>
            <a class="shop-link" href="${book.buy_links[1].url}" target="_blank">
              <img
                class="shop-img"
                src="${booksIo}"
                alt="books-io"
                width="16"
                height="16"
              />
            </a>
          </li>
          <li>
            <a class="shop-link" href="${book.buy_links[4].url}" target="_blank">
              <img
                class="shop-img"
                src="${bookshop}"
                alt="bookshop"
                width="16"
                height="16"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>`
    )
    .join('');
  return marcup;
}
