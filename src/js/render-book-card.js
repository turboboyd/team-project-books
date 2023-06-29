const containerContent = document.querySelector('.render-container-js');

export default function markupBook({ id, book_image, title, author }) {
  const markup = `    <li class="card-book">
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

  return containerContent.insertAdjacentHTML('beforeend', markup);
}

//     <li class="card-book">
//     <img class="book-image" width="${book_image_width}" height="${book_image_height}" loading="lazy" src="${book_image}"/>
//     <h2 class="book-title">${list_name}</h2>
//     <p class="book-author">${author}</p>
// </li>`;
