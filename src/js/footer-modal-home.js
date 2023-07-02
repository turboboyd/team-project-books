const openFooterModalBtnHome = document.querySelector('[data-footer-modal-open="index"]');
const closeFooterModalBtnHome = document.querySelector('.footer-modal-index-close-btn__icon');
const footerBackdropHome = document.querySelector('[data-footer-modal="index"]');

openFooterModalBtnHome.addEventListener('click', openFooterModal);
closeFooterModalBtnHome.addEventListener('click', closeFooterModal);

function openFooterModal() {
  footerBackdropHome.classList.remove('is-open');
  
}

function closeFooterModal() {
  footerBackdropHome.classList.add('is-open');
  
}

