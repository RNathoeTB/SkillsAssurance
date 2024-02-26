describe('Settings', () => {
  beforeEach(() => {
    // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
    cy.log('Login')
    // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Test123')
    cy.get('#Login').click()  

  cy.log('Cleanup')
   cy.get('#tree-item-12 > .k-link > .k-item-text').click()
   cy.contains('Personnel settings').click()
   cy.contains('Email categories').click()
   cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper').type('WorkART')
   cy.wait(1000)
   cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
   cy.get('.k-button-solid-primary').click()

  })


it('Add Email Category', () => {
    cy.log('1. Observe the grid')
    cy.get('#tree-item-12 > .k-link > .k-item-text').click()
    cy.contains('Personnel settings').click()
    cy.contains('Email categories').click()
    cy.get('[data-text="Name"] > .k-cell-inner > .k-link > .k-column-title').contains('Name')
    cy.get('[data-text="Work"] > .k-cell-inner > .k-link > .k-column-title').contains('Work')

    
    cy.log('2. Click on \'ADD\' button')
    cy.get('.svx-button > .telerik-blazor').click()
    cy.get('.svx-modal-header > div').contains('Email category').should('be.visible')
    cy.get('.input-group > .k-textbox').should('exist')
    cy.get(':nth-child(2) > .svx-formfield-content').should('exist')
    cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor > .k-button-text').should('exist').should('have.text', 'Cancel')
    cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').should('exist').contains('Save')
    
    cy.log('3. Provide valid email category name and click \'CANCEL\'')
    cy.get('.input-group > .k-textbox').type('TEST')
    // Click Cancel
    cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').click()
    // Assertion 1: Verify the pop-up dialog is closed
    cy.get('.svx-modal-header > div').should('not.exist')
    // Assertion 2: Verify the user is redirected back to the email categories overview screen
    cy.get('[data-text="Name"] > .k-cell-inner > .k-link').should('exist')
    cy.get('[data-text="Work"] > .k-cell-inner > .k-link').should('exist')
    cy.get('.svx-grid-footer-template').should('exist')
    // Assertion 3: Verify new email category is not created
    cy.get('.k-grid-content').contains('TEST').should('not.exist')

    cy.log('4. Click \'ADD\', provide valid name "WorkART" and click \'SAVE\' button')
    cy.get('.svx-button > .telerik-blazor').click()
    cy.get('.input-group > .k-textbox').type('WorkART')
    cy.wait(1000)
    cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
    // Check if the notification containing "Save successful" text is visible
    cy.get('.k-notification-content').contains('Save successful').should('be.visible')
    cy.get('.k-tabstrip-items').should('contain', 'Email categories')
  
    cy.log('5. Observe the grid list')
    // app contains Bug, this is extra step to refresh page, not updated automatically
    cy.log('app contains Bug, this is extra step to refresh page, not updated automatically')
    //cy.get('#tree-item-12 > .k-link > .k-item-text').click()
    //cy.contains('Personnel settings').click()
    //cy.contains('Email categories').click()
    // The list is updated by newly created email categories.
    cy.get('.k-grid-content').should('contain', 'WorkART')

    cy.log('6. Observe the record')
    // 'False' is populated in 'Work' column.
    cy.get('.k-grid-content').should('contain', 'False')

    cy.log('7. Double click on "Work" category, check "Work" checkbox and click on \'SAVE\' button')
    cy.get('[data-render-row-index="5"] > [data-col-index="1"]').dblclick()
    cy.get('.k-checkbox-wrap').click()
    cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
    cy.log('app contains Bug, this is extra step to refresh page, not updated automatically')
    //cy.get('#tree-item-12 > .k-link > .k-item-text').click()
    //cy.contains('Personnel settings').click()
    //cy.contains('Email categories').click()
    // 'True' is populated in 'Work' column.
    cy.get('[data-render-row-index="5"] > [data-col-index="2"]').should('contain', 'True')

    cy.log('8. Go to Personnel -> Personnel and open any employee profile.')
    cy.get('#tree-item-4 > .k-link').click()
    cy.get('#tree-item-4_0 > .k-link').click()

    // Employee profile is opened in Details tab 
    // cy.get('.k-grid-content').contains('Frederike Lindeyer ()').click()
    cy.get('.k-filter-row > [data-col-index="1"]').type('Rich Test123 ()')
    cy.get('.k-grid-content').contains('Rich Test123 ()').click()
    cy.get('.k-tabstrip-items').contains('Details').click()

    cy.log('9. Click \'EDIT\' button and on \'Contact info\' section expand \'Email\(s)\'. Click on the \'Add email\' link and open the \'Category\' drop down.')
    cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
    cy.get(':nth-child(2) > details > summary > .k-icon').click()
    cy.get(':nth-child(2) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
   
    cy.get('button.telerik-blazor').eq(4).click()
    cy.wait(1000)
    // List of predefined categories is displayed. Email category just created can be selected.
    cy.contains('.k-list-item-text', 'WorkART').click()
  

    cy.log('10. Select the newly created category, fill in all other required fields and press \'SAVE\'')
    //not clear which are the required fields
    cy.get(':nth-child(1) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group').type('testauto@outlook.nl')
    cy.wait(2000)
    cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()


  })

})