describe('Requirements > Requirement Types', () => {
    beforeEach(() => {
     cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     // The user is logged in as an admin
     // 'View'/'Create'/'Update'/'Delete' permissions to 'Requirement types' are applied.
     cy.get('#tree-item-12 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(2) > .svx-permission-block-body > :nth-child(4) > .right-column > .k-button-group > .k-group-end')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'false') {
        cy.get(':nth-child(2) > .svx-permission-block-body > :nth-child(4) > .right-column > .k-button-group > .k-group-end').click();
    } else {
     // If aria-pressed is already false, no action is needed
    } 
    })  
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get('.dismiss').click().wait(3000)
    })
    
it('Permissions Handling of Requirement types ', () => {
cy.log('1. Observe the screen ')
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click().wait(3000)
     //  The grid with the list of created items is shown.




     // Each record contains a 'Bucket' icon.



     // 'ADD' button is present.
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').should('exist').contains('Add')

cy.log('2. Click \'ADD\', fill all required fields and click \'SAVE\'')
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('TC1056reqtype')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('test')
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     //  The user is redirected to the 'Requirement types' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement types')
     cy.get('[data-text="Name"]').contains('Name')
     cy.get('[data-text="Code"]').contains('Code')
     //  The grid list is updated with newly created item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('TC1056reqtype').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1056reqtype')
     cy.get('.k-master-row > [data-col-index="2"]').contains('test')

cy.log('3. Double-click on the just added record and change the name and click \'SAVE\'')
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1056reqtype').dblclick()
     //  change the name and click 'SAVE'
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC1056reqtypechanged').wait(3000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement types')
     //  The grid list is updated with updated item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('TC1056reqtypechanged').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1056reqtypechanged')
     cy.get('.k-master-row > [data-col-index="2"]').contains('test')

cy.log('4. Click on the bin icon of the just created/updated item.')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     // A pop-up is displayed: 'Are you sure you want to delete the selected item?'
     cy.contains(' Are you sure you want to delete the selected item?').should('exist')
     //  'NO' and 'YES' buttons are available.
cy.log('BUG: CANCEL & OK is available ')
     //  cy.get('.k-actions').contains('NO')
     //  cy.get('.k-actions').contains('YES')


cy.log('5. Click \'Yes\'')
     cy.get('.k-button-solid-primary').click().wait(3000)
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement types')
     //  The just added record is no longer available on the grid list.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('TC1056reqtypechanged').wait(3000)
     cy.get('.k-grid-norecords > .k-table-td').contains('No items to display')

cy.log('6. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab')
     cy.get('#tree-item-12 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     //  The corresponding screen is opened.
     //  Inside Organization > Requirements section, 'View'/'Update'/'Create'/'Delete' buttons are available next to 'Requirement types' field.
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block-header').contains('Requirements')
     cy.get(':nth-child(2) > .svx-permission-block-body > :nth-child(4) > .left-column').contains('Requirement types')
     cy.get(':nth-child(2) > .svx-permission-block-body > :nth-child(4) > .right-column').within(() => {
     cy.contains('View').should('exist')
     cy.contains('Update').should('exist')
     cy.contains('Create').should('exist')
     cy.contains('Delete').should('exist')
    })
    
cy.log('7. Unselect \'Delete\' and click \'SAVE\' button')
     cy.get(':nth-child(2) > .svx-permission-block-body > :nth-child(4) > .right-column > .k-button-group > .k-group-end')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
     cy.get(':nth-child(2) > .svx-permission-block-body > :nth-child(4) > .right-column > .k-button-group > .k-group-end').click();
    } else {
      // If aria-pressed is already false, no action is needed
    }
  })
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The edit security group dialog is closed.
     // 'Save successful' notification message is shown.
    //  cy.contains('Save succesful')
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
cy.log('BUG: "Save successful" notification message is not shown.')

cy.log('8. Re-login and navigate to the Requirement groups overview')
     cy.get('.profile-picture').click()
     cy.contains('Logout').click()
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click().wait(3000)
     //  User is not able to remove grid records.
     //  Bin icons are not available. 
cy.log('BUG: Bin icons are available ')
     //  'ADD' button is available.
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').should('exist')
     
cy.log('9. Click \'ADD\', fill all required fields and click \'SAVE\'')
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('TC1056reqtypestep9')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('test')
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     //  The user is redirected to the 'Requirement types' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement types')
     //  The grid list is updated with newly created item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('TC1056reqtypestep9').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1056reqtypestep9')
     cy.get('.k-master-row > [data-col-index="2"]').contains('test')

cy.log('10. Double-click on the just added record and change the name and click \'SAVE\'')
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1056reqtypestep9').dblclick()
     //  change the name and click 'SAVE'
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC1056reqtypestep10').wait(3000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement types')
     //  The grid list is updated with updated item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('TC1056reqtypestep10').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1056reqtypestep10')
     cy.get('.k-master-row > [data-col-index="2"]').contains('test')

cy.log('11. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Requirement types unselect \'Create\' and click \'SAVE\'')
     cy.get('#tree-item-12 > .k-link').click().wait(2000)
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(2) > .svx-permission-block-body > :nth-child(4) > .right-column').contains('.telerik-blazor', 'Create')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
        cy.get(':nth-child(2) > .svx-permission-block-body > :nth-child(4) > .right-column').contains('.telerik-blazor', 'Create').click();
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
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click().wait(3000)
     // 'ADD' button is not available. Bin icons are not available.
cy.log('BUG: ADD and Bin icons are available ')

cy.log('13. Double-click on any record and change the name and click \'SAVE\'')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('TC1056reqtypestep10').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1056reqtypestep10').dblclick()
     //  change the name and click 'SAVE'
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC1056reqtypestep13').wait(3000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     //  The user is redirected to the 'Requirement groups' overview screen.
     cy.get('.svx-page-header-title').contains('Requirement types')
     //  The grid list is updated with updated item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('TC1056reqtypestep13').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1056reqtypestep13')
     cy.get('.k-master-row > [data-col-index="2"]').contains('test')

cy.log('14. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Requirement types unselect \'Update\' and click \'SAVE\'')
     cy.get('#tree-item-12 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(2) > .svx-permission-block-body > :nth-child(4) > .right-column').contains('.telerik-blazor', 'Update')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
        cy.get(':nth-child(2) > .svx-permission-block-body > :nth-child(4) > .right-column').contains('.telerik-blazor', 'Update').click();
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
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click().wait(3000)
     // 'ADD' button is not available. Bin icons are not available.
cy.log('BUG: ADD and Bin icons are available ')

cy.log('16. Double-click on any record and observe')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('TC1056reqtypestep13').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1056reqtypestep13').dblclick().wait(2000)
     // All fields are uneditable.
cy.log('BUG: All fields are editable ')
     cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').click().wait(3000)

cy.log('17. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Requirement types unselect \'View\' and click \'SAVE\'')
     cy.get('#tree-item-12 > .k-link').click().wait(2000)
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(2) > .svx-permission-block-body > :nth-child(4) > .right-column').contains('.telerik-blazor', 'View')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
        cy.get(':nth-child(2) > .svx-permission-block-body > :nth-child(4) > .right-column').contains('.telerik-blazor', 'View').click();
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
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click().wait(3000)
     // 'Requirement groups' is no longer available in the submenu.
cy.log('BUG: Requirement groups on tabs strip menu is STILL available')
    //  cy.get('.k-panelbar-group').should('not.contain', 'Requirement types')

cy.log('cleanup: Delete REQ TYPE') 
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('TC1056reqtypestep13').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1056reqtypestep13')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

    })
    })