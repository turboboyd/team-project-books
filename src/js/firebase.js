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

import { ofNavMenu } from './header'
import { addUserIdToLocalStorage, addUserDataToDB, getTESTDataUserDB, getOnIncludeDBUser, addIdUserDocumentToLS, getBooksFromDBForRender  } from './firestore-db'
import Notiflix from 'notiflix';


export const firebaseConfig = {
  apiKey: "AIzaSyA5yMbzqmiZ7atqSLoo6p8776_z1r_qRCA",
  authDomain: "my-app-bookchelf-gr6.firebaseapp.com",
  projectId: "my-app-bookchelf-gr6",
  storageBucket: "my-app-bookchelf-gr6.appspot.com",
  messagingSenderId: "730775079305",
  appId: "1:730775079305:web:22a6aa554ab92270bef958"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const authUser = (userName, userEmail, userPassword) => {
  try {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: userName
        }).then(() => {
          addUserIdToLocalStorage(user.uid)
          addUserDataToDB(user.displayName, user.email, user.uid)
          getDataUserDB(user.uid)
          addIdUserDocumentToLS(user.uid)
          location.reload()
          onModalClose();
          signupForm.reset();
          Notiflix.Notify.success('Sign in successful');
        }).catch((error) => {
          console.error('Error while updating profile:', error);
          Notiflix.Notify.failure(
            `Error while updating profile`
          );
        });
      })
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.error('Error while registration profile:', errorCode, errorMessage);
    Notiflix.Notify.failure(
      `Error while registration profile`
    );
  };         
};

const loginUser = (auth, loginUserEmail, loginUserPassword) => {
  try {
    signInWithEmailAndPassword(auth, loginUserEmail, loginUserPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        addUserIdToLocalStorage(user.uid)
        getOnIncludeDBUser(user)
        getBooksFromDBForRender()
        // location.reload()
        onModalClose();
        loginForm.reset();
        Notiflix.Notify.success('Successful login');

      })
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error during login:', errorCode, errorMessage);
    Notiflix.Notify.failure(`Error during login`);
  };
}

function addUserAuth(e) {
    e.preventDefault();
    const authName = authNameEl.value.trim();
    const authEmail = authEmailEl.value.trim();
    const authPassword = authPasswordEl.value;
  authUser(authName, authEmail, authPassword);
  onModalClose()
    setTimeout(() => {
        signupForm.reset();
    }, 1000)
}

function onLoginUser(e) {
    e.preventDefault();
    const loginEmail = loginEmailEl.value;
    const loginPassword = loginPasswordEl.value;
  loginUser(auth, loginEmail, loginPassword);
  onModalClose()
    setTimeout(() => {
        loginForm.reset();
    }, 1000)

}

function onLogoutUser () {
  signOut(auth).then(() => {
    removeHiddenModalOut();
    renderBtnSignupTabDesc();
    ofNavMenu()
    localStorage.clear()
    window.location.href = 'http://localhost:5173/index.html';
    // location.reload()
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


