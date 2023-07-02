const openFooterModalBtn = document.querySelector('.footer-btn');
const footerModal = document.querySelector('.footer-backdrop');
const closeFooterModalBtn = document.querySelector('.footer-modal-close-btn');



openFooterModalBtn.addEventListener('click', toggleModal);
closeFooterModalBtn.addEventListener('click', toggleModal);


function toggleModal() {
  footerModal.classList.toggle('is-open')
}
toggleModal();