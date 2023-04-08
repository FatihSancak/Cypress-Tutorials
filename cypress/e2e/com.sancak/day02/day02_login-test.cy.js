describe('Case 6 :  Değişkenlerini dışardan alan Login', () => {
    // const eMail = "qwert@gmail.com"
    // const pass = "qwerty"

    const eMail = "username"
    const pass = "password"

    it.skip('Failed Login ', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('#user_login').type(eMail)
        cy.get('#user_password').type(pass)
        cy.get('.btn').click()

        // ALERT fail beklenen durumlarda kullanabiliriz.
        cy.get(".alert").should('include.text', 'Login and/or password are wrong.')
    })

    it('Success Login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('#user_login').type(eMail)
        cy.get('#user_password').type(pass)
        cy.get('.btn').click()

        cy.get('#logout_link').should('have.text', 'Log out')
        cy.url().should('have.text', 'http://zero.webappsecurity.com/bank/account-summary.html')
    
    })
})