describe('WRITE / READ Data to JSON /Text file', () => {

    it('should write data to JSON', () => {
        cy.writeFile('writeFile.json', { name: 'Mike', age: 25 })
    })

    it('should write data to Text file', () => {
        cy.writeFile('textFile.txt', "This is a text file data")
    })
    it('should read and verify data from JSON file', () => {
        cy.readFile('writeFile.json').its('name').should('eq', 'Mike')
    })

    it('should read and verify data from Text file', () => {
        cy.readFile('textFile.txt').should('contain', 'file data')
    })

    //validate browser DOM
    it('should read and verify data from Text file', () => {
        cy.visit('https://example.com/')
        cy.wait(2000)
        cy.document().its('contentType').should('eq', 'text/html')

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
})