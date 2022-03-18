describe('Demonstrate use of device viewport', () => {
    //https://docs.cypress.io/api/commands/viewport#Arguments
    it('720p ', () => {
        cy.viewport(1280, 720)
        cy.visit("https://books.toscrape.com/")
        cy.wait(2000)

    })
    it('1080p ', () => {
        cy.viewport(1980, 1080)
        cy.visit("https://books.toscrape.com/")
        cy.wait(2000)

    })
    it('iPhone X ', () => {
        cy.viewport('iphone-x')
        cy.visit("https://books.toscrape.com/")
        cy.wait(2000)

    })
    it('iPad Mini ', () => {

        cy.viewport('ipad-mini')
        cy.visit("https://books.toscrape.com/")
        cy.wait(2000)
    })
    it('Macbook 15 ', () => {
        cy.viewport('macbook-15')
        cy.visit("https://books.toscrape.com/")
        cy.wait(2000)
    })

})