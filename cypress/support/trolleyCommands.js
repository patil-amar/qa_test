Cypress.Commands.add("emptyTrolley", () => {
    cy.get('.logo > g > path').click()
    cy.get('#trolleySubTotal').should('exist').then(($subtotal) => {
        if ($subtotal.text() !== '£0.00') {
            // cy.get('[data-test-id="header-trolley-total"]').click()
            cy.get('#trolleySubTotal').click()
            cy.get('.trolleyOptions .repressive').click()
            cy.get('[value="Empty trolley"]').click().then(() => {
                cy.get('#trolleySubTotal').should('exist').then(($subtotal) => {
                    expect($subtotal.text()).to.eq('£0.00')
                })
            })

        }

    })
})