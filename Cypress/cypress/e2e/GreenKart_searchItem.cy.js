///<reference types="cypress"/>

import Home from "../support/pageObjects/home";
const home = new Home();

beforeEach(function () {
  cy.fixture("testInputs").then(function (data) {
    this.testdata = data;
  });
});

describe("Search Items", () => {
  it("should validate search feature filters expected results", function () {
    cy.homePageValidation().then(function () {
      cy.url().should("include", this.testdata.baseUrl);
      home.getSearchBar().type(this.testdata.searchInput);
      //to avoid the glitch where products get delayed to load
      cy.wait(1000);
      home.getProductName().each(($el, index) => {
        cy.wrap($el.text()).should("include", this.testdata.searchInput);
      });
    });
  });
});
