describe('Login Test',() => {

    it('New User Add',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/'); 
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // Login Button Click
        cy.get('.oxd-button').click()
        // Admin Menu 
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Add Button Click
        cy.get('.orangehrm-header-container > .oxd-button').click()
        // Save Button Click
        cy.get('.oxd-button--secondary').click()
        
    })
})