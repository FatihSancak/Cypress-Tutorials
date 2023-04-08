describe('Case 5 : Dropdown', () => {

    it('Dropdown Test', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
        cy
            .get('#dropdown')
            .select('Option 1')
            .should('have-value','1') // Kontrol : Değeri 1 olmalı 

        cy.wait(3000)

        cy
            .get('#dropdown')
            .select('Option 2')
            .should('have-value','2') // Kontrol : Değeri 2 olmalı

    })
})