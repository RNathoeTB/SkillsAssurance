describe('Evidences > Certificates', () => {
    beforeEach(() => {
    cy.log('Login')
     // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
      cy.get('#Username').type('Richard')
      cy.get('#Password').type('Test123')
      cy.get('#Login').click()
     //  Test data:'View'/'Create'/'Update'/'Delete' permissions to 'Certificates' are applied.
     cy.get('#tree-item-12 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block > .svx-permission-block-body > :nth-child(1) > .left-column').contains('Certificates')
     cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block > .svx-permission-block-body > :nth-child(1) > .right-column > .k-button-group > .k-group-end')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'false') {
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block > .svx-permission-block-body > :nth-child(1) > .right-column > .k-button-group > .k-group-end').click();
    } else {
     // If aria-pressed is already false, no action is needed
    } 
    })  
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()

    })
     //  Evidences -> Certificates
it('Permissions Handling of Certificates', () => {
cy.log('1. Observe the screen')
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
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
     cy.get('.dismiss').click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').should('exist')

cy.log('2. Click \'ADD\', fill all required fields and click \'SAVE\'')
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click().wait(3000)
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('TC2575Certificates')
     cy.wait(2000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The user is redirected to the 'Certificates' overview screen.
     cy.get('.svx-page-header-title').contains('Certificates')
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link').contains('Name')
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link').contains('Code')
     //  The grid list is updated with newly created item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC2575Certificates')
     cy.wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2575Certificates')

cy.log('3. Double-click on the just added record and change the name and click \'SAVE\'')
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2575Certificates').dblclick()
     //  The user is redirected to the 'Personnel statuses' overview screen.
     cy.get('.svx-page-header').contains('TC2575Certificates')
     //  change the name and click 'SAVE'
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC2575Certificateschanged')
     cy.wait(2000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  The user is redirected to the 'Certificates' overview screen.
     cy.get('.svx-page-header-title').contains('Certificates')
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link').contains('Name')
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link').contains('Code')
     //  The grid list is updated with updated item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC2575Certificateschanged')
     cy.wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2575Certificateschanged')
      
cy.log('4. Click on the bin icon of the just created/updated item.')
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2575Certificateschanged')
     cy.get('[data-render-row-index="2"] > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     // A pop-up is displayed: 'Are you sure you want to delete the selected item?'
     cy.contains(' Are you sure you want to delete the selected item?').should('exist')
     //  'NO' and 'YES' buttons are available.
     cy.get('.k-actions').contains('NO')
     cy.get('.k-actions').contains('YES')
cy.log('BUG: CANCEL & OK is available ')

cy.log('5. Click \'Yes\'')
     cy.get('.k-button-solid-primary').click()
     //  The user is redirected to the 'Certificates' overview screen.
     cy.get('.svx-page-header-title').contains('Certificates')
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link').contains('Name')
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link').contains('Code')
     //  The just added record is no longer available on the grid list.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('TC2575Certificateschanged')
     cy.get('.k-grid-norecords > .k-table-td').should('exist').contains('No items to display')
 
cy.log('4. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab')
     cy.get('#tree-item-12 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get('[style="display:flex; flex-wrap:wrap;"] > :nth-child(2) > :nth-child(2)').contains('Evidences')
     cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block > .svx-permission-block-body > :nth-child(1) > .left-column').contains('Certificates')
     cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block > .svx-permission-block-body > :nth-child(1) > .right-column').within(() => {
        cy.contains('View').should('exist');
        cy.contains('Update').should('exist');
        cy.contains('Create').should('exist');
        cy.contains('Delete').should('exist');
    })

    cy.log('7. Unselect \'Delete\' and click \'SAVE\' button')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block > .svx-permission-block-body > :nth-child(1) > .right-column > .k-button-group > .k-group-end')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
      cy.get(':nth-child(4) > .svx-permission-block-body > :nth-child(7) > .right-column > .k-button-group > .k-group-end').click();
    } else {
      // If aria-pressed is already false, no action is needed
    }
  })
     
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The edit security group dialog is closed.
     // 'Save successful' notification message is shown.
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
cy.log('BUG: "Save successful" notification message is not shown.')

cy.log('8. Re-login and navigate to the Certificates overview')
     cy.get('.profile-picture').click()
     cy.contains('Logout').click()
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     //  User is not able to remove grid records.
     //  Bin icons are not available. 
cy.log('BUG: ADD and Bin icons are available ')
     //  'ADD' button is available.
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').should('exist')

     cy.log('9. Click \'ADD\', fill all required fields and click \'SAVE\'')
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click().wait(3000)
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('TC2575Certificatesstep9')
     cy.wait(2000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The user is redirected to the 'Certificates' overview screen.
     cy.get('.svx-page-header-title').contains('Certificates')
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link').contains('Name')
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link').contains('Code')
     //  The grid list is updated with newly created item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC2575Certificatesstep9')
     cy.wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2575Certificatesstep9')

     cy.log('10. Double-click on the just added record and change the name and click \'SAVE\'')
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2575Certificatesstep9').dblclick()
     //  The user is redirected to the 'Personnel statuses' overview screen.
     cy.get('.svx-page-header').contains('TC2575Certificatesstep9')
     //  change the name and click 'SAVE'
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC2575Certificateschanged')
     cy.wait(2000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  The user is redirected to the 'Certificates' overview screen.
     cy.get('.svx-page-header-title').contains('Certificates')
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link').contains('Name')
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link').contains('Code')
     //  The grid list is updated with updated item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC2575Certificateschanged')
     cy.wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2575Certificateschanged')

     cy.log('11. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Certificates unselect \'Create\' and click \'SAVE\'')
     cy.get('#tree-item-12 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .svx-permission-block > .svx-permission-block-body > :nth-child(2) > .right-column').contains('.telerik-blazor', 'Create')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
      cy.get(':nth-child(4) > .svx-permission-block-body > :nth-child(7) > .right-column > .k-button-group > .k-group-end').click();
    } else {
      // If aria-pressed is already false, no action is needed
    }
  })
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The edit security group dialog is closed.
     // 'Save successful' notification message is shown.
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
cy.log('BUG: "Save successful" notification message is not shown.')

