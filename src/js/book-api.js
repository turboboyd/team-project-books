import axios from 'axios';

export default class BookAPI {
  #BASE_URL = 'https://books-backend.p.goit.global/books';

  constructor() {
    this.category = '';
    this.id = '';
  }

  async getBooksCategoriesList() {
    const respons = await axios.get(`${this.#BASE_URL}/category-list`);
    return respons.data

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
