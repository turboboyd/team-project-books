// const modal = document.querySelector('.backdrop');
// const closeButton = modal.querySelector('.close-button');
// const addToShoppingListButton = modal.querySelector('.btn--current');
// const infoText = modal.querySelector('.info-text');
// const modalBackdrop = modal.querySelector('.backdrop');

// function openModal() {
//   modal.classList.remove('is-hidden');
//   modalBackdrop.addEventListener('click', closeModal);
//   closeButton.addEventListener('click', closeModal);
//   document.addEventListener('keydown', handleKeyDown);
//   disableScroll();
// }

// function closeModal() {
//   modal.classList.add('is-hidden');
//   modalBackdrop.removeEventListener('click', closeModal);
//   closeButton.removeEventListener('click', closeModal);
//   document.removeEventListener('keydown', handleKeyDown);
//   enableScroll();
// }

// function handleKeyDown(event) {
//   if (event.key === 'Escape') {
//     closeModal();
//   }
// }

// function disableScroll() {
//   document.body.style.overflow = 'hidden';
// }

// function enableScroll() {
//   document.body.style.overflow = '';
// }

// function handleLogoClick(event) {
//   event.stopPropagation();
//   window.open(event.target.href, '_blank');
// }

// function handleAddToShoppingList() {
//   addToShoppingListButton.textContent = 'Remove from the shopping list';
//   infoText.textContent = 'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
//   infoText.style.color = 'rgba(255, 255, 255, 0.5)'; 
//   infoText.style.fontWeight = '400';
//   infoText.style.fontSize = '10px';
//   infoText.style.align = 'center';
//   infoText.style.weight = '242px';
//   infoText.classList.remove('visually-hidden');
// }

// function handleClick(event) {
//   event.preventDefault();
//   const target = event.target;
//   if (target.closest('.card-book-link')) {
//     console.log('Click');
//     openModal();
//   } else if (target.classList.contains('store-link')) {
//     handleLogoClick(event);
//   } else if (target.classList.contains('btn--current')) {
//     handleAddToShoppingList();
//   }
// }

// function addEventListenersToRenderContainer() {
//   const renderContainer = document.querySelector('.render-container-js');
//   if (renderContainer) {
//     renderContainer.addEventListener('click', handleClick);
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   addEventListenersToRenderContainer();
// });