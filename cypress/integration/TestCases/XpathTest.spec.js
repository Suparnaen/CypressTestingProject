describe('Xpath with Cypress example', () => {

    before(function () {
        cy.visit('http://automationpractice.com/index.php')
    })

    //create xpath in correct xpath expression
    it('should click on element using xpath', () => {
        cy.xpath('//button[@name="submit_search"]').should('be.visible')
        cy.xpath('//input[@id="search_query_top"]').type('girls dressess')
        cy.xpath('//button[@name="submit_search"]').click()

    })
})