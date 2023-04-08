describe('Case 2 : Koala Resort Hotels',() => {

    // siteye git
    // login'e tıkla 

    it('Test 1 ',() => {
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        
        
        //  1. yol Sayfadaki Locater ile Login için CSS kodlarını (#navLogon > .nav-link') bularak tıklama 
        //  cy.get('#navLogon > .nav-link').click()
        
        //  2. yol Sayfadaki görünen yazıya (Log in) tıklama 
        cy.contains('Log in').click()

        // username : manager
        // password : Manager1!

        cy.get('#UserName').type('Manager')
        cy.get('#Password').type('Manager1!')
        cy.get('#btnSubmit').click()
    })

}) 