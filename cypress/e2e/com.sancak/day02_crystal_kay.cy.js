describe('Case 2',() => {
    it('Test 02',()=>{
       cy.visit('https://qa-environment.koalaresorthotels.com/')
       cy.contains('Log in').click()

       // ASSERT 

       // İşlemin doğruluğunu kontrol etmek için yapılabilecekler: INCLUDE
       // 1. Yöntem
       // URL içinde 'Account/Logon' var mı?
       cy.url().should('include','Account/Logon')

       // 2. Yöntem
       // Hedef sayfanın içinde Locater'i tespit edilmiş olan yazı var mı?  HAVE.TEXT
       cy.get('#navLogon > .nav-link').should('have.text','Log in')

       // 3.Yöntem
       // Hedef sayfasındaki 'Log in' e ait locater var mı görünür mü?   BE.VISIBLE
       cy.get('.row > .mb-4').should('be.visible')
        
    })
    
})