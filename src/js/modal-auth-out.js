
export const backdropOutEl = document.querySelector('[data-backdrop-out]');
const closeModalBtnOut = document.querySelector('[data-btn-out-close]');
export const btnOutYes = document.querySelector('[data-btn-out-yes]');
const btnOutNo = document.querySelector('[data-btn-out-no]')

function removeClassHidden() {
    backdropOutEl.classList.add('is-hidden');
    document.removeEventListener('keydown', onEscPressModalOut);
}

function onCloseModalOut(e) {
    let currentElement = e.target;
    if (currentElement === backdropOutEl || currentElement === btnOutNo || currentElement === closeModalBtnOut ) {
        removeClassHidden();
    }
    return
}

function onEscPressModalOut(e) {
    if (e.key === 'Escape') {
     backdropOutEl.classList.add('is-hidden')
    }  
}



backdropOutEl.addEventListener('click', onCloseModalOut);
closeModalBtnOut.addEventListener('click', removeClassHidden);
document.addEventListener('keydown', onEscPressModalOut);