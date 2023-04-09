describe('Alerts', () => {

    const site = 'https://the-internet.herokuapp.com/javascript_alerts'

    it('Alert Test', () => {


        // Click for JS Alert Test
        cy.get(':nth-child(1) > button').click()
        // Assert (Click for JS Alert Test)
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    });

    it('Accept Alert Test', () => {
        cy.visit(site)
        // Click for JS Confirm Test
        cy.get(':nth-child(2) > button').click()

        // Assert (Click for JS Confirm Test)
        cy.get('#result').should('have.text', 'You clicked: Ok')

    });

    it.only('Dismiss Alert', () => {
        cy.visit(site)

        // Dismiss Alert Test
        // Cypress otomatik olarak Tamam (OK) butonunu varsayılan olarak kabul ediyor
        cy.get(':nth-child(2) > button').click()

        // cypress otomatij olarak tamam butonuna tıkladı.
        // ama iptal butonunu seçmek istenirse 
        // browser controlu için on() fonksiyonu kullanılır
        // on() -> JQuery bir fonksiyondur
        cy.on('window:confirm', (str) => {
            return false
            // return true -> default olarak OK' düğmesini tıklayacaktır
        })

        cy.get('#result').should('have.text', "You clicked: Cancel")
    });

    it('Entering Text on the Alert', () => {
        cy.visit(site)

        cy.window()
            .then(($windowElement)=> { // Popup pencereleri kontrol et
            //$windowElement -> Prompt'a erişmi sağlar girişini sağlamak için 
            cy.stub($windowElement, "prompt").returns('Cypress') 
            //cy.wait(4*1000)
            cy.get(':nth-child(3) > button').click()
            //cy.wait(2*1000)

        })
        
        cy.get('#result').should('have.text', 'You entered: Cypress')
    });
})