cy.log('12. Re-login and navigate to the Certificates overview screen')
     cy.get('.profile-picture').click()
     cy.contains('Logout').click() 
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     // 'ADD' button is not available. Bin icons are not available.
cy.log('BUG, ADD and Bin icons are available ')

cy.log('13. Double-click on any record and change the name and click \'SAVE\'')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC2575Certificateschanged')
     cy.wait(2000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2575Certificateschanged').dblclick().wait(2000)
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC2575Certificateschangedstep13')
     cy.wait(2000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  The user is redirected to the 'Certificates' overview screen.
     cy.get('.svx-page-header-title').contains('Certificates')
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link').contains('Name')
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link').contains('Code')
     //  The grid list is updated with updated item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC2575Certificateschangedstep13')
     cy.wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2575Certificateschangedstep13')   

     cy.log('14. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Personnel statuses unselect \'Update\' and click \'SAVE\'')
     cy.get('#tree-item-12 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(4) > .svx-permission-block-body > :nth-child(7) > .right-column').contains('.telerik-blazor', 'Update')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
     cy.get(':nth-child(4) > .svx-permission-block-body > :nth-child(7) > .right-column').contains('.telerik-blazor', 'Update').click();
    } else {
      // If aria-pressed is already false, no action is needed
    }
  })
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The edit security group dialog is closed.
     // 'Save successful' notification message is shown.
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
cy.log('BUG: "Save successful" notification message is not shown.')

cy.log('15. Re-login and navigate to the Certificates overview screen')
     cy.get('.profile-picture').click()
     cy.contains('Logout').click() 
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     // 'ADD' button is not available. Bin icons are not available.
cy.log('BUG, ADD and Bin icons are available ')

cy.log('16. Double-click on any record and observe')
     // All fields are uneditable.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').clear().type('TC2575Certificateschangedstep13')
     cy.wait(2000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick().wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
cy.log('BUG, All fields are editable ')

cy.log('17. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Certificates unselect \'View\' and click \'SAVE\'')
     cy.get('#tree-item-12 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
     cy.wait(2000)
     cy.get('.k-link > .svx-font-2').eq(1).click()
     cy.get('.k-link > .svx-font-2').eq(5).click()
     cy.get(':nth-child(4) > .svx-permission-block-body > :nth-child(7) > .right-column').contains('.telerik-blazor', 'View')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
     cy.get(':nth-child(4) > .svx-permission-block-body > :nth-child(7) > .right-column').contains('.telerik-blazor', 'View').click();
    } else {
      // If aria-pressed is already false, no action is needed
    }
  })
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The edit security group dialog is closed.
     // 'Save successful' notification message is shown.
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
cy.log('BUG: "Save successful" notification message is not shown.')

cy.log('18. Re-login and navigate to Evidences -> Certificates')
     cy.get('.profile-picture').click()
     cy.contains('Logout').click() 
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     //  'Certificates' on tabs strip menu is no longer available.
cy.log('BUG: Certificates on tabs strip menu is STILL available')
     cy.get('.k-tabstrip-items').should('not.contain', 'Certificates')

cy.log('cleanup: Delete Certificates') 
     cy.get('.k-tabstrip-items').contains('Certificates').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC2575Certificateschangedstep13')
     cy.wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2575Certificateschangedstep13')
     cy.get('[data-render-row-index="2"] > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
    })
    })