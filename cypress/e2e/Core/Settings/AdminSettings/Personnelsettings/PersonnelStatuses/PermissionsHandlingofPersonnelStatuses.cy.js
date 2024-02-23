describe('Settings > Personnel settings', () => {
    beforeEach(() => {
     // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
     cy.log('Login')
     // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Nathoe')
     cy.get('#Login').click()
     // Test data:'View'/'Create'/'Update'/'Delete' permissions to 'Personnel statuses' are applied.
    //  cy.get('#tree-item-12 > .k-link > .k-item-text').click()
    //  cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
    //  cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
    //  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').clear().type('TC1284Permissionschanged')
    //  cy.wait(2000)
    //  cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
    //  cy.get('.k-button-solid-primary').click()
    //  cy.get(' .k-link > .svx-font-2').eq(3).click()
    //  cy.get(' .k-link > .svx-font-2').eq(4).click()
     });

    it('Permissions Handling of Personnel Statuses', () => {
     cy.log('1. Observe the screen')
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
     cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
     //  The grid with the list of created items is shown.
     cy.get('.k-grid-content').should('not.be.empty').then(($gridContent) => {
        // Check if the grid content has child elements
        expect($gridContent.children()).to.have.length.above(0);
     })
     // Each record contains a bin icon.
     // Get the grid content
     cy.get('.k-grid-content').should('not.be.empty').then(($gridContent) => {
     // Check if the grid content has child elements
     expect($gridContent.children()).to.have.length.above(0);
     // Count the number of rows in the grid
     cy.get('.k-grid-content [data-render-row-index]').its('length').then((rowCount) => {
        // Count the number of delete buttons
        cy.get('.k-grid-content [data-col-index="0"] > .k-button > .telerik-blazor').its('length').then((deleteButtonCount) => {
            // Assert that the number of rows matches the number of delete buttons
            expect(deleteButtonCount).to.equal(rowCount);
        });
    });
});

     // 'ADD' button is present.
     cy.get('.svx-button > .telerik-blazor').should('exist')

     cy.log('2. Click \'ADD\', fill all required fields and click \'SAVE\'')
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').clear().type('TC1284Permissions')
     cy.wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The user is redirected to the 'Personnel statuses' overview screen.
     cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
     //  The grid list is updated with newly created item.
     //  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').clear().type('TC1284Permissions')
     //  cy.wait(2000)
     //  cy.get('.k-grid-content').contains('TC1284Permissions')
cy.log('The grid list is updated with newly created item. >>>>>>>>>>Not updating. BUG')
     cy.get(' .k-link > .svx-font-2').eq(3).click()
     cy.get(' .k-link > .svx-font-2').eq(4).click() 
     cy.wait(1000)

     cy.log('3. Double-click on the just added record and change the name and click \'SAVE\'')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').clear().type('TC1284Permissions')
     cy.wait(2000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').clear().type('TC1284Permissionschanged')
     cy.wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The user is redirected to the 'Personnel statuses' overview screen.
cy.log('The grid list is updated with newly created item.  BUG >>>>>>>>>> Not updating.')
     cy.get(' .k-link > .svx-font-2').eq(3).click()
     cy.get(' .k-link > .svx-font-2').eq(4).click()
     cy.wait(1000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').clear().type('TC1284Permissionschanged')
     cy.wait(2000)
     cy.get('.k-grid-content').contains('TC1284Permissionschanged')

     cy.log('4. Click on the bin icon of the just created/updated item.')
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1284Permissionschanged')
     cy.get('[data-render-row-index="2"] > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     // The pop-up shows with 'Are you sure you want to delete the selected item?
     cy.contains(' Are you sure you want to delete the selected item?').should('exist')
cy.log('\'NO\'/\'YES\' buttons available. BUG >>>>>>>>>> CANCEL & OK is available ')

     cy.log('5. Click \'YES\'')
     cy.get('.k-button-solid-primary').click()
     cy.get('.k-grid-content').should('not.contain', 'TC1284Permissionschanged')

     cy.log('6. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core sub-tab')
     cy.get('#tree-item-12 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings')
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get(':nth-child(3) > :nth-child(2) > :nth-child(4) > .svx-permission-block-header').within(() => {
        cy.contains('View').should('exist');
        cy.contains('Update').should('exist');
        cy.contains('Create').should('exist');
        cy.contains('Delete').should('exist');
    })

    })   
})