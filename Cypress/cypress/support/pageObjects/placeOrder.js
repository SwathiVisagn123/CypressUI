class PlaceOrder {
  getCountryDrop() {
    return cy.get("select[style]");
  }

  getAgreeCheckBox() {
    return cy.get('input[type="checkbox"]');
  }

  getOrderConfirmation() {
    return cy.contains(
      "Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!"
    );
  }

  getProceedButton() {
    return cy.contains("Proceed");
  }
}
export default PlaceOrder;
