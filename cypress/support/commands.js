// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Dosya Upload için kullanılacak dependencies
// from : https://www.npmjs.com/package/cypress-file-upload

import 'cypress-file-upload';

// ***********************************************


// Herhangi bir siteye giriş için kullanılabilecek LOGIN komutu
Cypress.Commands.add('login', (site, email, password) => {
        cy.visit(site)
        cy.get('.login').click({ force: true })
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin').click()
})
// ***********************************************

// Amazon Arama Komutu
Cypress.Commands.add('searchInAmazon', (prooductName) => {
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type(prooductName)
        cy.get('#nav-search-submit-button').click()

})

// ***********************************************

// automationpractice.com -> Site kullanımda değil.

// Cypress.Commands.add('login', (email, password) => {
//         cy.visit("http://automationpractice.com/index.php")
//         cy.get('.login').click()
//         cy.get('#email').type(email)
//         cy.get('#paswd').type(password)
//         cy.get('#SubmitLogin > span').click()
// })