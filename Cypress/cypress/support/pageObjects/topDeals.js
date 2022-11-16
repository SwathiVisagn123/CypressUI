class TopDeals {
  getPageSize() {
    return cy.get("#page-menu");
  }

  getProductTable() {
    return cy.get(".table-bordered");
  }
}
export default TopDeals;
