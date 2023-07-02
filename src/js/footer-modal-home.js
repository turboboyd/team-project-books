const openFooterModalBtnHome = document.querySelector('[data-footer-modal-open="index"]');
const closeFooterModalBtnHome = document.querySelector('.footer-modal-index-close-btn__icon');
const footerBackdropHome = document.querySelector('[data-footer-modal="index"]');
console.log(openFooterModalBtnHome);
console.log(closeFooterModalBtnHome);
console.log(footerBackdropHome);
openFooterModalBtnHome.addEventListener('click', openFooterModal);
closeFooterModalBtnHome.addEventListener('click', closeFooterModal);

function openFooterModal() {
  footerBackdropHome.classList.remove('is-open');
  console.log(123);
}

function closeFooterModal() {
  footerBackdropHome.classList.add('is-open');
  console.log(124);
}

