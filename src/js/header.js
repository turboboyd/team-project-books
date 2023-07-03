import { modalElem } from './modal-auth';
import { backdropOutEl } from './modal-auth-out'

const btnOpenFormAuth = document.querySelector('[data-modal-auth-open]');
const btnLogout = document.querySelector('.menu-btn-exit')
const burgerButton = document.querySelector('.burger');
const closeButton = document.querySelector('.header-btn-close');
const menuStart = document.querySelector('.mob-menu-start');
const bodyElement = document.querySelector('body');

function openMenu() {
  burgerButton.classList.add('open');
  closeButton.classList.add('open');
  menuStart.classList.remove('is-hidden');
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
btnLogout.addEventListener('click', onBtnLogout)

window.addEventListener('resize', handleResize);
