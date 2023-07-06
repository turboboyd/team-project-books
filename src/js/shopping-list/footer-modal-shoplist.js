const openFooterBackdrop = document.querySelector('.footer-btn');
const closeFooterModalBtn = document.querySelector('.footer-modal-close-btn');
const footerBackdrop = document.querySelector('.footer-backdrop');
const openFooterModalshop = document.querySelector('.footer-modal');

openFooterBackdrop.addEventListener('click', openFooterModal);
closeFooterModalBtn.addEventListener('click', closeFooterModal);

function openFooterModal() {
  footerBackdrop.classList.remove('visually-hidden');
  openFooterModalshop.classList.remove('visually-hidden');
  openFooterBackdrop.removeEventListener('click', openFooterModal);
  closeFooterModalBtn.addEventListener('click', closeFooterModal);
}

function closeFooterModal() {
  footerBackdrop.classList.add('visually-hidden');
  openFooterModalshop.classList.add('visually-hidden');

  closeFooterModalBtn.removeEventListener('click', closeFooterModal);
  openFooterBackdrop.addEventListener('click', openFooterModal);
}