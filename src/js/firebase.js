// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { loginForm, signupForm, authNameEl, authEmailEl, authPasswordEl, loginEmailEl, loginPasswordEl } from './modal-auth';
import { btnOutYes, removeHiddenModalOut } from './modal-auth-out';
import {
  renderUserLogin,
  renderUserNotLogin,
  renderHeaderTabDescLogin,
  renderHeaderTabDescLogout,
  renderBtnSignupTabDesc,
} from './header';
import { onModalClose } from './modal-auth'; 
import {ofNavMenu} from './header'
import Notiflix from 'notiflix';

const firebaseConfig = {
  apiKey: "AIzaSyA5yMbzqmiZ7atqSLoo6p8776_z1r_qRCA",
  authDomain: "my-app-bookchelf-gr6.firebaseapp.com",
  projectId: "my-app-bookchelf-gr6",
  storageBucket: "my-app-bookchelf-gr6.appspot.com",
  messagingSenderId: "730775079305",
  appId: "1:730775079305:web:22a6aa554ab92270bef958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authUser = (userName, userEmail, userPassword) => {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
        displayName: userName
      }).then(() => {
        Notiflix.Notify.success('Sign in successful');
        
        onModalClose();
        signupForm.reset();
        userVerification();
        userVerificationTabDesk();
      }).catch((error) => {
        console.error('Error while updating profile:', error);
        Notiflix.Notify.failure(
          `Error while updating profile`
        );
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error while registration profile:', errorCode, errorMessage);
              Notiflix.Notify.failure(
                `Error while registration profile`
              );
    });
}

const loginUser = (auth, loginUserEmail, loginUserPassword) => {
      signInWithEmailAndPassword(auth, loginUserEmail, loginUserPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      Notiflix.Notify.success('Successful login');

      onModalClose();
      loginForm.reset();
      userVerification();
      userVerificationTabDesk();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error during login:', errorCode, errorMessage);
      Notiflix.Notify.failure(`Error during login`);
    });
}

function addUserAuth(e) {
    e.preventDefault();
    const authName = authNameEl.value.trim();
    const authEmail = authEmailEl.value.trim();
    const authPassword = authPasswordEl.value;
  authUser(authName, authEmail, authPassword);
}

function onLoginUser(e) {
    e.preventDefault();
    const loginEmail = loginEmailEl.value;
    const loginPassword = loginPasswordEl.value;
  loginUser(auth, loginEmail, loginPassword);
}

function onLogoutUser () {
  signOut(auth).then(() => {
    removeHiddenModalOut();
    renderBtnSignupTabDesc();
    ofNavMenu()
}).catch((error) => {
  console.log('Помилка при LOGOUT');
  Notiflix.Notify.failure(`Error LOGOUT`);
});
}

setTimeout(() => {
  userVerification();
  userVerificationTabDesk();
}, 2000);

export function userVerification() {
  const userActive = auth.currentUser;
  if (userActive !== null) {
    const displayName = userActive.displayName;
    renderUserLogin(displayName);
  } else {
    renderUserNotLogin();
  }
}

export function userVerificationTabDesk() {
  const userActive = auth.currentUser;
  if (userActive !== null) {
    const displayName = userActive.displayName;
    renderHeaderTabDescLogin(displayName);
  } else {
    renderHeaderTabDescLogout();
  }
}

signupForm.addEventListener('submit', addUserAuth);
loginForm.addEventListener('submit', onLoginUser);
btnOutYes.addEventListener('click', onLogoutUser)


