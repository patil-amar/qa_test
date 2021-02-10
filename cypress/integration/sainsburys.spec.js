/// <reference types="Cypress" />

describe('Product checkout', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('users').then(function (userData) {
            this.userData = userData
        })
    })

    it('Should get to checkout with some products', function () {
        cy.acceptAllCookies()

        cy.contains('Groceries account').should(($el) => {
            const hrefLink = $el.prop('href')
            expect(hrefLink).include('webapp/wcs/stores/servlet/LogonView?')
        })
            .click({ force: true })

        cy.acceptAllCookies()
        cy.login(this.userData.email, this.userData.password)
        cy.searchAndAddProduct('tomatoes', 'Napolina Chopped Tomatoes 400g')
        cy.bookASlot()
        cy.goToCheckout()
    })
})