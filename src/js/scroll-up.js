const toTopBtn = document.querySelector('.back-to-top');
const btnUpWrapper = document.querySelector('.to-top');

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    btnUpWrapper.style.display = 'flex';
  } else {
    btnUpWrapper.style.display = 'none';
  }
}

window.addEventListener('scroll', () => {
  scrollFunction();
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Спочатку приховуємо кнопку
btnUpWrapper.style.display = 'none';
