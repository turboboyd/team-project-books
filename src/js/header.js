import { modalElem } from './modal-auth';
import { backdropOutEl } from './modal-auth-out';

const burgerButton = document.querySelector('.burger');
const closeButton = document.querySelector('.header-btn-close');
const menuStart = document.querySelector('.mob-menu-start');
const bodyElement = document.querySelector('body');

const htmlUserNotLoginModal =
  '<button data-modal-auth-open class="menu-btn-start" type="button">Sign up<svg class="menu-btn-start-icon" width="20" height="20"><use href="./images/svg-sprite-den.svg#arrow-right-icon"></use></svg></button>';

export function renderUserLogin() {
  const htmlUserLoginModal =
  '<div class="menu-user-bar"><div class="menu-user-bar-foto"><svg class="menu-user-bar-icon" width="19" height="19"><use href="./images/svg-sprite-den.svg#user-default-icon"></use></svg></div><p class="menu-user-bar-name">Stephen</p></div><nav class="mob-menu-nav"><ul class="mob-menu-list-nav"><li class="mob-menu-item-nav"><a class="mob-menu-link-nav current" href="./index.html">HOME</a></li><li class="mob-menu-item-nav"><a class="mob-menu-link-nav" href="./shopping-list.html">SHOPPING LIST<svg class="header-link-icon" width="20" height="20"><use href="./images/svg-sprite-den.svg#bag"></use></svg></a></li></ul></nav><button class="menu-btn-exit" type="button">Log out<svg class="menu-btn-start-icon" width="20" height="20"><use href="./images/svg-sprite-den.svg#arrow-right-icon"></use></svg></button>';
  menuStart.innerHTML = htmlUserLoginModal;
  const btnLogout = document.querySelector('.menu-btn-exit');
  btnLogout.addEventListener('click', onBtnLogout);
  console.log('Test LOGIN');
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

function setUserName(userName) {
  const userActive = document.querySelector('.menu-user-bar-name');
  userActive.textContent = userName
}

burgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

window.addEventListener('resize', handleResize);
