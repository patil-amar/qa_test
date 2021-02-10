
Cypress.Commands.add("bookASlot", () => {
    cy.get('[data-test-id="logo"]').click()
    const slotInfo = Cypress.$('#deliveryInfoPanel')
    if (slotInfo.text().includes('Collection information')) {
        cy.get('[data-test-id="book-delivery-button"]').should('exist').click()
        cy.get('#collectBookSlotBtn').click()
        cy.get('#mapEnabled ol li .process').eq(0).click()
        cy.get('.deliverySlots tbody tr td').should('exist').not('.unavailable').not('.timeCol').eq(0).click()
        cy.get('.slotPriceText > p').should('exist').then(($collectionText) => {
            expect($collectionText.text()).include('')
        })
    } else {
        cy.get('#trolleySubTotal').click()
        cy.get('.trolleyOptions .checkoutBtn').click()
    }
})