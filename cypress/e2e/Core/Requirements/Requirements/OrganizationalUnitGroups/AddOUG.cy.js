describe('Requirements > Organizational unit groups', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
    //  create Req Gr
    cy.get('#tree-item-8 > .k-link').click()
    cy.get('#tree-item-8_1 > .k-link').click()
    cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
    cy.get('.dismiss').click()
    cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('RNanyrecord')
    cy.get('.k-multiselect').type('Europe').wait(2000).type('{enter}')
    cy.get('.k-multiselect').click()
    cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
    })
    
it('Add Organizational Unit Groups', () => {
     cy.log('1. Observe the grid ')
     cy.get('#tree-item-8_4 > .k-link').click()
     // Grid contains 5 columns:
     // - 'Name'
     cy.get('.k-sorted > .k-cell-inner > .k-link > .k-column-title').contains('Name')
     // - 'Description'
     cy.get('[data-text="Description"] > .k-cell-inner > .k-link > .k-column-title').contains('Description')
     // - 'Organizational units'
     cy.get('[data-text="Organizational units"]').contains('Organizational units')
     // - 'Include sub OUs'
     cy.get('[data-text="Include sub OUs"] > .k-cell-inner > .k-link > .k-column-title').contains('Include sub OUs')
     // - 'Requirement groups'
     cy.get('[data-text="Requirement groups"]').contains('Requirement groups')

cy.log('2. Click on \'ADD\' button')
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     // A pop-up dialog is opened with the following elements:
     // - 'Organizational unit group' title
     cy.get('.svx-modal-header > div')
     // - 'Name' text field (required)
     cy.get('.svx-modal-body > :nth-child(1)').within(() => {
     cy.get('.svx-formfield-label > .required-field').should('exist').and('have.text', 'Name');
     cy.get('.svx-formfield-content > .input-group > .k-textbox').should('exist');
  });  
     // - 'Description' text field
     cy.get('.svx-modal-body > :nth-child(2)').within(() => {
     cy.get('.svx-formfield-label > label').should('have.text', 'Description');
     cy.get('.svx-formfield-content > .input-group > .k-textbox').should('exist');
  });  
     // - 'Organizational units' multiple select
     cy.get('.svx-modal-body > :nth-child(3)').within(() => {
     cy.get('.svx-formfield-label > label').should('have.text', 'Organizational units');
     cy.get('.svx-formfield-content > .k-multiselect').should('exist');
  });  
     // - 'Include sub OUs' checkbox
     cy.get('.svx-modal-body > :nth-child(4)').within(() => {
     cy.get('.svx-formfield-label > label').should('have.text', 'Include sub OUs');
     cy.get('.k-switch-track').should('exist');
  });  
     // - 'Requirement groups' multiple select
     cy.get('.svx-modal-body > :nth-child(5)').within(() => {
     cy.get('.svx-formfield-label > label').should('have.text', 'Requirement groups');
     cy.get('.svx-formfield-content > .k-multiselect').should('exist');
  });
  
cy.log('3. Enter \'Name\' and click \'CANCEL\' button')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('TC1085add')
     cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').click()
     // The pop-up dialog is closed.
     cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').should('not.exist')
     // The user is redirected back to the 'Organizational unit groups' overview screen.
     cy.get('.svx-page-header-title').contains('Organizational unit groups')
     // New Organizational unit group was not created.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('TC1085add').wait(3000)
     cy.get('.k-table-td > label').contains('No items to display')

cy.log('4. Click \'ADD\', enter \'Name\' = \'Organisational unit group 1\', populate description, select one Organizational unit and check the \'Include sub OUs checkbox; and click \'SAVE\' button')
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Organisational unit group 1')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Description')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').type('NM Organisational Unit Spain').wait(3000).type('{enter}')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click()
     cy.get('.k-switch-track').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The pop-up dialog is closed.
     cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').should('not.exist')
     // The user is redirected back to the 'Organizational unit groups' overview screen.
     cy.get('.svx-page-header-title').contains('Organizational unit groups')
     // The grid list is updated with newly created item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Organisational unit group 1').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Organisational unit group 1')
     cy.get('[data-render-row-index="2"] > [data-col-index="2"]').contains('Description')

cy.log('step 5 and step6 Not possible')
   
cy.log('7 & 8. Navigate to MANAGE -> Requirements -> Requirement groups and open an existing record. Click on the Organizational unit groups field. Select \'Organizational unit group 1\' and click \'SAVE\'')
     cy.get('#tree-item-8_1 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('RNanyrecord').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('RNanyrecord').dblclick()
     //  The 'Organizational unit group 1' is visible for selection.
     cy.get('.k-multiselect').type('Organisational unit group 1').wait(2000).type('{enter}')
     cy.get('.k-multiselect').click()
     cy.get('.dismiss').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  The pop-up dialog is closed.
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement groups')
     //  The grid list is updated showing the newly assigned Organizational unit group info in the grid.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('RNanyrecord').wait(3000)
     cy.get('.k-master-row > [data-col-index="4"]').contains('Organisational unit group 1')

cy.log('9. Navigate to MANAGE -> Requirements -> Organizational unit groups and open \'Organizational unit group 1\' and observe.')
     cy.get('#tree-item-8_4 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Organisational unit group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick()
     // The 'Requirement groups' field shows the requirement group name as assigned to this OU group in step 7-8.
     cy.get(':nth-child(5) > .svx-formfield-content > .k-multiselect').contains('RNanyrecord')

cy.log('10. Add an additional requirement group in the \'Requirement groups\' field and click \'SAVE\'')
     cy.get(':nth-child(5) > .svx-formfield-content > .k-multiselect').type('Americas').wait(4000).type('{enter}')
     cy.get(':nth-child(5) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The pop-up dialog is closed.
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Organizational unit groups')
     //  The grid list is updated showing the 2 assigned Requirement groups in the grid.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('Organisational unit group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="5"]').contains('RNanyrecord')
     cy.get('.k-master-row > [data-col-index="5"]').contains('Americas')

     cy.log('Cleanup')
     cy.get('#tree-item-8_1 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('RNanyrecord').wait(3000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click().wait(3000)

     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Americas').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').dblclick()
     cy.get('.k-input-values').find('.k-input-inner').click().type('{backspace}').wait(3000).click()
     cy.get('.dismiss').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()

     cy.get('#tree-item-8_4 > .k-link > .k-item-text').click().wait(3000)
     cy.get('#tree-item-8_4 > .k-link > .k-item-text').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('Organisational unit group 1').wait(3000)
    cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
    cy.get('.k-button-solid-primary').click()
    })
    })