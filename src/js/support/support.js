import charities from "./charities";

const list = document.querySelector('.support-list');
const html = charities.map(makeMarkup).join('');

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