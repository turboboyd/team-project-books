const bookGrid = document.querySelector('.books-render-js');
console.log('bookGrid: ', bookGrid);
bookGrid.addEventListener('click', handleBookClick);

function handleBookClick(event) {
  event.preventDefault();
  const cardBook = event.target.closest('.card-book');
  if (!cardBook) {
    return;
  }

  const bookId = cardBook.querySelector('.card-book-id').textContent;
  console.log('bookId: ', bookId);

  if (bookId) {
    fetchBookData(bookId)
      .then(bookData => {
        loadBookData(bookData);
        openModal();
      })
      .catch(error => {
        console.error('Error fetching book data:', error);
      });
  }
}

function loadBookData(bookData) {
  const { title, author, description, buy_links: buyLinks } = bookData;

  modalTitle.textContent = title;
  modalSubtitle.textContent = author;
  modalPrimaryText.textContent = description;

  modalLinks.innerHTML = '';
  buyLinks.forEach(buyLink => {
    const link = document.createElement('a');
    link.href = buyLink.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.addEventListener('click', handleLogoClick);

    const logo = document.createElement('img');
    logo.src = buyLink.logo;
    logo.alt = buyLink.store;

    link.appendChild(logo);
    modalLinks.appendChild(link);
  });

  addToShoppingListButton.addEventListener('click', handleAddToShoppingList);
}



const API_ENDPOINT = 'https://books-backend.p.goit.global';

function fetchBookData(bookId) {
  const url = `${API_ENDPOINT}/books/${bookId}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    });
}