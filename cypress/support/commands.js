// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Herhangi bir siteye giriş için kullanılabilecek LOGIN komutu
Cypress.Commands.add('login', (site, email, password) => {
        cy.visit(site)
        // cy.wait(1*1000)
        cy.get('.login').click({ force: true })
        // cy.get('ol > li').click()


        cy.get('#email').type(email)
        cy.wait(1 * 1000)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin').click()

})

