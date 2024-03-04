describe('Requirements > Requirement groups', () => {
    beforeEach(() => {
     cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
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
     cy.get(':nth-child(4) > .svx-formfield-content > .telerik-blazor').type('TC1074Test')
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').click().wait(2000)
     //  The window is closed.
     // The user is redirected back to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement group')
     // New Requirement group was not created.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC1074Test').wait(2000)
     cy.get('.k-grid-norecords > .k-table-td').contains('No items to display')

     

















    })
    })