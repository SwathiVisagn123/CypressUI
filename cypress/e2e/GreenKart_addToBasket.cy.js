///<reference types="cypress"/>

import Home from "../support/pageObjects/home";
const home = new Home();

beforeEach(function () {
  cy.fixture("testInputs").then(function (data) {
    this.testdata = data;
  });
});

describe("Add to Basket", () => {
  it("should validate add to basket feature successfully", function () {
    cy.homePageValidation().then(function () {
      home.getAddToCart().then((array) => {
        //add a random product in basket
        cy.wrap(array[Math.floor(Math.random() * array.length)]).click();
        //validate product added
        home.getAddedNotification().should("be.visible");
      });
    });
  });
});
