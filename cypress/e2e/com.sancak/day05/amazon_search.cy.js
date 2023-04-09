describe(' Search', () => {
    const site = 'http://www.amazon.com'
    it('Amazon Search Test', () => {
        cy.visit(site)

    cy.get('#twotabsearchtextbox').type('imac')
    cy.get('#nav-search-submit-button').click()

    });
    it.only('Search in Amazon with Command', () => {
        
        let product

        product = 'dell'
        cy.searchInAmazon(product)
        cy.get('.a-color-state').should('have.text','"'+product+'"')

        
        product = 'iphone'
        cy.searchInAmazon(product)
        cy.get('.a-color-state').should('include.text','"'+product+'"')


        product = 'xbox'
        cy.searchInAmazon(product)
        cy.url().should('include',product)

    });


  
});