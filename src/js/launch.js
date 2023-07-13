import BookAPI from './book-api';
import { showLoader, hideLoader } from './loader';
import Notiflix from 'notiflix';
import renderWrapCategories from './bestsellers';
import renderCategories from './filter';
import * as Cache from '../js/support/sesion-storage-api';

const bookApi = new BookAPI();

generatePage();

async function generatePage() {
  try {
    showLoader();
    if (!Cache.getData('categories')) {
      const data = await bookApi.getBooksCategoriesList();
      Cache.setData('categories', data);
      renderCategories(data);
      hideLoader();
    } else {
      const categories = Cache.getData('categories');
      renderCategories(categories);
    }
    if (!Cache.getData('Top-Books')) { //if cache is not empty
      const topBooksData = await bookApi.getTopBooks();
      Cache.setData('Top-Books', topBooksData); // write to cache
      renderWrapCategories(topBooksData);
      hideLoader();
    } else {// Read Cached data
      const topBooks = Cache.getData('Top-Books');
      renderWrapCategories(topBooks);
    }
  } catch (error) {
    console.error('Error:', error);
    hideLoader();
    Notiflix.Notify.failure(
      'Oops! Something went wrong. Please try again later.'
    );
  } finally {
       hideLoader();
  }
}

// function generatePage() {
//   if (!Cache.getData('categories')) {
//     bookApi
//       .getBooksCategoriesList()
//       .then(data => {
//         Cache.setData('categories', data);
//         renderCategories(data);
//       })
//       .then(() => {
//         hideLoader();
//       })
//       .catch(error => {
//
//       });
//   } else  {
//
//   }

//   if (!Cache.getData('Top-Books')) {
//     showLoader();

//     bookApi
//       .getTopBooks()
//       .then(data => {
//         Cache.setData('Top-Books', data);
//         renderWrapCategories(data);
//       })

//       .then(() => {
//         hideLoader();
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         hideLoader();
//         Notiflix.Notify.failure(
//           'Oops! Something went wrong. Please try again later.'
//         );
//       });
//   } else if (Cache.getData('Top-Books')) {
//     const topBooks = Cache.getData('Top-Books');
//     renderWrapCategories(topBooks);
//   }
// }
