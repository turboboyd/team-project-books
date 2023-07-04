export default class ShopListMethods {
  constructor() {
    this.shoppingListKey = 'shoppingList';
  }

  removeFromShoppingList(bookId) {
    const shoppingList = this.getShoppingList();
    const index = shoppingList.findIndex(book => book._id === bookId);
    if (index !== -1) {
      shoppingList.splice(index, 1);
      this.saveShoppingList(shoppingList);
    }
  }

  getShoppingList() {
    const shoppingList =
      JSON.parse(localStorage.getItem(this.shoppingListKey)) || [];
    return shoppingList;
  }

  saveShoppingList(shoppingList) {
    localStorage.setItem(this.shoppingListKey, JSON.stringify(shoppingList));
  }
}
