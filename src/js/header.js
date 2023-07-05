import { modalElem } from './modal-auth';
import { backdropOutEl } from './modal-auth-out';
import { userVerification, userVerificationTabDesk } from './firebase';
import mobileBg from '../images/mobile-menu/mobile-menu-bg.png';
import mobileBgx2 from '../images/mobile-menu/mobile-menu-bg-2x.png';
import sprite from '../images/sprite.svg'

const burgerButton = document.querySelector('.burger');
const closeButton = document.querySelector('.header-btn-close');
const menuStart = document.querySelector('.mob-menu-start');
const bodyElement = document.querySelector('body');

const htmlUserNotLoginModal = `
  <button data-modal-auth-open class="menu-btn-start" type="button">
    Sign up<svg class="menu-btn-start-icon" width="20" height="20">
      <use href="${sprite}#arrow-right-icon"></use>
    </svg>
  </button>
  <div class="mobile-bg-wrapper">
  <picture class="mobile-bg primary">
    <source
      srcset=""
      type="image/webp"
    />
    <source
      srcset="${mobileBgx2}"
      type="image/png"
    />

    <img
      src="${mobileBg}"
      alt="books"
      style="width: 100%"
    />
  </picture>

  <picture class="mobile-bg secondary">
    <source
      srcset=""
      type="image/webp"
    />
    <source
      srcset="${mobileBg}"
      type="image/png"
    />

    <img
      src="${mobileBg}"
      alt="books"
      style="width: 100%"
    />
  </picture>
</div>
  `;
const htmlUserLoginModal = `  <div class="menu-user-bar"><div class="menu-user-bar-foto"><svg class="menu-user-bar-icon" width="19" height="19"><use href="${sprite}#user-default-icon"></use></svg></div><p class="menu-user-bar-name">Stephen</p></div><nav class="mob-menu-nav"><ul class="mob-menu-list-nav"><li class="mob-menu-item-nav"><a id="home" class="mob-menu-link-nav" href="./index.html">HOME</a></li><li class="mob-menu-item-nav"><a id="shop" class="mob-menu-link-nav" href="./shopping-list.html">SHOPPING LIST<svg class="header-link-icon" width="20" height="20"><use href="${sprite}#bag"></use></svg></a></li></ul></nav><button class="menu-btn-exit" type="button">Log out<svg class="menu-btn-start-icon" width="20" height="20"><use href="${sprite}#arrow-right-icon"></use></svg></button>  <div class="mobile-bg-wrapper">
  <picture class="mobile-bg primary">
    <source
      srcset=""
      type="image/webp"
    />
    <source
      srcset="${mobileBgx2}"
      type="image/png"
    />

    <img
      src="${mobileBg}"
      alt="books"
      style="width: 100%"
    />
  </picture>

  <picture class="mobile-bg secondary">
    <source
      srcset=""
      type="image/webp"
    />
    <source
      srcset="${mobileBg}"
      type="image/png"
    />

    <img
      src="${mobileBg}"
      alt="books"
      style="width: 100%"
    />
  </picture>
</div>
`;
export function renderUserLogin(displayName) {
  menuStart.innerHTML = htmlUserLoginModal;
  const btnLogout = document.querySelector('.menu-btn-exit');
  btnLogout.addEventListener('click', onBtnLogout);
  setUserName(displayName);

  const linkPageHomeEl = document.querySelector('#home');
  const linkPageShopEl = document.querySelector('#shop');
  currentPage(linkPageHomeEl, linkPageShopEl);
}

function currentPage(linkPageHomeEl, linkPageShopEl) {
  const currentPageUrl = window.location.pathname;
  const homeHref = '/team-project-books/index.html';
  const shopHref = '/team-project-books/shopping-list.html';
  if (currentPageUrl === homeHref) {
    linkPageHomeEl.classList.add('current');
  }
  if (currentPageUrl === shopHref) {
    linkPageShopEl.classList.add('current');
  }
}

export function renderUserNotLogin() {
  menuStart.innerHTML = htmlUserNotLoginModal;
  const btnOpenForm = document.querySelector('[data-modal-auth-open]');
  btnOpenForm.addEventListener('click', onOpenFormAuth);
}

function openMenu() {
  burgerButton.classList.add('open');
  closeButton.classList.add('open');
  menuStart.classList.remove('is-hidden');
  menuStart.classList.add('is-active-h');
  bodyElement.classList.add('no-scroll');
  userVerification();
}

export function closeMenu() {
  burgerButton.classList.remove('open');
  closeButton.classList.remove('open');
  menuStart.classList.remove('is-active-h');
  // menuStart.classList.add('is-hidden');
  bodyElement.classList.remove('no-scroll');
}

function handleResize() {
  if (window.innerWidth >= 768) {
    closeMenu();
  }
}

function onOpenFormAuth() {
  modalElem.classList.remove('is-hidden-auth');
  closeMenu();
}

function onBtnLogout() {
  closeMenu();
  backdropOutEl.classList.remove('is-hidden-b');
  bodyElement.classList.add('no-scroll');
}

function setUserName(displayName) {
  const userActive = document.querySelector('.menu-user-bar-name');
  userActive.textContent = displayName;
}

function setUserNameTabDesc(displayName) {
  const userNameTabletDesktop = document.querySelector(
    '.user-name-tablet-desktop'
  );
  userNameTabletDesktop.textContent = displayName;
}

burgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

window.addEventListener('resize', handleResize);

// =========== Виклик меню "Виходу з аккаунта" ===================

