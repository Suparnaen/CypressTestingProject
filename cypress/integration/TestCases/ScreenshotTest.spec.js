describe('Demonstrate usage of Screenshot', () => {

    it('full page screenshot', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.title().should('include', 'TestCafe Example Page')
        cy.screenshot({ capture: "fullPage" })
    })

    it('single element screenshot', () => {
        cy.get('header').screenshot()

        cy.get('#populate').screenshot()
    })
})