describe('Browser Actions', () => {
    it('should load the correct url', () => {
        cy.visit('https://example.com/', { timeout: 10000 })
    })

    it('should check correct url', () => {
        cy.url().should('include', 'example.com')
    })

    it('should wait for 3 seconds', () => {
        cy.wait(3000)
    })

    it('should wait for current element on page', () => {
        cy.get('h1').should('include.text', 'Example Domain')
    })
})