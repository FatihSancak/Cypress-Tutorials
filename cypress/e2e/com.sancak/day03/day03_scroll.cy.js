describe('Scroll Testi',()=>{
    it('Scrool into view',()=>{

        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.wait(3000)

        cy.get('body > :nth-child(6)').scrollIntoView()

        cy.wait(3000)
        cy.get(':nth-child(9) > .container > .justify-content-center').scrollIntoView()
    
        cy.wait(2000)
        cy.get('.container-fluid > .pb-5').scrollIntoView()


        cy.scrollTo('bottom')
        cy.wait(2000)

        cy.scrollTo('top')

        cy.scrollTo(0,1000) // (X,Y) koordinatlarına göre sayfa hareket edecektir. 

        cy.scrollTo(0,-900)
    })
    
})