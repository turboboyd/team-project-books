export default function markupBookCard({
  id,
  book_image,
  title,
  categoris,
  description,
  author,
  linksAmazon,
  linkBookIo,
  linkBookshop,
}) {
  return `<li class="shopping-item">
      <img
        class="shopping-book-cover"
        src="${book_image}"
        alt="book cover"
        width="100"
        height="142"
        loading="lazy"
      />
      <div class="shopping-wrap">
        <h2 class="shopping-book-title">${title}</h2>
        <button class="shopping-trash" type="button" data-id-book="${id}">
          <svg class="icon-shopping-trash" width="18" height="18">
            <use href="../../images/sprite.svg#icon-trash"></use>
          </svg>
        </button>
        <p class="shopping-book-categories">${categoris}</p>
        <p class="shopping-book-description">${description}</p>
        <div class="shopping-wrapper">
          <p class="shopping-book-author">${author}</p>
          <ul class="shop-list">
            <li>
              <a class="shop-link" href="${linksAmazon}">
                <img
                  class="shop-img"
                  src="../../images/amazon.png"
                  alt="amazon"
                  width="32"
                  height="11"
                />
              </a>
            </li>
            <li>
              <a class="shop-link" href="${linkBookIo}">
                <img
                  class="shop-img"
                  src="../../images/books-io.png"
                  alt="books-io"
                  width="16"
                  height="16"
                />
              </a>
            </li>
            <li>
              <a class="shop-link" href="${linkBookshop}">
                <img
                  class="shop-img"
                  src="../../images/bookshop.png"
                  alt="bookshop"
                  width="16"
                  height="16"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>>`;
}
