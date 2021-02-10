Cypress.Commands.add("searchAndAddProduct", (searchTerm, productName) => {
    //Empty trolley (if not empty) before adding any item
    cy.emptyTrolley()
    cy.get('#search').type(`${searchTerm}{enter}`, { force: true })
    // cy.get('.search-bar__button > .ln-c-icon').click()
    cy.get('.si__title').should('contain', searchTerm)
    cy.get('section.ln-o-section').eq(1).find('ul li').each(($prdarr, $index, $list) => {
        cy.get('[data-test-id="product-tile-description"]').eq($index).should('exist').then(($description) => {
            if ($description.text() === productName) {
                cy.get('[data-test-id="product-tile-filled-button"]').eq($index).click()
                cy.get('[data-test-id="pt-button-quantity"', { timeout: 60000 }).should('exist').then(($qty) => {
                    expect($qty.text()).to.eq('1')
                })
            }
        })
    })
})