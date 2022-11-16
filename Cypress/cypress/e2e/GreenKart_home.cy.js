///<reference types="cypress"/>

import Home from "../support/pageObjects/home";
const home = new Home();

beforeEach(function () {
  cy.fixture("testInputs").then(function (data) {
    this.testdata = data;
  });
});

describe("Home Page Verification", () => {
  it("should validate home page components successfully", function () {
    cy.homePageValidation().then(function () {
      home.getSearchBar().should("exist");
      home.getCartIcon().should("exist").and("be.visible");
    });
  });
});
