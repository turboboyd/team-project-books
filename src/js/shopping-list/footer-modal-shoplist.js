const openFooterBackdrop = document.querySelector('.footer-btn');
const closeFooterModalBtn = document.querySelector('.footer-modal-close-btn');
const footerBackdrop = document.querySelector('.footer-backdrop');
const openFooterModalshop = document.querySelector('.footer-modal');

openFooterBackdrop.addEventListener('click', openFooterModal);
closeFooterModalBtn.addEventListener('click', closeFooterModal);

function openFooterModal() {
  footerBackdrop.classList.remove('is-open');
  openFooterModalshop.classList.remove('is-open');
  openFooterBackdrop.removeEventListener('click', openFooterModal);
  closeFooterModalBtn.addEventListener('click', closeFooterModal);
}

function closeFooterModal() {
  footerBackdrop.classList.add('is-open');
  openFooterModalshop.classList.add('is-open');

  closeFooterModalBtn.removeEventListener('click', closeFooterModal);
  openFooterBackdrop.addEventListener('click', openFooterModal);
}