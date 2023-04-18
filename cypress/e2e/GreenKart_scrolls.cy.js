///<reference types="cypress"/>

import Home from "../support/pageObjects/home";
const home = new Home();

beforeEach(function () {
  cy.fixture("testInputs").then(function (data) {
    this.testdata = data;
  });
});

describe("Scroll And Select", () => {
  it("should scroll to footer and verify footer is visible", function () {
    cy.homePageValidation().then(function () {
      home.getSearchBar().should("exist");
      home.getCartIcon().should("exist").and("be.visible");
      cy.get("footer").scrollIntoView().should("be.visible");
    });
  });

  it("should scroll to bottom of page", function () {
    cy.visit("/").then(function () {
      cy.scrollTo("bottom", { easing: "linear" });
    });
  });
});
