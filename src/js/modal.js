const modal = document.querySelector('.backdrop-js');
function handleClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.closest('.card-book-link')) {
    console.log('Клік');
    modal.classList.toggle('visually-hidden');
  }
}

function addEventListenersToRenderContainer() {
  const renderContainer = document.querySelector('.render-container-js');
  if (renderContainer) {
    renderContainer.addEventListener('click', handleClick);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  addEventListenersToRenderContainer();
});
