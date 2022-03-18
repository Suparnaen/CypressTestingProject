describe('Demonstrate usage of Select', () => {
    it('should load website with select box', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.title().should('include', 'TestCafe Example Page')
    })

    it('should allow selecting option from text box', () => {
        cy.get('#preferred-interface').select('JavaScript API')
        cy.get('#preferred-interface').should('have.value', 'JavaScript API')

        cy.get('#preferred-interface').select('Both')
        cy.get('#preferred-interface').should('have.value', 'Both')
    })
})