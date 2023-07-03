import { currentPage } from './pagination';

export const btnListPaginationEl = document.querySelector('.pagination-list');
export let countPerPage = 3;

if (isMobile()) {
  countPerPage = 4;
}

export function isMobile() {
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth < 768;
  return isMobile;
}

export function addClassListToCurrentBtn(page) {
  const btnListPaginationEl = document.querySelector('.pagination-list');
  if (
    btnListPaginationEl &&
    document.querySelector('.current-btn-pagination')
  ) {
    const previousPage = document.querySelector('.current-btn-pagination');
    previousPage.classList.remove('current-btn-pagination');
  }
  if (btnListPaginationEl && btnListPaginationEl.childElementCount !== 0) {
    const currentBtn =
      btnListPaginationEl.children[page - 1].querySelector('button');
    if (currentBtn) {
      currentBtn.classList.add('current-btn-pagination');
    }
  }
}

export function renderBtnList(data) {
  const pageCount = Math.ceil(data.length / countPerPage);
  const arrBtnPage = [];
  for (let i = 1; i <= pageCount; i += 1) {
    const btnEl = `<li class="pagination-item"><button type="button" class="pagination-btn">${i}</button></li>`;
    arrBtnPage.push(btnEl);
  }
  //   const arrAllBtn = [...createArrowLeftBtnPagination(), ...arrBtnPage];
  //   console.log('arrAllBtn', arrAllBtn);
  const marcupBtn = arrBtnPage.join('');
  //   console.log('arrAllBtn', arrAllBtn);
  btnListPaginationEl.innerHTML = marcupBtn;
}

// function createArrowLeftBtnPagination() {
//   return [
//     `<button type="button" class="pagination-btn" data-go-to="leftSomePage"><svg class="icon-arrow icon-arrow-left" width="18" height="18">
//           <use href="./images/sprite.svg#icon-arrow-right"></use>
//         </svg><svg class="icon-arrow icon-arrow-left" width="18" height="18">
//           <use href="./images/sprite.svg#icon-arrow-right"></use>
//         </svg></button>,
//         <button type="button"class="pagination-btn" data-go-to="leftOnePage"><svg class="icon-arrow icon-arrow-left" width="18" height="18">
//           <use href="./images/sprite.svg#icon-arrow-right"></use>
//         </svg></button>`,
//   ];
// }

// function createArrowRightBtnPagination() {
//   return `<button type="button" class="pagination-btn" data-go-to="rightOnePage"><svg class="icon-arrow icon-arrow-right" width="18" height="18">
//           <use href="./images/sprite.svg#icon-arrow-right"></use>
//         </svg></button><button type="button" class="pagination-btn" data-go-to="rightSomePage"><svg class="icon-arrow icon-arrow-right" width="18" height="18">
//           <use href="./images/sprite.svg#icon-arrow-right"></use>
//         </svg><svg class="icon-arrow icon-arrow-right" width="18" height="18">
//           <use href="./images/sprite.svg#icon-arrow-right"></use>
//         </svg></button>`
// }
