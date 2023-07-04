import charities from './charities';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import saveTheChildren from '../../images/support/save-the-children.png';
import saveTheChildren2x from '../../images/support/save-children@2x.png';

import projectHope from '../../images/support/project-hope.png';
import projectHope2x from '../../images/support/hope@2x.png';

import united24 from '../../images/support/united24.png';
import united242x from '../../images/support/united@2x.png';

import internationalMedicalCorps from '../../images/support/international-medical-corps.png';
import internationalMedicalCorps2x from '../../images/support/medical@2x.png';

import medicinsSansFrontieres from '../../images/support/medicins-sans-frontieres.png';
import medicinsSansFrontieres2x from '../../images/support/medecins@2x.png';

import razom from '../../images/support/razom.png';
import razom2x from '../../images/support/razom@2x.png';

import actionAgainstHunger from '../../images/support/action-against-hunger.png';
import actionAgainstHunger2x from '../../images/support/action@2x.png';

import worldVision from '../../images/support/world-vision.png';
import worldVision2x from '../../images/support/world-vision@2x.png';

import serhiyPrytulaCharityFoundation from '../../images/support/serhiy-prytula-charity-foundation.png';
import serhiyPrytulaCharityFoundation2x from '../../images/support/serhiy-prytula-charity-foundation@2x.png';


const supportImg = [
  {
    title: 'Save the Children',
    srcset: `${saveTheChildren} 1x, ${saveTheChildren2x} 2x`,
    src: saveTheChildren,
  },
  {
    title: 'Project HOPE',
    srcset: `${projectHope} 1x, ${projectHope2x} 2x`,
    src: projectHope,
  },
  {
    title: 'UNITED24',
    srcset: `${united24} 1x, ${united242x} 2x`,
    src: united24,
  },
  {
    title: 'International Medical Corps',
    srcset: `${internationalMedicalCorps} 1x, ${internationalMedicalCorps2x} 2x`,
    src: internationalMedicalCorps,
  },
  {
    title: 'Medicins Sans Frontieres',
    srcset: `${medicinsSansFrontieres} 1x, ${medicinsSansFrontieres2x} 2x`,
    src: medicinsSansFrontieres,
  },
  {
    title: 'RAZOM',
    srcset: `${razom} 1x, ${razom2x} 2x`,
    src: razom,
  },
  {
    title: 'Action against hunger',
    srcset: `${actionAgainstHunger} 1x, ${actionAgainstHunger2x} 2x`,
    src: actionAgainstHunger,
  },
  {
    title: 'World vision',
    srcset: `${worldVision} 1x, ${worldVision2x} 2x`,
    src: worldVision,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    srcset: `${serhiyPrytulaCharityFoundation} 1x, ${serhiyPrytulaCharityFoundation2x} 2x`,
    src: serhiyPrytulaCharityFoundation,
  },
];

const list = document.querySelector('.support-list');

charities.forEach(function (data, index) {
  let digits = (index + 1).toString().padStart(2, '0');
  let imgSrc = data.img;
  let imgSrcset = '';

  if (!imgSrc) {
    const supportImgItem = supportImg.find(item => item.title === data.title);
    if (supportImgItem) {
      imgSrc = supportImgItem.src;
      imgSrcset = supportImgItem.srcset;
    }
  }
  
  
  const listItem = `
  <li class="swiper-slide">
        <div class="support-item">
        <span class="support-index">${digits}</span>
        <a class="support-link" href="${data.url}" target="_blank" rel="noopener noreferrer nofollow">
            <img class="support-img" src="${imgSrc}" srcset="${imgSrcset}" alt="${data.title}" height="32"
        </a>
    </li>`;

  list.insertAdjacentHTML('beforeend', listItem);
});

const down = document.querySelector('.icon-down');


const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  rewind: true,
  spaceBetween: 20,
  effect: 'slide',
 breakpoints: {
    375: {
      slidesPerView: 4,
    },

    768: {
      slidesPerView: 6,
    },
  },
 
});




swiper.on('reachBeginning', function () {
  down.classList.add('rotate-animation', 'active'); 
  
    setTimeout(function () { 
      down.classList.remove('rotate-animation'); 
    },500);
  
});

down.addEventListener('click', slideUp);

function slideUp() {
  swiper.slideNext();
  
}










swiper.update();