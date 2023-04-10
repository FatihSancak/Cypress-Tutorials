
describe('Custom Command', () => {
    const site = 'http://automationpractice.pl/index.php'
    it('Default Login Procedure', () => {
        cy.visit(site)
        cy.get('.login').click()
        cy.get('#email').type('koseters@gmail.com')
        cy.get('#passwd').type('qwerty123')
        //cy.wait(9 * 1000)
        cy.get('#SubmitLogin').click()

    });


    it('Login Command Procedure', () => {
        // Commands.js dosyasında hazırlanmış olan komutun kullanımı
        // login(site,email,password) şeklinde bir komut yazılmıştır.
        // bu komut üç parametre istemektedir.
        // yukarıda yapılan işlemler daha moduler/dinamik olması açısından
        // tekrarlanan işlemler komutla hız kazandılmıştır
        cy.login(site, 'email@gmail.com', 'password')
    });

    it('Positive Login', () => {

        cy.login(site, "koseters@gmail.com", 'qwerty123')
        cy.get('.page-heading').should('have.text', "My account")
    });

    it.only('Negative Login ', () => {

        cy.login(site, 'email@gmail.com', 'password')
        cy.wait(2000)

        // Test üç farklı şekilde Assert edildi. 
        cy.contains('Authentication failed.').should('be.visible')
        cy.get('li').should('be.visible', 'Authentication failed.')
        cy.get('.page-heading').should('have.text', "Authentication")
        cy.url().should('include', 'authentication')

        // Ve hata sonucuna ait ekran görüntüsü alındı
        cy.screenshot()

    });
});