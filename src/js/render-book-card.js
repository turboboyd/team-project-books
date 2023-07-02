import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function markupBook({ _id, book_image, title, author }) {
    return `    <li class="card-book" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="800">
        <a href="#" class="card-book-link" title="${title}">
        <div class="card-book-wrap">
    <img class="card-book-image" src="${book_image}" alt="${author} ${title}" loading="lazy">
    <p class="card-book-notification">Quick view</p>
    <p class="card-book-id visually-hidden">${_id}</p>
    </div>
    <div class="card-book-info">
    <p class="card-book-title">${title}</p>
    <p class="card-book-author">${author}</p>
    </div></a>
    </li>`;
}
