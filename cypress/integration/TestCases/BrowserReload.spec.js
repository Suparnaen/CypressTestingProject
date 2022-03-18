describe('Use of Reload function', () => {
    it('Reload books website', () => {
        cy.visit('https://books.toscrape.com/', { timeout: 10000 })
        cy.url().should('include', 'books')
        cy.log('Website before loading')
        cy.reload()
        cy.log('Website after loading')
    })
})