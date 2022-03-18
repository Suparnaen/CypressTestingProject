describe('Use of data from fixture', () => {


    it('Should open the demo website', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation', { timeout: 10000 })
        cy.url().should('include', 'automation')

        cy.fixture('user').then(user => {
            const username = user.name
            const userphone = user.phone
            const useremail = user.email
            const userpassword = user.password
            const useraddress = user.address

            cy.get('#name').as('username')
            cy.get('@username').clear()
            cy.get('@username').type(username).should('have.value', username)
            cy.get('#phone').clear()  //use of delay for this field
            cy.get('#phone').type(userphone).should('have.value', userphone)
            cy.get('#email').clear() //use of delay for this field
            cy.get('#email').type(useremail).should('have.value', useremail)
            cy.get('#password').clear()
            cy.get('#password').type(userpassword).should('have.value', userpassword)
            cy.get('#name').clear()
            cy.get('#address').type(useraddress).should('have.value', useraddress)
            cy.contains('Submit').click()
        })
    })

})