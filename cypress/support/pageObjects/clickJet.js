class ClickJet {
  getCountryField() {
    return cy.get("#autosuggest");
  }

  getCountryPopup() {
    return cy.get("#ui-id-1");
  }

  getRoundTripRadio() {
    return cy.get('input[value="RoundTrip"]');
  }

  getDepartureCity() {
    return cy.get("#ctl00_mainContent_ddl_originStation1", { force: true });
  }
}
export default ClickJet;
