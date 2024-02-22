describe('Settings > Personnel settings', () => {
    beforeEach(() => {
     // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
     cy.log('Login')
     // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Nathoe')
     cy.get('#Login').click()

     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
     cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Status 1')
     cy.wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.wait(2000)
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Status 2')
     cy.wait(1000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()

     //  Navigate to Employees overview grid
     cy.get('#tree-item-4 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-4_0 > .k-link > .k-item-text') .click()
     //  open an Employee profile (with already a status)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Ritchie Nathoe')
     cy.wait(1000)
     cy.get('.k-grid-content').should('contain', 'Ritchie Nathoe').contains('Ritchie Nathoe ()').click()
     //  within the Organization tab, click \'EDIT\' and open the Personnel status drop down
     cy.wait(3000)
     cy.get('.k-tabstrip-item:contains("Organization")').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The newly created item is available for selection
     //  Select the newly created Status 1 and press 'SAVE'
     cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(1) > .svx-formfield-content').find('input.k-input-inner').clear().type('Status 1').wait(3000).type('{enter}')
     cy.get('.svx-column-block-left > :nth-child(1) > .svx-block-body > :nth-child(4) > .svx-formfield-content').find('input.k-input-inner').clear().type('NM Organisational Unit Europe').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
    
     });
  
    // Test data:
    // 'Status 1' - is defined at list for 1 employee
    // 'Status 2' - is created but not used yet
    it.only('Validation on Add/Edit Personnel Status', () => {
     cy.log('1. Click bin icon to \'Status 1\' record')
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
     cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Status 1')
     cy.wait(2000)
     cy.get('.k-grid-content').contains('Status 1')
     cy.get('.k-master-row > [data-col-index="1"]').contains('Status 1')
     cy.get('[data-render-row-index="2"] > [data-col-index="0"] > .k-button > .telerik-blazor').click()
    // The pop-up shows with 'Are you sure you want to delete the selected item?
     cy.contains(' Are you sure you want to delete the selected item?').should('exist')
     //  'NO'/'YES' buttons available. BUG, not available! 

     cy.log('2. Click \'YES\' button')
    //  YES button not available. using OK
    //  cy.get('.k-button-solid-primary').click()
    // The validation pop-up dialog is opened with the following message:
    // Delete failed because the item is used by:
    // Employees: '%Employee full name%'
    // 'CLOSE' button is present

     cy.log('3. Click \'CLOSE\' button ')
    // The validation pop-up dialog is opened with the following message:
    // Delete failed because the item is used by:
    // Employees: '%Employee full name%'
    // 'CLOSE' button is present    
    // The pop-up is closed.
     cy.get('.k-actions > .k-button-solid-base').click()
     //  The pop-up is closed.
     cy.contains(' Are you sure you want to delete the selected item?').should('not.exist')
     // The user is redirected back to the categories overview screen.'Status 1' remains on the list
     cy.get('.k-grid-content').contains('Status 1')

     cy.log('4. Click on bin icon to \'Status 2\' item ')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').clear().type('Status 2')
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Status 2')
     cy.get('[data-render-row-index="2"] > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     
     cy.log('5. Click \'NO\' button ')
     cy.get('.k-actions > .k-button-solid-base').click()
     //  The pop-up is closed.
     cy.contains(' Are you sure you want to delete the selected item?').should('not.exist')
     cy.get('.k-grid-content').contains('Status 2')

     cy.log('6. Repeat step 4 and click \'YES\' button ')
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Status 2')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
     //  The pop-up is closed.
     cy.contains(' Are you sure you want to delete the selected item?').should('not.exist')
     //  The user is redirected to the overview screen.'Status 2' is no longer available on the grid list.
     cy.get('.k-grid-content').contains(' No items to display')

     cy.log('7. Click on \'ADD\' button and enter previously deleted status name, SAVE ')
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Status 2')
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The status item is successfully created and added to the grid list.
     cy.get(' .k-link > .svx-font-2').eq(3).click()
     cy.get(' .k-link > .svx-font-2').eq(4).click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').clear().type('Status 2')
     cy.get('.k-grid-content').contains('Status 2')







     





  


    })
    
})