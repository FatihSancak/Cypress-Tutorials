describe('Viewports', () => {

    it('Iphone8 ', () => {
        cy.visit('https://www.amazon.com')
        cy.viewport('iphone-8')
    })

    it('iMac ', () => {
        cy.visit('https://www.amazon.com')
        cy.viewport('macbook-16')
    })

    it.only('Custom ', () => {
        cy.visit('https://www.amazon.com')
        cy.viewport(550,750)
    })
})