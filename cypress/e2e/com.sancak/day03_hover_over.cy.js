describe('Hover Over', () => {
    it('Move Over', () => {
        cy.visit('https://www.amazon.com/')
        cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').trigger('mouseover')

        // trigger('') mouse'u hareket ettirir.

        //cy.visit('https://www.amazon.com/customer-preferences/country?ref_=icp_lop_mop_chg_ais&preferencesReturnUrl=/')

        // Country/Region
        cy.contains('Change country/region').click()

        // SELECT CANADA 

        /*
            <option class="a-prompt" value="">United States</option>
            Yukarıdaki locater bu tag içerisinde geçiyor.
         */

        cy.get('#icp-dropdown').select('Canada', {force:true })



    })
})