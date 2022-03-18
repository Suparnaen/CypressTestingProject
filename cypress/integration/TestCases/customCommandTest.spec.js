describe('custom command test', () => {

    it('Should be able to Login to the application using custom command', () => {
        cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.Login('username', 'password')
    })
})