// headerBtnUser.addEventListener('click', () => {
//   headerBtnUserMenu.classList.toggle('is-hidden');
// });

// document.addEventListener('click', event => {
//   const target = event.target;
//   if (
//     !headerBtnUser.classList.contains('is-hidden') &&
//     !headerBtnUser.contains(target) &&
//     !headerBtnUserMenu.contains(target)
//   ) {
//     headerBtnUserMenu.classList.add('is-hidden');
//   }
// });

// document.addEventListener('keydown', event => {
//   if (event.key === 'Escape') {
//     headerBtnUserMenu.classList.add('is-hidden');
//   }
// });

// =========== Remove is-hidden ====================

// const headerNav = document.querySelector('.header-list-nav');
// const menuBtnStart = document.querySelector('.menu-btn-start-tab');
const headerButtonsEl = document.querySelector('.header-buttons');
const headerBtnUserEl = document.querySelector('.header-btn-user-wrap');
const headerNavLinkEl = document.querySelector('.header-list-nav');

// const headerBtnUserMenu = document.querySelector('.header-btn-user-menu');

// export function removeHeaderHidden() {
//   headerNav.classList.remove('is-hidden');
//   headerBtnUser.classList.remove('is-hidden');
//   menuBtnStart.classList.add('is-hidden');
//   console.log('removeHeaderHidden');
// }

// ========== not registration user ====================
export function renderBtnSignupTabDesc() {
  const markupSignupTabDesc = `<button data-auth-open class="menu-btn-start-tab" type="button">Sign up<svg class="menu-btn-start-icon" width="20" height="20"><use href="${sprite}#icon-arrow-right"></use></svg></button>`;
  headerBtnUserEl.innerHTML = markupSignupTabDesc;
  const btnOpenFormAuth = document.querySelector('[data-auth-open]');
  btnOpenFormAuth.addEventListener('click', onOpenFormAuth);
}

// ========== yes registration user ====================
// function renderNavLinkPageTabDesc() {
//   const markupNavLinkPageTabDesc = `<ul class="header-list-nav"><li><a class="header-link-nav current" href="./index.html">HOME</a></li><li><a class="header-link-nav" href="./shopping-list.html">SHOPPING LIST<svg class="header-link-icon" width="20" height="20"><use href="${sprite}#bag"></use></svg></a></li></ul>`;
//   headerNavLinkEl.insertAdjacentHTML('beforeend', markupNavLinkPageTabDesc)
// }

function onEscCloseLogout(e) {
  const headerBtnUserMenu = document.querySelector('.header-btn-user-menu');

  if (e.code === 'Escape') {
    closeLogout(headerBtnUserMenu);
  }
}

function onClickCloseLogout(e) {
  const headerBtnUserWrap = document.querySelector('.header-btn-user-wrap ');
  const headerBtnUserMenu = document.querySelector('.header-btn-user-menu');
  const targetClick = e.target;

  if (!headerBtnUserWrap.contains(targetClick)) {
    closeLogout(headerBtnUserMenu);
  }
}

function closeLogout(headerBtnUserMenu) {
  headerBtnUserMenu.classList.add('is-hidden');
}

function renderBtnUserProfTabDesc() {
  const markupUserProfTabDesc = `<button class="header-btn-user" type="button"><div class="btn-container"><div class="header-btn-user-foto"><svg class="header-btn-user-icon" width="19" height="19"><use href="${sprite}#user-default-icon"></use></svg></div><p class="user-name-tablet-desktop">welcome</p><svg class="header-btn-down-icon" width="23" height="26"><use href="${sprite}#user-arrow-down-icon"></use></svg></div></button><div class="header-btn-user-menu is-hidden"><button class="header-menu-btn-exit" type="button">Log out<svg class="menu-btn-start-icon" width="20" height="20"><use href="${sprite}#arrow-right-icon"></use></svg></button></div>`;
  headerBtnUserEl.innerHTML = markupUserProfTabDesc;
  const headerBtnUser = document.querySelector('.header-btn-user');
  const headerBtnUserWrap = document.querySelector('.header-btn-user-wrap ');

  headerBtnUser.addEventListener('click', onOpenMenuUser);
  headerBtnUserWrap.addEventListener('keydown', onEscCloseLogout);
  document.addEventListener('click', onClickCloseLogout);
}

// function renderBtnLogoutTabDesc() {
//   const markupLogoutTabDesc = `<button class="header-menu-btn-exit" type="button">Log out<svg class="menu-btn-start-icon" width="20" height="20"><use href="${sprite}#arrow-right-icon"></use></svg></button>`;
//   headerBtnUserMenu.innerHTML = markupLogoutTabDesc;
// }

function onOpenMenuUser() {
  const headerBtnUserMenu = document.querySelector('.header-btn-user-menu');
  headerBtnUserMenu.classList.remove('is-hidden');
  const btnLogout = document.querySelector('.header-menu-btn-exit');
  btnLogout.addEventListener('click', onBtnLogout);
}

// ========== render after checking the user in firebase ================
export function renderHeaderTabDescLogin(displayName) {
  // renderNavLinkPageTabDesc();
  // renderBtnLogoutTabDesc();
  onNavMenu();
  renderBtnUserProfTabDesc();
  setUserNameTabDesc(displayName);
}

export function renderHeaderTabDescLogout() {
  renderBtnSignupTabDesc();
}

function onNavMenu() {
  headerNavLinkEl.classList.remove('is-hidden');
}
export function ofNavMenu() {
  headerNavLinkEl.classList.add('is-hidden');
}
