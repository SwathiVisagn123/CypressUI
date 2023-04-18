///<reference types="cypress"/>

//I have demonstrated some important cypress queries as from the cypress docs
//https://docs.cypress.io/api/table-of-contents

describe("queries", () => {
  it("cypress queries demo", () => {
    cy.homePageValidation();

    //alias : .as()
    cy.get(".brand").as("logo");
    cy.get("@logo").should("exist");

    //.children()
    //we are verifying if the parent element contains products listed on home page as its children
    cy.get(".products")
      .children()
      .each(($el, list, index) => {
        cy.wrap($el).should("have.class", "product");
      });

    //.contains()
    //check a dom element which contains text
    cy.contains("Top Deals");

    //.document()
    //making an assertion about the document content type
    cy.document().its("contentType").should("eq", "text/html");

    //.index()
    //getting the first listed product by index of a collection
    cy.get(".product").eq(0).should("exist");

    //.filter()
    //filtering the search item from the menu
    cy.get(".container > div").filter(".search").should("exist");

    //.find()
    //find the cart icon which is a descendant of class 'cart'
    cy.get(".cart").find(".cart-icon").should("be.visible");

    //.first()
    //find the first product listed and verify if it has a button to add to cart
    cy.get(".product").first().find("button").should("exist");

    //.hash()
    //get the url hash and assert
    cy.hash().should("eq", "#/");

    //.last()
    //find the last product listed and visible, and verify if it has a button to add to cart
    cy.get(".product:visible").last().find("button").should("exist");

    //.url()
    //validate the current url includes string
    cy.url().should("include", "rahulshetty");

    //.parent()
    //get the parent of a DOM element and assert attribute value
    cy.get(".mobile-search").parent().should("have.class", "search");
  });
});
