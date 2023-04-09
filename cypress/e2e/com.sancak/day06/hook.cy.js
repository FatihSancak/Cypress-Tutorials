describe('Hooks', () => {

    before(() => {
        console.log('BEFORe METHOD')
    })

    beforeEach(() => {
        console.log('BEFORE METHOD')
        cy.visit('https://qa-environment.koalaresorthotels.com/')

    })

    after(() => {
        console.log('AFTER METHOD')
    })

    afterEach(() => {
        console.log('AFTEREACH METHOD')
        cy.url().should('include','Account/Logon')

    });

    it('', () => {
        cy.contains('Log in').click()
    });
})
