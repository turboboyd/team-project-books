import BookAPI from './book-API';
import { showLoader, hideLoader } from './loader';
import Notiflix from 'notiflix';
import renderWrapCategories from './bestsellers';
import renderCategories from './filter';

const bookApi = new BookAPI();

generatePage();

function generatePage() {
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
    })
    .catch(error => {
      console.error('Error:', error);
      hideLoader();
      Notiflix.Notify.failure(
        'Oops! Something went wrong. Please try again later.'
      );
    });
}
