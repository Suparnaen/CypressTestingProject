describe('Demostrate use of Browser actions', () => {

    it('should load the books website', () => {
        cy.visit('https://books.toscrape.com/', { timeout: 10000 })
        cy.url().should('include', 'books')
    })

    it('should click on Travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })

    it('should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })

    it('should click on Poetry category', () => {
        cy.get('a').contains('Poetry').click()
        cy.get('h1').contains('Poetry')
    })
    it('should click on Olio book detail', () => {
        cy.get('a').contains('Olio').click()
        cy.get('h1').contains('Olio')
    })
    it('should have correct price tag', () => {
        cy.get('.price_color').contains('£23.88')
    })
})

