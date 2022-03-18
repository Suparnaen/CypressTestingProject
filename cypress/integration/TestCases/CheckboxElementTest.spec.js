describe('Demonstrate use of radio element', () => {
    it('Should open the demo website', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation', { timeout: 10000 })
        cy.url().should('include', 'automation')
    })

    // it('SIMPLE CHECK EXAMPLE - should click on checkbox', () => {
    //     cy.get('#monday').click()  //check
    //     cy.get('#tuesday').click() //check
    //     cy.get('#wednesday').click() //check
    //     cy.get('#thursday').click() //check
    //     cy.wait(4000)
    //     cy.get('#monday').click()//uncheck
    //     cy.get('#tuesday').click()//uncheck
    // })

    it('Check first checkbox', () => {
        // .check() accepts an array of values--this does not work as not able to find element
        cy.get('[type="checkbox"]').first().check()
    })

    it('Check checkbox based on value', () => {
        // .check() accepts an array of values--this does not work as not able to find element
        cy.get('input[type="checkbox"]').contains('cucumber').should('be.visible')
    })


})