import { modalElem } from './modal-auth';
import { backdropOutEl } from './modal-auth-out';

const btnOpenFormAuth = document.querySelector('[data-modal-auth-open]');
const btnLogout = document.querySelector('.menu-btn-exit');
const burgerButton = document.querySelector('.burger');
const closeButton = document.querySelector('.header-btn-close');
const menuStart = document.querySelector('.mob-menu-start');
const bodyElement = document.querySelector('body');
const htmlUserLoginModal =
  '<div class="menu-user-bar"><div class="menu-user-bar-foto"><svg class="menu-user-bar-icon" width="19" height="19"><use href="./images/svg-sprite-den.svg#user-default-icon"></use></svg></div><p class="menu-user-bar-name">Stephen</p></div><nav class="mob-menu-nav"><ul class="mob-menu-list-nav"><li class="mob-menu-item-nav"><a class="mob-menu-link-nav current" href="./index.html">HOME</a></li><li class="mob-menu-item-nav"><a class="mob-menu-link-nav" href="./shopping-list.html">SHOPPING LIST<svg class="header-link-icon" width="20" height="20"><use href="./images/svg-sprite-den.svg#bag"></use></svg></a></li></ul></nav><button class="menu-btn-exit" type="button">Log out<svg class="menu-btn-start-icon" width="20" height="20"><use href="./images/svg-sprite-den.svg#arrow-right-icon"></use></svg></button>';
const htmlUserNotLoginModal =
  '<button data-modal-auth-open class="menu-btn-start" type="button">Sign up<svg class="menu-btn-start-icon" width="20" height="20"><use href="./images/svg-sprite-den.svg#arrow-right-icon"></use></svg></button>';

export function renderUserLogin() {
  menuStart.innerHTML = htmlUserLoginModal;
}

export function renderUserNotLogin() {
  menuStart.innerHTML = htmlUserNotLoginModal;
}

function openMenu() {
  burgerButton.classList.add('open');
  closeButton.classList.add('open');
  menuStart.classList.remove('is-hidden');
  renderUserNotLogin();
  bodyElement.classList.add('no-scroll');
}

export function closeMenu() {
  burgerButton.classList.remove('open');
  closeButton.classList.remove('open');
  menuStart.classList.add('is-hidden');
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

burgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
btnOpenFormAuth.addEventListener('click', onOpenFormAuth);
btnLogout.addEventListener('click', onBtnLogout);

window.addEventListener('resize', handleResize);

// =========== Виклик меню "Виходу з аккаунта" ====================

const headerBtnUser = document.querySelector('.header-btn-user');
const headerBtnUserMenu = document.querySelector('.header-btn-user-menu');

headerBtnUser.addEventListener('click', () => {
  headerBtnUserMenu.classList.toggle('is-hidden');
});

document.addEventListener('click', event => {
  const target = event.target;
  if (
    !headerBtnUser.classList.contains('is-hidden') &&
    !headerBtnUser.contains(target) &&
    !headerBtnUserMenu.contains(target)
  ) {
    headerBtnUserMenu.classList.add('is-hidden');
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    headerBtnUserMenu.classList.add('is-hidden');
  }
});
