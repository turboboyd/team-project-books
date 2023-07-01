const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const modalElem = document.querySelector("[data-modal]");
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
modalElem.addEventListener('keydown', onEscPress);

closeModalBtn.addEventListener('click', onModalClose);
document.addEventListener('keydown', onEscPress);

function onModalClose() {
    modalElem.classList.add('is-hidden');
document.removeEventListener('keydown', onEscPress);
    
}

function onEscPress(e) {
  if (e.key === 'Escape') {
    onModalClose();
  }
}

      