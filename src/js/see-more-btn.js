import {
  isActiveCategoryBtn,
  generateCategory,
  filterItemArray,
} from './filter';

const containerContent = document.querySelector('.books-render-js');
const homeContainerEl = document.querySelector('.home-container');

containerContent.addEventListener('click', onClickSeeMoreBtn);

function onClickSeeMoreBtn(event) {
  if (event.target.classList.contains('see-more-btn')) {
    const listName = event.target.dataset.active;
    generateCategory(listName);
    searchCategoryName(listName);
    let elementFound = searchCategoryName(listName);
    scrollToElement(elementFound);
    setTimeout(() => {
      scrollToMainTitle();
    }, 0);
  }
}

function searchCategoryName(list_name) {
  let foundElement = null;
  filterItemArray.forEach(element => {
    if (list_name === element.dataset.active) {
      isActiveCategoryBtn(element);
      foundElement = element;
      return;
    }
  });
  scrollToElement(foundElement);
  return foundElement;
}

function scrollToElement(elementToScroll) {
  elementToScroll.scrollIntoView({ block: 'center', behavior: 'auto' });
}

export default function scrollToMainTitle() {
  window.scrollTo({ top: homeContainerEl.offsetTop, behavior: 'smooth' });
}
