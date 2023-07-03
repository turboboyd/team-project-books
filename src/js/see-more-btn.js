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
    // scrollToMainTitle();
    scrollToElement(elementFound);
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
  return foundElement;
}

function scrollToElement(elementToScroll) {
  elementToScroll.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

export default function scrollToMainTitle() {
  window.scrollTo({ top: homeContainerEl.offsetTop, behavior: 'smooth' });
}
