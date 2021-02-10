Cypress.Commands.add("acceptAllCookies", () => {
    cy.get('#onetrust-accept-btn-handler').should('be.visible').click()
})