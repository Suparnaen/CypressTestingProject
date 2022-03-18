describe('Demonstrate scrolling in Cypress', () => {

    it('should load website with select box', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.title().should('include', 'TestCafe Example Page')
    })

    it('should allow scrolling the page up and down', () => {
        cy.wait(4000)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(4000)
        cy.get('#developer-name').scrollIntoView()

    })
})