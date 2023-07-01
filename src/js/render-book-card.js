export default function markupBook({ id, book_image, title, author }) {
    return `    <li class="card-book">
        <a href="#" class="card-book-link" title="${title}">
        <div class="card-book-wrap">
    <img class="card-book-image" src="${book_image}" alt="${author} ${title}" loading="lazy">
    <p class="card-book-notification">Quick view</p>
    <p class="card-book-id visually-hidden">${id}</p>
    </div>
    <div class="card-book-info">
    <p class="card-book-title">${title}</p>
    <p class="card-book-author">${author}</p>
    </div></a>
    </li>`;
}
