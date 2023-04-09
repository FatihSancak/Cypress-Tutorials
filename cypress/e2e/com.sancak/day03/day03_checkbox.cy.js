
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

    // Çalışacak olan testin sadece bu test olmasını istiyorsanız it.only şeklinde set edin.
    it('Check All Checkboxes', () => {

        cy.visit('http://automationpractice.pl/')
        cy.get('.sf-menu > :nth-child(1)').click()
        // Tüm input türü CHECKBOX olanların hepsini CHECK eder.
        cy.get("input[type=checkbox").check()
        cy.wait(2 * 1000)
        // Tüm input türü CHECKBOX olanların hepsini UNCHECK eder.
        cy.get("input[type=checkbox").uncheck()

    })

    it.only('CheckBox Click', () => {
        cy.visit('http://automationpractice.pl/')
        cy.get('.sf-menu > :nth-child(1)').click()
        cy.get("input[type=checkbox").click({ multiple: true })

        // ASSERT (Yapılan Testin Doğruluğunun Kontrolü)

        // 1
        cy.get("input[type=checkbox").first().should('be.checked')

        // 2 
        cy.get("input[type=checkbox").first().parent().should('have.class',"checked")

        // 3 should('have.id','username')
        // 4 should('have.type','text'")
        // should('have.class','container')

    })

})
