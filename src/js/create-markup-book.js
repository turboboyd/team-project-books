import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function createMarkupBook({ _id, book_image, title, author }) {
  return `    <li class="card-book" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="800">
        <a href="#" class="card-book-link" title="${title}">
        <div class="card-book-wrap">
    <img width="218px" class="card-book-image" src="${book_image}" alt="${author} ${title}" loading="lazy">
    <p class="card-book-notification">Quick view</p>
    <p class="card-book-id visually-hidden">${_id}</p>
    </div>
    <div class="card-book-info">
    <p class="card-book-title">${title}</p>
    <p class="card-book-author">${author}</p>
    </div></a>
    </li>`;
}


export function createMarkup({_id ,book_image, title, author, description, buy_links}) {
  return `<img class="modal-img" src="${book_image}" alt="book cover" />
    <div class='modal-book-attributes'>
      <p class="modal-book-title">${title}</p>
      <p class="modal-book-author">${author}</p>
      <p class="modal-book-desc">${description}</p>
      <p class="card-book-id visually-hidden">${_id}</p>
      <div class="modal-shops">
        <a class="modal-shop-link" href="${buy_links[0].url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
          <img width="218px" class="modal-shop-img shopping-shopimg amazon" src="../images/amazon.png" alt="Amazon link" aria-label="Buy this book on Amazon" />
        </a>
        <a class="modal-shop-link" href="${buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">
          <img class="modal-shop-img shopping-shopimg apple" src="../images/books-io.png" alt="Apple Books link"  aria-label="Buy this book on Apple Books"/>
        </a>
        <a class="modal-shop-link" href="${buy_links[4].url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
          <img class="modal-shop-img shopping-shopimg book-shop" src="../images/bookshop.png" alt="BookShop link" aria-label="Buy this book on BookShop"/>
        </a>
      </div>
    </div>`;
}
