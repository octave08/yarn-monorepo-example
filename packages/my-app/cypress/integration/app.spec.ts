/// <reference types="cypress" />

describe("Cypress Example", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show alert when the button is clicked", () => {
    cy.get("[data-cy=button]").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("clicked");
    });
  });
});
