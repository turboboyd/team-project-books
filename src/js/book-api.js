import axios from 'axios';
import Notiflix from 'notiflix';

export default class BookAPI {
  #BASE_URL = 'https://books-backend.p.goit.global/books';

  constructor() {}

  async getBooksCategoriesList() {
    try {
      const respons = await axios.get(`${this.#BASE_URL}/category-list`);
      return respons.data;
    } catch (error) {
      Notiflix.Notify.failure('Oops! Something went wrong! Please try again!');
    }
  }

  async getTopBooks() {
    try {
      const respons = await axios.get(`${this.#BASE_URL}/top-books`);
      return respons.data;
    } catch (error) {
      Notiflix.Notify.failure('Oops! Something went wrong! Please try again!');
    }
  }

  async getSelectedCategoryBooks(category) {
    try {
      const respons = await axios.get(
        `${this.#BASE_URL}/category?category=${category}`
      );
      return respons.data;
    } catch (error) {
      Notiflix.Notify.failure('Oops! Something went wrong! Please try again!');
    }
  }

  async getBookInfo(bookId) {
    try {
      const respons = await axios.get(`${this.#BASE_URL}/${bookId}`);
      return respons.data;
    } catch (error) {
      Notiflix.Notify.failure('Oops! Something went wrong! Please try again!');
    }
  }
}
