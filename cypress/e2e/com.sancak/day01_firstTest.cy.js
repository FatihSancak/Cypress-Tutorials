/// <reference types="cypress" />

describe('My First Test', () => {
// describe('Case İsmi', case için oluşturulacak fonksyionlar () => {})

    it('URL testi', () => {
        // testi tanımlıyoruz @Test gibi düşünülebilir.
        // it('testin ismi',test  için oluşturulacak fonksyionlar () => {})


        // 1. test: URL adresinde google var mı? 

        cy.visit('https://www.google.com')
        cy.url().should('include','google')
        
    })

        // 2. test : istenilen web sitesinin Title (browser başlığında istenilen karakterleri barındırıyor mu? )
        it('Title Testi', () => {
            cy.visit('https://www.google.com')
            cy.title().should('eq','Google')
        })
})



