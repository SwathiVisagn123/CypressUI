///<reference types="cypress"/>

import Home from "../support/pageObjects/home";
const home = new Home();
import TopDeals from "../support/pageObjects/topDeals";
const topDeals = new TopDeals();

beforeEach(function () {
  cy.fixture("testInputs").then(function (data) {
    this.testdata = data;
  });
});

describe("Top Deals Verification", () => {
  it("should validate home page components successfully", function () {
    cy.homePageValidation().then(function () {
      cy.contains("Top Deals")
        .invoke("removeAttr", "target")
        .click()
        .then(function () {
          cy.url().should("include", this.testdata.topDealsEndpoint);
          topDeals
            .getPageSize()
            .select(this.testdata.pageSize)
            .should("have.value", this.testdata.pageSize);
        });
      cy.get("#search-field").type("Chocolate");
      topDeals.getProductTable().should("exist");
    });
  });
});
