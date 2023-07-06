import { userVerification, userVerificationTabDesk } from './firebase'
const bodyElementModalOut = document.querySelector('body');



export const backdropOutEl = document.querySelector('[data-backdrop-out]');
const closeModalBtnOut = document.querySelector('[data-btn-out-close]');
export const btnOutYes = document.querySelector('[data-btn-out-yes]');
const btnOutNo = document.querySelector('[data-btn-out-no]')

export function removeHiddenModalOut() {
    backdropOutEl.classList.add('visually-hidden');
    document.removeEventListener('keydown', onEscPressModalOut);
    bodyElementModalOut.classList.remove('no-scroll');
}

function onCloseModalOut(e) {
    let currentElement = e.target;
    if (currentElement === backdropOutEl || currentElement === btnOutNo || currentElement === closeModalBtnOut ) {
        removeHiddenModalOut();
    }
    return
}

function onEscPressModalOut(e) {
    if (e.key === 'Escape') {
        backdropOutEl.classList.add('visually-hidden')
        bodyElementModalOut.classList.remove('no-scroll');

    }  
}



backdropOutEl.addEventListener('click', onCloseModalOut);
closeModalBtnOut.addEventListener('click', removeHiddenModalOut);
document.addEventListener('keydown', onEscPressModalOut);