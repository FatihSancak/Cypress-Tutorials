describe('Checkbox', () => {
    it('Checkbox Test', () => {

        cy.visit('http://automationpractice.pl/')
        cy.get('.sf-menu > :nth-child(1)').click()

        // Checkbox Test not.be.checked - Checkbox'ın seçilmediğini kontrol eder.
        cy.get('#layered_category_4').should('not.be.checked')

        // Checkbox'ın seçilmesi işlemi.
        cy.get('#layered_category_4').check()

        // Checkbox Test be.checked - Checkbox'ın seçilmediğini kontrol eder.
        cy.get('#layered_category_4').should('be.checked')


    })
})