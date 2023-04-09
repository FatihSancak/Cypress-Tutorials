describe('File Upload Test', () => {

    it('Test-1 : Single File Upload', () => {

        let site = 'https://davidwalsh.name/demo/multiple-file-upload.php'
        cy.visit(site)

        // 1. Yöntem Locater'a direk attach edilmesi

        cy.get('#filesToUpload').attachFile('1.jpg')
        cy.get('#fileList > li').should('have.text','1.jpg')

        cy.wait(2000)

        // 2. Yöntem Değişken Tanımlama ile 

        let path1= '2.jpg'

        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('be.visible',path1)
        cy.get('#fileList > li').should('include.text',path1)
        //cy.contains(path1).should('be.visible')


    });
})