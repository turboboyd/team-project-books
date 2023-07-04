import { modalElem } from './modal-auth';
import { backdropOutEl } from './modal-auth-out';
import { userVerification, userVerificationTabDesk } from './firebase';

const burgerButton = document.querySelector('.burger');
const closeButton = document.querySelector('.header-btn-close');
const menuStart = document.querySelector('.mob-menu-start');
const bodyElement = document.querySelector('body');

const htmlUserNotLoginModal =
  '<button data-modal-auth-open class="menu-btn-start" type="button">Sign up<svg class="menu-btn-start-icon" width="20" height="20"><use href="./images/svg-sprite-den.svg#arrow-right-icon"></use></svg></button>';

const htmlUserLoginModal =
  '<div class="menu-user-bar"><div class="menu-user-bar-foto"><svg class="menu-user-bar-icon" width="19" height="19"><use href="./images/svg-sprite-den.svg#user-default-icon"></use></svg></div><p class="menu-user-bar-name">Stephen</p></div><nav class="mob-menu-nav"><ul class="mob-menu-list-nav"><li class="mob-menu-item-nav"><a class="mob-menu-link-nav current" href="./index.html">HOME</a></li><li class="mob-menu-item-nav"><a class="mob-menu-link-nav" href="./shopping-list.html">SHOPPING LIST<svg class="header-link-icon" width="20" height="20"><use href="./images/svg-sprite-den.svg#bag"></use></svg></a></li></ul></nav><button class="menu-btn-exit" type="button">Log out<svg class="menu-btn-start-icon" width="20" height="20"><use href="./images/svg-sprite-den.svg#arrow-right-icon"></use></svg></button>';

export function renderUserLogin(displayName) {
  menuStart.innerHTML = htmlUserLoginModal;
  const btnLogout = document.querySelector('.menu-btn-exit');
  btnLogout.addEventListener('click', onBtnLogout);
  setUserName(displayName);
}

export function renderUserNotLogin() {
  menuStart.innerHTML = htmlUserNotLoginModal;
  const btnOpenFormAuth = document.querySelector('[data-modal-auth-open]');
  btnOpenFormAuth.addEventListener('click', onOpenFormAuth);
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
  modalElem.classList.remove('is-hidden');
}

function onBtnLogout() {
  closeMenu();
  backdropOutEl.classList.remove('is-hidden');
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

// =========== Виклик меню "Виходу з аккаунта" ====================

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
const headerNavLinkEl = document.querySelector('.header-nav');
const headerBtnUserMenu = document.querySelector('.header-btn-user-menu');

// export function removeHeaderHidden() {
//   headerNav.classList.remove('is-hidden');
//   headerBtnUser.classList.remove('is-hidden');
//   menuBtnStart.classList.add('is-hidden');
//   console.log('removeHeaderHidden');
// }

// ========== not registration user ====================
function renderBtnSignupTabDesc() {
  const markupSignupTabDesc = `<button data-modal-auth-open class="menu-btn-start-tab" type="button">Sign up<svg class="menu-btn-start-icon" width="20" height="20"><use href="./images/symbol-defs.svg#icon-arrow-right"></use></svg></button>`;
  headerButtonsEl.insertAdjacentHTML('beforeend', markupSignupTabDesc);
}

// ========== yes registration user ====================
function renderNavLinkPageTabDesc() {
  const markupNavLinkPageTabDesc = `<ul class="header-list-nav"><li><a class="header-link-nav current" href="./index.html">HOME</a></li><li><a class="header-link-nav" href="./shopping-list.html">SHOPPING LIST<svg class="header-link-icon" width="20" height="20"><use href="./images/svg-sprite-den.svg#bag"></use></svg></a></li></ul>`;
  headerNavLinkEl.insertAdjacentHTML('beforeend', markupNavLinkPageTabDesc);
}

function renderBtnUserProfTabDesc() {
  const markupUserProfTabDesc = `<button class="header-btn-user" type="button"><div class="btn-container"><div class="header-btn-user-foto"><svg class="header-btn-user-icon" width="19" height="19"><use href="./images/svg-sprite-den.svg#user-default-icon"></use></svg></div><p class="user-name-tablet-desktop">welcome</p><svg class="header-btn-down-icon" width="23" height="26"><use href="./images/svg-sprite-den.svg#user-arrow-down-icon"></use></svg></div></button>`;
  headerBtnUserEl.innerHTML = markupUserProfTabDesc;
  const headerBtnUser = document.querySelector('.header-btn-user');
  headerBtnUser.addEventListener('click', onOpenMenuUser);
  onOpenMenuUser();
}

function renderBtnLogoutTabDesc() {
  const markupLogoutTabDesc = `<button class="header-menu-btn-exit" type="button">Log out<svg class="menu-btn-start-icon" width="20" height="20"><use href="./images/svg-sprite-den.svg#arrow-right-icon"></use></svg></button>`;
  headerBtnUserMenu.innerHTML = markupLogoutTabDesc;
}

function onOpenMenuUser() {
  headerBtnUserMenu.classList.toggle('is-hidden');
}

// ========== render after checking the user in firebase ================
export function renderHeaderTabDescLogin(displayName) {
  renderNavLinkPageTabDesc();
  renderBtnLogoutTabDesc();
  renderBtnUserProfTabDesc();
  setUserNameTabDesc(displayName);
  console.log('renderHeaderTabDescLogin');
}

export function renderHeaderTabDescLogout() {
  renderBtnSignupTabDesc();
}
