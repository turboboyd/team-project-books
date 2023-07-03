export default class Cleaning {
  
  cleaningBooks() {
    const containerContent = document.querySelector('.books-render-js');
    containerContent.innerHTML = '';
  }

  cleaningTitle() {
    const homeContainerEl = document.querySelector('.home-container');
    const titleElements = homeContainerEl.getElementsByClassName('main-title');
    for (let i = titleElements.length - 1; i >= 0; i--) {
      const titleElement = titleElements[i];
      titleElement.parentNode.removeChild(titleElement);
    }
  }
}
