describe('Requirements > Requirement groups', () => {
    beforeEach(() => {
     cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()

     cy.log('Cleanup')
     cy.get('#tree-item-8 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-8_1 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC1074Test').wait(2000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
    })
    
    it('Add Requirement Group', () => {
cy.log('1. Observe the grid')
     cy.get('#tree-item-8 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-8_1 > .k-link').click()
     //  Grid contains 4 columns:'Name' 'Description' 'Category' 'Organizational unit groups'
     cy.get('.k-sorted > .k-cell-inner > .k-link > .k-column-title').contains('Name')
     cy.get('[data-text="Description"] > .k-cell-inner > .k-link > .k-column-title').contains('Description')
     cy.get('[data-text="Category"] > .k-cell-inner > .k-link > .k-column-title').contains('Category')
     cy.get('[data-text="Organizational unit groups"]').contains('Organizational unit groups')

cy.log('2. Click on \'ADD\' button')
     cy.get('.svx-button > .telerik-blazor').click()
     //  A window is opened showing 2 tabs: 'Requirement group' 'Requirements' (to be implemented)
     cy.get('.k-tabstrip-items').contains('Requirement group')
     cy.get('.k-tabstrip-items').contains('Requirements')
     // The Requirement group tab consists of the following elements:
     // 'Requirement group info' title
     cy.get('.svx-block-header').contains('Requirement group Info')
     // 'Name' text field (required)
     cy.get(':nth-child(1) > .svx-formfield-label > .required-field').should('have.class', 'required-field').contains('Name')
     cy.get(':nth-child(2) > .svx-formfield-label > label').contains('Description')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // 'Category' drop down
     cy.get(':nth-child(3) > .svx-formfield-label').contains('Category')
     cy.get(':nth-child(3) > .svx-formfield-content').find('.telerik-blazor.k-button-icon.k-icon.k-svg-icon.k-svg-i-caret-alt-down').should('exist')
     // 'Organizational unit groups' multiple select (required)
     cy.get(':nth-child(4) > .svx-formfield-label > .required-field').should('have.class', 'required-field').contains('Organizational unit groups')
     // 'CANCEL' and 'SAVE' buttons
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').contains('Cancel')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').contains('Save')

cy.log('3. Enter \'Name\' and add an Organizational unit group, and click \'CANCEL\' button')
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('TC1074Test')
     cy.get(':nth-child(4) > .svx-formfield-content > .telerik-blazor').type('Europe').wait(3000).type('{enter}')
     cy.get('.dismiss').click()
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').click().wait(2000)
     //  The window is closed.
     // The user is redirected back to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement group')
     // New Requirement group was not created.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC1074Test').wait(2000)
     cy.get('.k-grid-norecords > .k-table-td').contains('No items to display')

cy.log('4. Repeat step 3, enter \'Name\' and Organizational unit group, and click \'SAVE\' button')
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('TC1074Test')
     cy.get(':nth-child(4) > .svx-formfield-content > .telerik-blazor').type('Europe').wait(2000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  'Save successful' message is displayed. 
     cy.get('.k-notification').contains('Save successful.')
     //  The user is redirected back to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement group')
     //  New Requirement group is created. 
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC1074Test').wait(2000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1074Test')

cy.log('6. Double-click on the newly created requirements group, select a category and press \'SAVE\'')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('TC1074Test').wait(2000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick()
     cy.get(':nth-child(3) > .svx-formfield-content').find('.k-input-inner').type('Regional requirements').wait(2000).type('{downarrow}').type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  'Save successful' message is displayed. 
     cy.get('.k-notification').contains('Save successful.')
     //  The user is redirected back to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement group')
     // Category information is stored.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('TC1074Test').wait(2000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1074Test')
     cy.get('.k-master-row > [data-col-index="3"]').contains('Regional requirements')

cy.log('7. Navigate to Requirements > Organizational unit groups and double-click the Organizational unit group selected in step 3')
     cy.get('#tree-item-8 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-8_4 > .k-link').click()
     // The 'Requirement groups' field shows the newly created requirement group
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Europe').wait(2000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Europe')
     cy.get('.k-master-row > [data-col-index="5"]').contains('TC1074Test')

cy.log('8. Navigate to Requirements > Requirements and click \'ADD\'')
    //  cy.get('#tree-item-8 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-8_0 > .k-link').click()
     cy.get('.svx-button > .telerik-blazor').click()
     // The Requirements window opens
     cy.get('.svx-page-header-title').should('exist').contains('Requirement')

cy.log('9. Open the \'Requirement group\' drop down')
     cy.get(':nth-child(5) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('TC1074Test').wait(3000).type('{downarrow}').type('{enter}')
     cy.get(':nth-child(5) > .svx-formfield-content').contains('TC1074Test')

cy.log('10. Select the newly created requirement group, fill the other required fields and click \'SAVE\'')
    







    })
    })