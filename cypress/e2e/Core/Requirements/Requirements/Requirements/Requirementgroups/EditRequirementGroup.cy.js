describe('Requirements > Requirement groups', () => {
    beforeEach(() => {
     cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()

     cy.get('#tree-item-10').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Cert req group 1-3')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  'Requirement group 1' is created.  
     cy.get('#tree-item-8 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-8_1 > .k-link').click()
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Requirement group 1')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('TC2408')
     cy.get(':nth-child(4) > .svx-formfield-content > .telerik-blazor').type('Europe').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  There are requirements assigned to this group (Cert req group 1-3).
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement group 1').wait(2000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement group 1').dblclick().wait(3000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('Certificate')
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(1).type('Cert req group 1-3')
     cy.get('input.k-input-inner').eq(1).wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(1).type('{enter}')
     cy.get('input.k-input-inner').eq(2).type('Company Mandatory')
     cy.wait(4000)
     cy.get('input.k-input-inner').eq(2).type('{enter}') 
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(4000)
     cy.get('.dismiss').click()
     //  There are persons assigned to one of the OU's linked to this requirement group.
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Ritchie Nathoe').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Ritchie Nathoe').dblclick().wait(3000)
     cy.get(' .k-link > .svx-font-2').eq(1).click().wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get('.svx-column-block-left > :nth-child(1) > .svx-block-body > :nth-child(4) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('South America').wait(3000)
     cy.get('.svx-column-block-left > :nth-child(1) > .svx-block-body > :nth-child(4) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('{downarrow}').type('{enter}').wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
    })
    
it('Edit Requirement Group', () => {
cy.log('1. Double-click on \'Requirement group 1\' ')
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_1 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement group 1').dblclick().wait(3000)

cy.log('2. Change the Name and click \'SAVE\'')
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Requirement group 1 changed').wait(2000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  The user is redirected to the Requirement groups overview screen.
     cy.get('.svx-page-header').contains('Requirement groups')
     //  The change has been successfully saved and shows updated in the grid.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement group 1 changed').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement group 1 changed')

cy.log('3. Navigate to Requirements > Organizational unit groups and open the group assigned to \'Requirement group 1\'. Open the group and observe.')
     cy.get('#tree-item-8_4 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Europe').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick().wait(3000)
     //  The requirement group name is updated accordingly.
     cy.get(':nth-child(5) > .svx-formfield-content > .k-multiselect').contains('Requirement group 1 changed')
     cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').click()

cy.log('4. Navigate to Requirements > Requirement groups. Re-open the record of step 2, change the Name back to \'Requirement group 1\', change the Description and click \'SAVE\'')
     cy.get('#tree-item-8_1 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement group 1 changed').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement group 1').dblclick().wait(3000)
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC2408changed').wait(2000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  The user is redirected to the Requirement groups overview screen.
     cy.get('.svx-page-header').contains('Requirement groups')
     //  The changes have been successfully saved and show updated in the grid.
     cy.get('[data-col-index="2"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC2408changed').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement group 1 changed')
     cy.get('.k-master-row > [data-col-index="2"]').contains('TC2408changed')
     
cy.log('5. Re-open the record, change the Organizational unit groups selection (remove existing one(s) and add one group not previously selected) and click \'SAVE\'')
     cy.get('.k-master-row > [data-col-index="1"]').dblclick()
     cy.get('.k-multiselect').find('.k-input-inner').clear().type('Americas').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  The user is redirected to the Requirement groups overview screen.
     cy.get('.svx-page-header').contains('Requirement groups')
     //  The changes have been successfully saved and show updated in the grid.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement group 1 changed').wait(3000)
     cy.get('.k-master-row > [data-col-index="4"]').contains('Americas')

cy.log('6. Navigate to MANAGE -> Requirements -> Organizational unit groups and open (one of) the OU group record deleted in step 5.')
     cy.get('#tree-item-8_4 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Europe').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick().wait(3000)
     cy.get(':nth-child(5) > .svx-formfield-content > .k-multiselect').should('not.contain', 'Requirement group 1 changed')
     cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').click().wait(3000)

cy.log('7. Click \'Cancel\' and open (one of) the OU group record added in step 5')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Americas').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick().wait(3000)
     cy.get(':nth-child(5) > .svx-formfield-content > .k-multiselect').contains('Requirement group 1 changed')
     cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').click()

cy.log('8. Navigate to Personnel -> Employees and open an Employee assigned to an OU part of the Organizational unit group as added to Requirement group 1 in step 5; observe the Evidences -> Certificates tab.')
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(2000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Ritchie Nathoe').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Ritchie Nathoe').dblclick().wait(3000)
     cy.get(' .k-link > .svx-font-2').eq(3).click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Cert req group 1-3').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Cert req group 1-3')

cy.log('9. Navigate to MANAGE -> Requirements -> Requirement groups; open \'Requirement group 1\', remove the OU group added in step 5.')
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_1 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement group 1 changed').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement group 1').dblclick().wait(3000)
     cy.get('.k-multiselect').find('.k-input-inner').type('{backspace}').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The user is redirected to the Requirement groups overview screen.
     cy.get('.svx-page-header').contains('Requirement groups')
     //  The change has been successfully saved and shows updated in the grid.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement group 1 changed').wait(3000)
     cy.get('.k-grid-content').should('not.contain', 'Americas')
     
     cy.log('cleanup')
    //  cy.get('#tree-item-8_0 > .k-link').click()
    //  cy.get('#tree-item-8_1 > .k-link').click().wait(3000)
    //  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement group 1 changed').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement group 1 changed')
     cy.get('[data-render-row-index="2"] > [data-col-index="0"]').click()
     cy.get('.k-button-solid-primary').click()
    })
    })