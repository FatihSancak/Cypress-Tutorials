// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Dosya Upload için kullanılacak dependencies
// from : https://www.npmjs.com/package/cypress-file-upload
import 'cypress-file-upload';

// ***********************************************
{
        projectId: "w86wqm"
        // The rest of the Cypress config options go here...
      }

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