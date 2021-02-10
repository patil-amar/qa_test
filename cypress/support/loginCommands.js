Cypress.Commands.add("login", (email, password) => {
    cy.get('[data-testid=username]').type(email)
    cy.get('[data-testid=password]').type(password)
    cy.get('[data-testid=log-in]').click()
    cy.get('[data-test-id="logout-link"]').should('be.visible')
    cy.url().should('contain', 'MyAccount')
})
