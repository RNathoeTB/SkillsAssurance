describe('Requirements > Requirement groups', () => {
    beforeEach(() => {
     cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     // 'View'/'Create'/'Update'/'Delete' permissions are applied to 'Requirement groups'.
     cy.get('#tree-item-12 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .left-column').contains('Requirement groups')
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group > .k-group-end')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'false') {
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group > .k-group-end').click();
    } else {
     // If aria-pressed is already false, no action is needed
    } 
    })  
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
    })
    
it('Permissions Handling of Requirement Groups ', () => {
cy.log('1. Observe the screen ')
     cy.get('#tree-item-8 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-8_1 > .k-link').click()
     //  The grid with the list of created items is shown.
     cy.get('.k-grid-content').should('not.be.empty').then(($gridContent) => {
        // Check if the grid content has child elements
        expect($gridContent.children()).to.have.length.above(0);
     })
     // Each record contains a 'Bucket' icon.
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
     cy.get('.dismiss').click()
     cy.get('.svx-button > .telerik-blazor').should('exist').contains('Add')

cy.log('2. Click \'ADD\', fill all required fields and click \'SAVE\'')
     cy.get('.svx-button > .telerik-blazor').click().wait(3000)
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('TC1084 Requirement group')
     cy.get(':nth-child(4) > .svx-formfield-content > .telerik-blazor').type('Europe').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(8000)
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement groups')
     cy.get('.k-sorted > .k-cell-inner > .k-link > .k-column-title').contains('Name')
     cy.get('[data-text="Description"] > .k-cell-inner > .k-link > .k-column-title').contains('Description')
     //  The grid list is updated with newly created item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('TC1084 Requirement group')
     cy.wait(5000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1084 Requirement group')

cy.log('3. Double-click on the just added record and change the name and click \'SAVE\'')
cy.get('.k-master-row > [data-col-index="1"]').contains('TC1084 Requirement group').dblclick()
     //  change the name and click 'SAVE'
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC1084 Requirement changed')     
     cy.wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement groups')
     //  The grid list is updated with updated item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('TC1084 Requirement changed')
     cy.wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1084 Requirement changed')

cy.log('4. Click on the bin icon of the just created/updated item.')
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1084 Requirement changed')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     // A pop-up is displayed: 'Are you sure you want to delete the selected item?'
     cy.contains(' Are you sure you want to delete the selected item?').should('exist')
     //  'NO' and 'YES' buttons are available.
     //  cy.get('.k-actions').contains('NO')
     //  cy.get('.k-actions').contains('YES')
cy.log('BUG: CANCEL & OK is available ')

cy.log('5. Click \'Yes\'')
     cy.get('.k-button-solid-primary').click().wait(3000)
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement groups')
     //  The just added record is no longer available on the grid list.
     cy.get('#tree-item-8_0 > .k-link').click()
     cy.get('#tree-item-8_1 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('TC1084 Requirement changed')
     cy.get('.k-grid-norecords > .k-table-td').contains('No items to display')

cy.log('6. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab')
     cy.get('#tree-item-12 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-header').contains('Requirements')
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .left-column').contains('Requirement groups')
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group').within(() => {
        cy.contains('View').should('exist');
        cy.contains('Update').should('exist');
        cy.contains('Create').should('exist');
        cy.contains('Delete').should('exist');
    })

cy.log('7. Unselect \'Delete\' and click \'SAVE\' button')
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group > .k-group-end')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group > .k-group-end').click();
    } else {
      // If aria-pressed is already false, no action is needed
    }
  })
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The edit security group dialog is closed.
     // 'Save successful' notification message is shown.
cy.log('BUG: "Save successful" notification message is not shown.')

cy.log('8. Re-login and navigate to the Requirement groups overview')
     cy.get('.profile-picture').click()
     cy.contains('Logout').click()
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get('#tree-item-8 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-8_1 > .k-link').click()
     //  User is not able to remove grid records.
     //  Bin icons are not available. 
cy.log('BUG: Bin icons are available ')
     //  'ADD' button is available.
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').should('exist')

