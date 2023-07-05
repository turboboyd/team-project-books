import sprite from '../../images/sprite.svg'

export function arrowLeftMarcup() {
  return `<ul class="nav-pagination-btn pagination-btn-left"><li class="nav-btn-item">
      <button type="button" class="pagination-btn-nav" data-go-to="first-page">
        <svg class="icon-arrow icon-arrow-left" width="18" height="18">
          <use href="${sprite}#icon-angle-up"></use>
        </svg>
        <svg class="icon-arrow icon-arrow-left" width="18" height="18">
          <use href="${sprite}#icon-angle-up"></use>
        </svg>
      </button>
    </li>
    <li class="nav-btn-item">
      <button
        type="button"
        class="pagination-btn-nav"
        data-go-to="previos-page"
      >
        <svg class="icon-arrow icon-arrow-left" width="18" height="18">
          <use href="${sprite}#icon-angle-up"></use>
        </svg>
      </button>
    </li></ul>`;
}

export function arrowRightMarcup() {
  return `<ul class="nav-pagination-btn pagination-btn-right"><li class="nav-btn-item">
      <button type="button" class="pagination-btn-nav" data-go-to="next-page">
        <svg class="icon-arrow icon-arrow-right" width="18" height="18">
          <use href="${sprite}#icon-angle-up"></use>
        </svg>
      </button>
    </li>
    <li class="nav-btn-item">
      <button type="button" class="pagination-btn-nav" data-go-to="last-page">
        <svg class="icon-arrow icon-arrow-right" width="18" height="18">
          <use href="${sprite}#icon-angle-up"></use>
        </svg>
        <svg class="icon-arrow icon-arrow-right" width="18" height="18">
          <use href="${sprite}#icon-angle-up"></use>
        </svg>
      </button>
    </li></ul>`;
}
