import axios from 'axios';

export class BookAPI {
  #BASE_URL = 'https://books-backend.p.goit.global/books';

  constructor() {
    this.category = '';
    this.id = '';
  }

  async getBooksCategoriesList() {
    return await axios.get(`${this.#BASE_URL}/category-list`);
  }

  async getTopBooks() {
    return await axios.get(`${this.#BASE_URL}/top-books`);
  }

  async getSelectedCategoryBooks() {
    return await axios.get(`${this.#BASE_URL}/category?category=${this.category}`);
  }

	async getBookInfo() {
    return await axios.get(`${this.#BASE_URL}/${this.id}`);
  }
}
