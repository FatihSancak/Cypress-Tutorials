describe('Case 4 : Navigation',()=>{


    // it.skip yazıldığında bu test bloğunun çalışmayacağı anlamında gelir

    it.skip('Back, Forward, Refresh',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.wait(4000) // 4000 mili saniye = 4 saniye
        cy.contains('Log in').click()

        cy.wait(3000)
        cy.go('back') // cy.go(-1) komutu da aynı işlemi gerçekleştirir
        
        cy.wait(2000)
        cy.go('forward') // cy.go(1) komutu da aynı işlemi gerçekleştirir
        
        cy.reload()

    }),
    it('Zincirleme Navigasyon',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')

        // kod aynı satırın altında da yazılabilir. Bu yazıma Zincirleme Navigasyon denilmiştir
        cy
            .contains('Log in')
            .click()
            .go('back')
            .go('forward')

            cy
            .reload(true)
            .contains('Log in')

    })
})