class Home {
  getLogo() {
    return cy.get(".brand");
  }

  getSearchBar() {
    return cy.get("input[type='search']");
  }

  getCartIcon() {
    return cy.get(".cart-icon");
  }

  getProductName() {
    return cy.get(".product>.product-name");
  }

  getAddToCart() {
    return cy.get(".product:visible>div>button");
  }

  getAddedNotification() {
    return cy.get(".added");
  }
}
export default Home;
