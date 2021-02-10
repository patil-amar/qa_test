
Cypress.Commands.add("bookASlot", () => {
    // Only book slot if it's not already booked
    if (!Cypress.$('.book-delivery__date').length) {
        cy.get('[data-test-id="book-delivery-button"]').should('exist').click()
        cy.get('#collectBookSlotBtn').click()
        cy.get('#mapEnabled ol li .process').eq(0).click()
        cy.get('.deliverySlots tbody tr td').should('exist').not('.unavailable').not('.timeCol').eq(0).click()
        cy.get('.slotPriceText > p').should('exist').then(($collectionText) => {
            expect($collectionText.text()).include('')
        })
        cy.get('.nextStep > .button').click()
    }
})

Cypress.Commands.add("goToCheckout", () => {
    cy.get('[data-test-id="logo"]').click()
    cy.get('#trolleySubTotal').click()
    cy.get('.trolleyOptions .checkoutBtn').click()
})