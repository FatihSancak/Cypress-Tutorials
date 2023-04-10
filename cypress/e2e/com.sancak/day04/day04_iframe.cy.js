import 'cypress-iframe'
const site = 'https://the-internet.herokuapp.com/iframe'
//npmjs.com adresinden iframe eklentisi indirilmelidir.

describe('Iframe', () => {
    it('Iframe Test 1', () => {
        cy.visit(site)
        // assert 
        cy.get('h3').should('contain', 'WYSIWYG')

        // iframe ID sinden yüklemesi yapıldı
        cy.frameLoaded('#mce_0_ifr')

        // iframe içindeki editörü içinde bulunan P tagını bulunması ve silinmesi. 
        cy.iframe().find('p').clear()

        cy.iframe().find('p').type('Cypress is working')
        // aşağıdaki kodda sayfa yeni sekmede açıldığı için işlem yapmam artık mümkün değildir.
        //cy.get('.large-4 > div > a').should('contain','Elemental Selenium').click()
    });
});