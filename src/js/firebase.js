// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { loginForm, signupForm, authNameEl, authEmailEl, authPasswordEl, loginEmailEl, loginPasswordEl } from './modal-auth';

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
const auth = getAuth();

const authUser = (userName, userEmail, userPassword) => {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      user.updateProfile({
        displayName: userName
      }).then(() => {
        console.log('Sign in successful');
        
      }).catch((error) => {
        console.error('Error while updating profile:', error);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error while registration profile:', errorCode, errorMessage);
    });
}

const loginUser = (auth, loginUserEmail, loginUserPassword) => {
      signInWithEmailAndPassword(auth, loginUserEmail, loginUserPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Successful login');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error during login:', errorCode, errorMessage);
    });
}

function addUserAuth(e) {
    e.preventDefault();
    console.log('Лог до реєстрації');
    const authName = authNameEl.value;
    const authEmail = authEmailEl.value;
    const authPassword = authPasswordEl.value;
    authUser(authName, authEmail, authPassword);
    console.log('Лог після реєстрації');

}

function onLoginUser(e) {
    e.preventDefault();
    const loginEmail = loginEmailEl.value;
    const loginPassword = loginPasswordEl.value;
    loginUser(auth, loginEmail, loginPassword);
}

signupForm.addEventListener('submit', addUserAuth);
loginForm.addEventListener('submit', onLoginUser)