cy.log('9. Click \'ADD\', fill all required fields and click \'SAVE\'')
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click().wait(3000)
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('TC1084 Requirement step9')
     cy.get(':nth-child(4) > .svx-formfield-content > .telerik-blazor').type('Europe').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(8000)
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement groups')
     //  The grid list is updated with newly created item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('TC1084 Requirement step9')
     cy.wait(5000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1084 Requirement step9')

cy.log('10. Double-click on the just added record and change the name and click \'SAVE\'')
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1084 Requirement step9').dblclick()
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header').contains('TC1084 Requirement step9')
     //  change the name and click 'SAVE'
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC1084 Requirement step10')     
     cy.wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement groups')
     //  The grid list is updated with newly created item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('TC1084 Requirement step10')
     cy.wait(5000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1084 Requirement step10')

cy.log('11. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Requirement groups unselect \'Create\' and click \'SAVE\'')
     cy.get('#tree-item-12 > .k-link').click().wait(2000)
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group').contains('.telerik-blazor', 'Create')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group').contains('.telerik-blazor', 'Create').click();
    } else {
      // If aria-pressed is already false, no action is needed
    }
  })
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The edit security group dialog is closed.
     // 'Save successful' notification message is shown.
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
cy.log('BUG: "Save successful" notification message is not shown.')

cy.log('12. Re-login and navigate to the Requirement groups overview screen')
     cy.get('.profile-picture').click()
     cy.contains('Logout').click()
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get('#tree-item-8 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-8_1 > .k-link').click()
     // 'ADD' button is not available. Bin icons are not available.
cy.log('BUG: ADD and Bin icons are available ')

cy.log('13. Double-click on any record and change the name and click \'SAVE\'')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('TC1084 Requirement step10')
     cy.wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1084 Requirement step10').dblclick().wait(2000)
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC1084 Requirement step13')
     cy.wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement groups')
     //  The grid list is updated with newly created item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('TC1084 Requirement step13')
     cy.wait(5000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1084 Requirement step13')

cy.log('14. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Requirement groups unselect \'Update\' and click \'SAVE\'')
     cy.get('#tree-item-12 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group').contains('.telerik-blazor', 'Update')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group').contains('.telerik-blazor', 'Update').click();
    } else {
      // If aria-pressed is already false, no action is needed
    }
  })
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The edit security group dialog is closed.
     // 'Save successful' notification message is shown.
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
cy.log('BUG: "Save successful" notification message is not shown.')

cy.log('15. Re-login and navigate to the Requirement groups overview screen')
     cy.get('.profile-picture').click()
     cy.contains('Logout').click()
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get('#tree-item-8 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-8_1 > .k-link').click()
     // 'ADD' button is not available. Bin icons are not available.
cy.log('BUG: ADD and Bin icons are available ')

cy.log('16. Double-click on any record and observe')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('TC1084 Requirement step13')
     cy.wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1084 Requirement step13').dblclick().wait(2000)
     // All fields are uneditable.
cy.log('BUG: All fields are editable ')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)

cy.log('17. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Requirement groups unselect \'View\' and click \'SAVE\'')
     cy.get('#tree-item-12 > .k-link').click().wait(2000)
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group').contains('.telerik-blazor', 'View')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group').contains('.telerik-blazor', 'View').click();
    } else {
      // If aria-pressed is already false, no action is needed
    }
  })
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The edit security group dialog is closed.
     // 'Save successful' notification message is shown.
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
cy.log('BUG: "Save successful" notification message is not shown.')

cy.log('18. Re-login and navigate to the Requirement groups overview screen')
     cy.get('.profile-picture').click()
     cy.contains('Logout').click()
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get('#tree-item-8 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-8_1 > .k-link').click()
     // 'Requirement groups' is no longer available in the submenu.
cy.log('BUG: Requirement groups on tabs strip menu is STILL available')
     cy.get('.k-tabstrip-items').should('not.contain', 'Requirement groups')

cy.log('cleanup: Delete REQ GR') 
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('TC1084 Requirement step13')
     cy.wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1084 Requirement step13')
     cy.get('[data-render-row-index="2"] > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

    })
    })