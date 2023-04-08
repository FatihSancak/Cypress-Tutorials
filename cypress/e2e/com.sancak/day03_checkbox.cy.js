describe('Checkbox', () => {
    it('Checking Single Box', () => {

        cy.visit('http://automationpractice.pl/')
        cy.get('.sf-menu > :nth-child(1)').click()

        // Checkbox Test not.be.checked - Checkbox'ın seçilmediğini kontrol eder.
        cy.get('#layered_category_4').should('not.be.checked')

        // Checkbox'ın seçilmesi işlemi.
        cy.get('#layered_category_4').check()

        // Checkbox Test be.checked - Checkbox'ın seçilmediğini kontrol eder.
        cy.get('#layered_category_4').should('be.checked')

        cy.wait(3000)
        // Uncheck 
        cy.get('#layered_category_4').uncheck()

        cy.get('#layered_category_4').should('not.be.checked')
    })

    it.only('Checking All Checkboxes',() => {

        cy.visit('http://automationpractice.pl/')
        cy.get('.sf-menu > :nth-child(1)').click()
        // Tüm input türü CHECKBOX olanların hepsini CHECK eder.
        cy.get("input[type=checkbox").check()
        cy.wait(2*1000)
        cy.get("input[type=checkbox").uncheck()

    })
})