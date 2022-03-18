describe('Demonstrate use of assertions', () => {

    it('Should open the demo website and validate page title', () => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account', { timeout: 10000 })
        cy.url().should('include', 'automationpractice')
        cy.title().should('include', 'Login - My Store')
    })

    it('Should give error when user have not signed up', () => {
        //cy.contains('Sign in').click()
        cy.get('#SubmitLogin').click()
        //cy.wait(4000)
        //cy.get('.alert-danger').should('be.visible').contains('An email address required')//this works
        cy.get('.alert-danger').should('be.visible').and('contain', 'An email address required')//other way of chaining

    })

})