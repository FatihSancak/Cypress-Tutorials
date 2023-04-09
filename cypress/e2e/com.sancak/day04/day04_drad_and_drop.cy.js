import '@4tw/cypress-drag-drop'
const site = 'https://the-internet.herokuapp.com/drag_and_drop'


describe('Drag Drop Test', () => {

    it('Test', () => {
        cy.visit(site)


        cy
            // Sürüklenecek (drag) elementi .get ile alınması
            .get('#column-a')

            // Sürüklenen elementin bırakılacağı (drop) elemetin adı
            .drag('#column-b')
        
            // Öncelikle cy.get() ile sürüklenecek element alınır ve .drag() komutu ile bırakılır.



        // Çift Tıklama
        cy.get('#column-a').dblclick()

        cy.wait(2 * 1000)

        // Sağ Tıklama
        cy.get('#column-a').rightclick()

    });
})
