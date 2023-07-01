import charities from './charities';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';



const charitiesWithImages = charities.map((charity) => ({
  ...charity,
  img: `./images/support/${getImageFilename(charity.title)}`,
}));

const list = document.querySelector('.support-list');
const html = charitiesWithImages.map(makeMarkup).join('');

function makeMarkup({ url, title, img }, index) {
  const digits = (index + 1).toString().padStart(2, '0');

  return `
  <li class="swiper-slide">
        <div class="support-item">
        <span class="support-index">${digits}</span>
        <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
            <img src="${img}"  alt="${title}">
        </a>
    </li>`;
}

list.innerHTML = html;

const str = charities.map((element, index) => {
  return '<li class="support-item"> ссылка на фонд <a class="support-link" href=""></a></li>';
});

function getImageFilename(title) {
  // Видалити пробіли та спеціальні символи і перетворити на lowercase
  const cleanedTitle = title.replace(/[^\w\s]/gi, '').toLowerCase();
  return `${cleanedTitle}.png`;
}

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 4,
  rewind: true,
  spaceBetween: 20,
  effect: 'slide',
  breakpoints: {
    480: {
      slidesPerView: 6,
    },
  },
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-next',
  },
});
