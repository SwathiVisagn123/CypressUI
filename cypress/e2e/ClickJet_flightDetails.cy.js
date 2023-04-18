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

describe("Flight Deals Scenario 2", () => {
  it("should select flight details and assert successfully", function () {
    cy.homePageValidation().then(function () {
      //Go to Click Jet
      cy.contains("Flight Booking").invoke("removeAttr", "target").click();
      cy.url().should("include", this.testdata.flightDealsEndpoint);
      //Choose RoundTrip Radio Button
      clickJet.getRoundTripRadio().check({ force: true }).should("be.checked");
      //Choose Departure City
      clickJet.getDepartureCity({ force: true }).select("CJB", { force: true });
    });
  });
});
