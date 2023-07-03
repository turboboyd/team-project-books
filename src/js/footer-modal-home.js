const openFooterModalBtnHome = document.querySelector('[data-footer-modal-open="index"]');
const closeFooterModalBtnHome = document.querySelector('.footer-modal-index-close-btn__icon');
const footerBackdropHome = document.querySelector('[data-footer-modal="index"]');

openFooterModalBtnHome.addEventListener('click', openFooterModal);
closeFooterModalBtnHome.addEventListener('click', closeFooterModal);

function openFooterModal() {
  footerBackdropHome.classList.remove('is-open');
  openFooterModalBtnHome.removeEventListener('click', openFooterModal);
  closeFooterModalBtnHome.addEventListener('click', closeFooterModal);
}

function closeFooterModal() {
  footerBackdropHome.classList.add('is-open');
  closeFooterModalBtnHome.removeEventListener('click', closeFooterModal);
  openFooterModalBtnHome.addEventListener('click', openFooterModal);
}

