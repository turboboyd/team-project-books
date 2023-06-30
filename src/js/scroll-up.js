const toTopBtn = document.querySelector('.to-top');
function onScrollToTopBtn() {
  const offsetScroll = 200;
  const pageOffset = window.pageYOffset;
  pageOffset > offsetScroll
    ? refs.toTopBtn.classList.remove('is-hidden')
    : refs.toTopBtn.classList.add('is-hidden');
}
function onTopScroll() {
  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });
}
function smoothScrollGallery() {
  const { height } =
    refs.galleryContainer.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: height * 2,
    behavior: 'instant',
  });
}
toTopBtn.addEventListener('click', onTopScroll);
galleryContainer.addEventListener('click', smoothScrollGallery);
window.addEventListener('scroll', onScrollToTopBtn);
