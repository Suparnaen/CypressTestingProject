describe('Demonstrate use of local storage', () => {
    it('Should open the demo website', () => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account', { timeout: 10000 })
        cy.url().should('include', 'automationpractice')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage('your item', { log: true })
    })

})