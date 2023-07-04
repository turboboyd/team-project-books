
import amazon from '../../images/stores/amazon.png';
import amazon2x from '../../images/stores/amazon@2x.png';
import bookStore from '../../images/stores/book.png';
import bookStore2x from '../../images/stores/book@2x.png';
import bookShop from '../../images/stores/book-shop.png';
import bookShop2x from '../../images/stores/book-shop@2x.png';

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
                class="shop-img amazon icon-shop-1"
                srcset="${amazon} 1x, ${amazon2x} 2x"
                src="${amazon}";
                alt="Amazon shop"
                width="32"
                height="11"
              />
            </a>
          </li>
          <li>
            <a class="shop-link" href="${book.buy_links[1].url}" target="_blank">
              <img
                class="shop-img icon-shop-2"
                srcset="${bookStore} 1x, ${bookStore2x} 2x"
                src="${bookStore}"
                alt="Book shop"
                width="16"
                height="16"
              />
            </a>
          </li>
          <li>
            <a class="shop-link" href="${book.buy_links[4].url}" target="_blank">
              <img
                class="shop-img icon-shop-3"
                srcset=" ${bookShop} 1x, ${bookShop2x} 2x"
                src="${bookShop2x}"
                alt="Book shop"
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
