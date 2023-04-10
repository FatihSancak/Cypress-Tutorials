describe('Paylinn Bank',() => {

    it('Paylinn Login Test', () => {
        // Web sitesine git
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        // Kullanıcı adı, şifre gir ve logini tıkla
        cy.get(':nth-child(2) > .input').type('test')
        cy.get(':nth-child(4) > .input').type('test')
        cy.get(':nth-child(5) > .button').click()
        cy.get('.title').should('contain.text','Accounts Overview')
    });
})