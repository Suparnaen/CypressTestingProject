describe('Working with input elements', () => {

    it('Should open the demo website', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation', { timeout: 10000 })
        cy.url().should('include', 'automation')
    })
    it('should fill name', () => {
        //use of alias to define selectors
        cy.get('#name').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('Mary').should('have.value', 'Mary')
    })
    it('should fill mobile number', () => {
        cy.get('#phone').clear()  //use of delay for this field
        cy.get('#phone').type('7789026612', { delay: 50 }).should('have.value', '7789026612')
    })
    it('should fill email address', () => {
        cy.get('#email').clear() //use of delay for this field
        cy.get('#email').type('fake@email.com', { delay: 50 }).should('have.value', 'fake@email.com')
    })
    it('should fill password', () => {
        cy.get('#password').clear()
        cy.get('#password').type('hello112').should('have.value', 'hello112')
    })
    it('should fill address', () => {
        cy.get('#name').clear()
        cy.get('#address').type('123 N Avenue, Alabama 223980').should('have.value', '123 N Avenue, Alabama 223980')
    })

    it('submit the form', () => {
        cy.contains('Submit').click()

    })
})