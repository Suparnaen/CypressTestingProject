describe('Demonstrate use of keyboard actions', () => {

    it('should be able to press enter keyboard action in search box', () => {
        cy.visit('https://www.google.com/')
        cy.get('input[aria-label="Search"]').should('be.visible')
        cy.get('input[aria-label="Search"]').type('cypress automation github {enter}')
    })
})