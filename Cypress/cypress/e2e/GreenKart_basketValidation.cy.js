///<reference types="cypress"/>

import Home from "../support/pageObjects/home";
import Basket from "../support/pageObjects/basket";
const home = new Home();
const basket = new Basket();

beforeEach(function () {
  cy.fixture("testInputs").then(function (data) {
    this.testdata = data;
  });
});

describe("Basket Validation", () => {
  it("should validate information in basket successfully", function () {
    cy.homePageValidation().then(function () {
      home.getAddToCart().then((array) => {
        //add a random product in basket
        cy.wrap(array[Math.floor(Math.random() * array.length)]).click();
        //validate product added
        home.getAddedNotification().should("be.visible");
        //click on cart
        cy.clickOnElement(home.getCartIcon);
        cy.clickOnElement(basket.getProceedCheckout);
        //validate cart components
        basket.getProductCartTable().should("exist");
        basket.getPlaceOrder().should("exist");
      });
    });
  });
});
