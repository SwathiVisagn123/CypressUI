class Basket {
  getProceedCheckout() {
    return cy.contains("PROCEED TO CHECKOUT");
  }
  getProductCartTable() {
    return cy.get("#productCartTables");
  }

  getPlaceOrder() {
    return cy.contains("Place Order");
  }
}
export default Basket;
