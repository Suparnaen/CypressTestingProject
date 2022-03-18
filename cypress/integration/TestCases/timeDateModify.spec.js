describe('Demonstrate use of date and time in Cypress', () => {

    it('should override the current time', () => {

        const date = new Date(2022, 3, 17).getTime() //returns timestamp
        cy.clock(date)
        cy.log(Date)
    })
    it('Should open the demo website', () => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account', { timeout: 10000 })
        cy.url().should('include', 'automationpractice')
    })
})