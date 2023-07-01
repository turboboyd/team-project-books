import { modalElem } from './modal-auth'

const btnOpenFormAuth = document.querySelector('[data-modal-auth-open]')
const burgerButton = document.querySelector('.burger');
const closeButton = document.querySelector('.header-btn-close');
const menuStart = document.querySelector('.mob-menu-start');
const headerContainer = document.querySelector('.header-container');
const bodyElement = document.querySelector('body');

function openMenu() {
  burgerButton.classList.add('open');
  closeButton.classList.add('open');
  menuStart.classList.add('open');
  headerContainer.classList.add('open');
  bodyElement.classList.add('no-scroll');
}

export function closeMenu() {
  burgerButton.classList.remove('open');
  closeButton.classList.remove('open');
  menuStart.classList.remove('open');
  headerContainer.classList.remove('open');
  bodyElement.classList.remove('no-scroll');
}

function handleResize() {
  if (window.innerWidth >= 768) {
    closeMenu();
  }
}

function onOpenFormAuth() {
  modalElem.classList.remove('is-hidden')
}

burgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
btnOpenFormAuth.addEventListener('click', onOpenFormAuth)

window.addEventListener('resize', handleResize);
