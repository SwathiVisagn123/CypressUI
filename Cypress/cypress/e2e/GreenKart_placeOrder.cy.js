///<reference types="cypress"/>

import Home from "../support/pageObjects/home";
import Basket from "../support/pageObjects/basket";
import PlaceOrder from "../support/pageObjects/placeOrder";
const home = new Home();
const basket = new Basket();
const placeOrder = new PlaceOrder();

beforeEach(function () {
  cy.fixture("testInputs").then(function (data) {
    this.testdata = data;
  });
});

describe("Placing Order Validation", () => {
  it("should verify and validate order placement process", function () {
    cy.homePageValidation().then(function () {
      home.getAddToCart().then((array) => {
        //add a random product in basket
        cy.wrap(array[Math.floor(Math.random() * array.length)]).click();
      });
      //validate product added
      home.getAddedNotification().should("be.visible");
      //click on cart
      cy.clickOnElement(home.getCartIcon);
      cy.clickOnElement(basket.getProceedCheckout);
      //validate cart components
      basket.getProductCartTable().should("exist");
      basket.getPlaceOrder().should("exist").click();
      //choose order details
      placeOrder.getCountryDrop().select("India");
      placeOrder
        .getAgreeCheckBox()
        .should("not.be.checked")
        .check()
        .should("be.checked");
      //proceed order placement
      placeOrder.getProceedButton().click();
      //assert presence of order confirmation
      placeOrder.getOrderConfirmation().should("exist");
      //click on Home to redirect to homepage
      cy.get("a").should("have.text", "Home").click();
      //assert home page url
      cy.url().should("include", this.testdata.baseUrl);
    });
  });
});
