///<reference types="cypress"/>

import Home from "../support/pageObjects/home";
const home = new Home();
import ClickJet from "../support/pageObjects/clickJet";
const clickJet = new ClickJet();

beforeEach(function () {
  cy.fixture("testInputs").then(function (data) {
    this.testdata = data;
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Flight Deals Scenario 1", () => {
  it("should select country from autosuggested menu and assert successfully", function () {
    cy.homePageValidation().then(function () {
      //Go to Click Jet
      cy.contains("Flight Booking").invoke("removeAttr", "target").click();
      cy.url().should("include", this.testdata.flightDealsEndpoint);
      //Enter Country
      clickJet.getCountryField().type(this.testdata.country);
      //Assert Presence of pop-up window
      clickJet.getCountryPopup().should("exist");
      //click on auto-suggested country
      cy.get(".ui-menu-item>a").each(($el) => {
        if ($el.text() === this.testdata.country) {
          cy.wrap($el).click();
        }
      });
      //assert country value
      clickJet.getCountryField().should("have.value", this.testdata.country);
    });
  });
});
