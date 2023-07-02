const openFooterModalBtn = document.querySelector('.footer-btn');
const closeFooterModalBtn = document.querySelector('.footer-modal-close-btn');
const footerBackdrop = document.querySelector('.footer-backdrop');


openFooterModalBtn.addEventListener('click', openFooterModal);
closeFooterModalBtn.addEventListener('click', closeFooterModal);

function openFooterModal() {
  footerBackdrop.classList.remove('is-open');
  
}

function closeFooterModal() {
  footerBackdrop.classList.add('is-open');
  
}