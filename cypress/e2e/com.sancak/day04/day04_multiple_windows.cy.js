const site = 'https://the-internet.herokuapp.com/windows'

describe('Multiple Windows', () => {

    it('Remove Target', () => {
        cy.visit(site)
        // A tagında bulunan target="_blank" kodundaki target özelliğini siler
        // artık link yeni pencerede açılmaz. Link tıklandığında aynı pencerede açılır.  
        cy.wait(3 * 1000)
        cy.get('.example > a').invoke('removeAttr', 'target').click()

        // Assert
        cy.get('h3').should('have.text', 'New Window')
    });

    it.only('Yeni URL\'de açma', () => {
        cy.visit(site)

        // prop : JQuery'deki attribute alan bir method
        // prop : ile HREF değeri

        cy
            .get('.example > a')
            .then((element) => {
                const newURL = element.prop('href')
                cy.visit(newURL)
            })
    });
});