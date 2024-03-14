describe('Requirements > Requirement Types', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
    })
    
it('Add Requirement Types', () => {
cy.log('1. Observe the grid ')
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click()
     //  Grid contains 3 columns
     //  - 'Name'
     cy.get('[data-text="Name"]').contains('Name')
     //  - 'Code'
     cy.get('[data-text="Code"]').contains('Code')
     // - 'Impacting compliance'
     cy.get('[data-text="Impacting compliance"]').contains('Impacting compliance')

cy.log('2. Click on \'ADD\' button ')
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     // A pop-up dialog is opened with the following elements:
     //  - 'Requirement type' title
     cy.get('.svx-modal-header > div').contains('Requirement type')
     // - 'Name' text field (required)
     cy.get('.svx-modal-body > :nth-child(1)').within(() => {
        cy.get('.svx-formfield-label > .required-field').should('exist').contains('Name');
        cy.get('.svx-formfield-content > .input-group > .k-textbox').should('exist');
      });
     // - 'Code' field (required)
     cy.get('.svx-modal-body > :nth-child(2)').within(() => {
        cy.get('.svx-formfield-label > .required-field').should('exist').contains('Code');
        cy.get('.svx-formfield-content > .input-group > .k-textbox').should('exist');
      });
     // - 'Impacting compliance' checkbox
     cy.get('.svx-modal-body > :nth-child(3)').within(() => {
        cy.get('.svx-formfield-label > label').should('exist').contains('Impacting compliance');
        cy.get('.k-switch-track').should('exist');
      });      
     // - Text: 'Only impacting compliance requirement types are used in compliance widgets
cy.log('BUG: text not available')
     cy.contains('Only impacting compliance requirement types are used in compliance widgets')
     // - 'CANCEL' and 'SAVE' buttons
     cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').should('exist').contains('CANCEL', { matchCase: false })
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').should('exist').contains('SAVE', { matchCase: false })
     
cy.log('3. Enter \'Name\' and \'Code\' and click \'CANCEL\' button ')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Requirement type 1')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Req1').wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').click()
     // The pop-up dialog is closed.
     cy.get('.svx-modal-header > div').should('not.exist')
     // The user is redirected to the 'Requirement types' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement types')
     // New Requirement type is not created.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement type 1').wait(3000)
     cy.get('.k-table-td > label').contains('No items to display')

cy.log('4. Repeat step 3, enter \'Name\' and \'Code\' and click \'SAVE\' ')
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Requirement type 1')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Req1').wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The pop-up dialog is closed. 'Save successful' message is displayed.
     cy.get('.k-notification-group.svx-popup-notification').should('exist').contains('Save successful.')
     // The user is redirected to the 'Requirement types' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement types')
     // The grid list is updated with newly created item added to bottom of the grid.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).clear().type('Requirement type 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement type 1')

cy.log('5. Go to Manage section > Requirements - Requirements and open any requirement. Open the requirement type drop down.')
     cy.get('#tree-item-8_0 > .k-link').click()
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').dblclick()
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').clear().type('Requirement type 1').wait(5000)
     cy.get('.k-list-content').contains('Requirement type 1')

cy.log('6. Select the newly created status and press \'SAVE\'')
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('{downarrow}').type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  'Save successful' message is displayed. 
     cy.get('.k-notification-group.svx-popup-notification').should('exist').contains('Save successful.')
     //  The user is redirected to the Requirements overview grid.
     cy.get('.svx-page-header-title').should('exist').contains('Requirements')
cy.log('BUG: not redirected. requirement remains open')
     cy.get('#tree-item-8_0 > .k-link').click()
     //  The requirement type is correctly shown in the requirement type column. 
     cy.get('[data-render-row-index="2"] > [data-col-index="3"]').contains('Requirement type 1')

cy.log('cleanup')
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').dblclick()
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').clear().wait(3000).type('{downarrow}').type('{enter}')
     cy.get('.dismiss').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()

     cy.get('#tree-item-8_3 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Requirement type 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

    })
    })