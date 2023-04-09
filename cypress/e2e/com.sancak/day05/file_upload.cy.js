import 'cypress-file-upload';

describe('File Upload Test', () => {

    const site = 'https://davidwalsh.name/demo/multiple-file-upload.php'

    it('Test-1 : Single File Upload', () => {

        cy.visit(site)

        // 1. Yöntem Locater'a direk attach edilmesi

        cy.get('#filesToUpload').attachFile('1.jpg')
        cy.get('#fileList > li').should('have.text', '1.jpg')

        cy.wait(2000)

        // 2. Yöntem Değişken Tanımlama ile 

        let path1 = '2.jpg'

        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('be.visible', path1)
        cy.get('#fileList > li').should('include.text', path1)
        //cy.contains(path1).should('be.visible')

    });

    it('Test-2 : Multiple File Upload 1 ', () => {

        cy.visit(site)

        var path1, path2, path3

        path1 = '1.jpg'
        path2 = '2.jpg'
        path3 = '3.jpg'


        cy.get('#filesToUpload')
            .attachFile(path1).wait(3000)

        cy.get('#fileList > li').should('have.text', path1)

        cy.get('#filesToUpload').attachFile(path2).wait(3000)
        cy.get('#fileList > li').should('have.text', path2)

        cy.get('#filesToUpload').attachFile(path3).wait(3000)
        cy.get('#fileList > li').should('have.text', path3)

    });

    it('Test-3 : Multiple File Upload 2', () => {

        cy.visit(site)

        //cy.get('#filesToUpload').attachFile(['1.jpg','2.jpg','3.jpg'])


        let path1, path2, path3

        path1 = '1.jpg'
        path2 = '2.jpg'
        path3 = '3.jpg'

        cy.get('#filesToUpload').attachFile([path1, path2, path3])

    });
    it.only('Test-4 : Overrride File Name', () => {

        cy.visit(site)

        //cy.get('#filesToUpload').attachFile(['1.jpg','2.jpg','3.jpg'])

        let path1, pathYeni

        path1 = '1.jpg'
        pathYeni = 'DenemeImage01.jpg'

        // Dosyanın adını ve türünü değiştirebilirsiniz
        cy.get('#filesToUpload').attachFile({ filePath: path1, fileName: pathYeni})

        cy.get('#fileList > li').should('have.text', pathYeni)
        cy.get('#fileList > li').should('has.text', pathYeni)
        cy.get('#fileList > li').should('include.text', pathYeni)
        cy.get('#fileList > li').contains(pathYeni).should('be.visible')

        cy.contains(pathYeni).should('be.visible')

    })
})