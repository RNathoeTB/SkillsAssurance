describe('Requirements > Requirement groups', () => {
    beforeEach(() => {
     cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()

     // 'Requirement group 1' is used in at least 1 Requirement. 
     cy.get('#tree-item-8 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-8_1 > .k-link').click()
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Requirement group 1')
     cy.get(':nth-child(4) > .svx-formfield-content > .telerik-blazor').type('Europe').wait(4000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement group 1').wait(2000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement group 1').dblclick().wait(3000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('Certificate')
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(1).type('Advanced Fire Fighting')
     cy.get('input.k-input-inner').eq(1).wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(1).type('{enter}')
     cy.get('input.k-input-inner').eq(2).type('Company Mandatory')
     cy.wait(4000)
     cy.get('input.k-input-inner').eq(2).type('{enter}') 
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(4000)
    //  cy.get('.dismiss').click()
    //  cy.get('#tree-item-8_0 > .k-link').click()
    //  cy.get('#tree-item-8_1 > .k-link').click().wait(3000)

     //  'Requirement group 2' is not used in any Requirement.
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Requirement group 2')
     cy.get(':nth-child(4) > .svx-formfield-content > .telerik-blazor').type('Europe').wait(4000).type('{enter}')
    //  cy.get('.dismiss').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
    })
    
it('Delete Requirement Group', () => {
cy.log('1. Click on bin icon of \'Requirement group 1\'')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement group 1')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     // A pop-up dialog is displayed: 'Are you sure you want to delete the selected item?'
     cy.contains('Are you sure you want to delete the selected item?')
      // 'NO' and 'YES' buttons are available.
cy.log('BUG: does not contain NO and YES, Contains CANCEL and OK')
     cy.get('.k-actions').contains('NO')
     cy.get('.k-actions').contains('YES')

cy.log('2. Click \'NO\' button')
     cy.get('.k-actions > .k-button-solid-base').click()
    //  The pop-up is closed.
     cy.contains('Are you sure you want to delete the selected item?').should('not.exist')
     //  The user is redirected to the Requirement groups overview screen.
     cy.get('.svx-page-header').contains('Requirement groups')
     //  'Requirement group 1' remains on the list.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement group 1')

cy.log('3. Repeat step 1 and click \'YES\' button')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
     //  The pop-up is closed.
     cy.contains('Are you sure you want to delete the selected item?').should('not.exist')
     //  The user is redirected to the Requirement groups overview screen.
     cy.get('.svx-page-header').contains('Requirement groups')
     //  'Requirement group 1' is no longer available on the grid list. (No delete constraint on having requirements linked to the group).
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement group 1').wait(3000)
     cy.get('.k-grid-content').contains('No items to display')

cy.log('4. Click on bin icon of \'Requirement group 2\'')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement group 2').wait(3000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     // A pop-up dialog is displayed: 'Are you sure you want to delete the selected item?'
     cy.contains('Are you sure you want to delete the selected item?')
      // 'NO' and 'YES' buttons are available.
cy.log('BUG: does not contain NO and YES, Contains CANCEL and OK')
     cy.get('.k-actions').contains('NO')
     cy.get('.k-actions').contains('YES')

cy.log('5. Click \'Yes\' button')
     cy.get('.k-button-solid-primary').click().wait(3000)  
     //  The pop-up is closed.
     cy.contains('Are you sure you want to delete the selected item?').should('not.exist')
     //  The user is redirected to the Requirement groups overview screen.
     cy.get('.svx-page-header').contains('Requirement groups')
     //  'Requirement group 2' is no longer available on the grid list.
cy.log('BUG: requirement group is still visible. need to reload page')
    //  cy.get('#tree-item-8_0 > .k-link').click()
    //  cy.get('#tree-item-8_1 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement group 2').wait(3000)
     cy.get('.k-grid-content').contains('No items to display')

    })
    })