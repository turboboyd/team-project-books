import BookAPI from './book-api';
import { showLoader, hideLoader } from './loader';
import Notiflix from 'notiflix';
import renderWrapCategories from './bestsellers';
import renderCategories from './filter'

const bookApi = new BookAPI();
const homeContainerEl = document.querySelector('.home-container');

generatePage()

function generatePage() {
  homeContainerEl.classList.add('hidden');
  showLoader();
  Promise.all([
    bookApi.getBooksCategoriesList().then(data => {
      renderCategories(data);
    }),
    bookApi.getTopBooks().then(data => {
      renderWrapCategories(data);
    }),
  ])
    .then(() => {
      hideLoader();
      homeContainerEl.classList.remove('hidden');
    })
    .catch(error => {
      console.error('Error:', error);
      hideLoader();
      homeContainerEl.classList.remove('hidden');
      Notiflix.Notify.failure(
        'Oops! Something went wrong. Please try again later.'
      );
    });
}
