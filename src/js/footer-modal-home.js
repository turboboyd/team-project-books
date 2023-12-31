const openFooterBackdropHome = document.querySelector('[data-footer-modal-open="index"]');
const closeFooterModalBtnHome = document.querySelector('.footer-modal-index-close-btn__icon');
const footerBackdropHome = document.querySelector('[data-footer-modal="index"]');
const openFooterModalHome = document.querySelector('.footer-modal')

openFooterBackdropHome.addEventListener('click', openFooterModal);
closeFooterModalBtnHome.addEventListener('click', closeFooterModal);

function openFooterModal() {
  footerBackdropHome.classList.remove('visually-hidden');
  openFooterModalHome.classList.remove('visually-hidden');

  openFooterBackdropHome.removeEventListener('click', openFooterModal);
  closeFooterModalBtnHome.addEventListener('click', closeFooterModal);
}

function closeFooterModal() {
  footerBackdropHome.classList.add('visually-hidden');
  openFooterModalHome.classList.add('visually-hidden');
  closeFooterModalBtnHome.removeEventListener('click', closeFooterModal);
  openFooterBackdropHome.addEventListener('click', openFooterModal);
}

