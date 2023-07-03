import { closeMenu } from './header';

export const loginForm = document.getElementById("formLogin");
export const signupForm = document.getElementById("formAuth");
export const authNameEl = document.getElementById("authName");
export const authEmailEl = document.getElementById("authEmail");
export const authPasswordEl = document.getElementById("authPassword");
export const loginEmailEl = document.getElementById("loginEmail");
export const loginPasswordEl = document.getElementById("loginPassword");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
export const modalElem = document.querySelector("[data-modal]");
const closeModalBtn = document.querySelector("[data-modal-close]");

loginBtn.addEventListener("click", () => {
  loginForm.style.marginLeft = "0%";
  signupForm.style.marginLeft = "-50%";
});

signupBtn.addEventListener("click", () => {
  signupForm.style.marginLeft = "0%";
  loginForm.style.marginLeft = "0%";
});

closeModalBtn.addEventListener('click', onModalClose);
document.addEventListener('keydown', onEscPress);

 export function onModalClose() {
  modalElem.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscPress);
  closeMenu();
}

function onEscPress(e) {
  if (e.key === 'Escape') {
    onModalClose();
  }
}