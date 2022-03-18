describe('Demostrate use of Logs to log user defined messages', () => {

    it('should load the books website', () => {
        cy.visit('https://books.toscrape.com/', { timeout: 10000 })
        cy.url().should('include', 'books')
        cy.log('Website loaded')
    })
})