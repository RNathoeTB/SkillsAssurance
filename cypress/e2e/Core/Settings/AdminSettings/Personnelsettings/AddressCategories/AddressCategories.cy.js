describe('AddressCategories', () => {
    beforeEach(() => {
      // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
      cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
      cy.get('#Username').type('Richard')
      cy.get('#Password').type('Nathoe')
      cy.get('#Login').click()  
    })
  
  
  it.only('Add Address Category', () => {
      cy.log('1. Observe the grid')
      cy.get('#tree-item-12 > .k-link > .k-item-text').click()
      cy.contains('Personnel settings').click()
      cy.contains('Address categories').click()
      cy.get('.svx-grid').contains('th', 'Name').should('exist')
      cy.get('.svx-grid').contains('th', 'Work').should('exist')
  
      cy.log('2. Click on \'ADD\' button')
      cy.get('.svx-button > .telerik-blazor').click()
      cy.get('.svx-modal-header > div').contains('Address category').should('be.visible')
      cy.get('.input-group > .k-textbox').should('exist')
      cy.get(':nth-child(2) > .svx-formfield-content').should('exist')
      cy.get('input[type="checkbox"]').should('exist');
      cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor > .k-button-text').should('exist').should('have.text', 'Cancel')
      cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').should('exist').contains('Save')

      cy.log('3. Provide valid address category name and click \'CANCEL\'')
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

      cy.log('Click \'ADD\', provide valid address category name and click \'SAVE\' button ')
      cy.get('.svx-button > .telerik-blazor').click()
      cy.get('.input-group > .k-textbox').type('WorkARTAdressCat')
      cy.wait(1000)
      cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
      // Check if the notification containing "Save successful" text is visible
      cy.get('.k-notification-content').contains('Save successful').should('be.visible')
      cy.get('.k-tabstrip-items').should('contain', 'Address categories')

      cy.log('5. Observe the grid list')
      // app contains Bug, this is extra step to refresh page, not updated automatically
      cy.get('#tree-item-12 > .k-link > .k-item-text').click()
      cy.contains('Personnel settings').click()
      cy.contains('Address categories').click()
      // The list is updated by newly created email categories.
      cy.get('.k-grid-content').should('contain', 'WorkARTAdressCat')
  
      cy.log('6. Observe the record')
      // 'False' is populated in 'Work' column.
      cy.get('.k-grid-content').should('contain', 'False')

      cy.log('7. Double click on "Work" category, check "Work" checkbox and click on \'SAVE\' button')
      cy.contains('WorkARTAdressCat').dblclick()
      cy.get('.k-checkbox-wrap').click()
      cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
      cy.log('app contains Bug, this is extra step to refresh page, not updated automatically')
      // 
      //cy.get('#tree-item-12 > .k-link > .k-item-text').click()
      //cy.contains('Personnel settings').click()
      //cy.contains('Address categories').click()

      // 'True' is populated in 'Work' column.
      let foundRow = false;

      cy.get('.k-master-row').each(($row) => {
        cy.wrap($row).within(() => {
          const rowText = $row.text();
          if (rowText.includes('WorkARTAdressCat') && rowText.includes('True')) {
            foundRow = true;
          }
        });
      }).then(() => {
        expect(foundRow).to.be.true;
      });

      cy.log('8. Go to Personnel -> Personnel and open any employee profile.')
      cy.get('#tree-item-4 > .k-link').click()
      cy.get('#tree-item-4_0 > .k-link').click()
      cy.wait(5000)
      // Employee profile is opened in Details tab 
      //cy.get('[data-render-row-index="2"] > [data-col-index="1"] > .span-nav').click()
      //cy.get('.k-tabstrip-items').contains('Details') 

      cy.get('.k-filter-row > [data-col-index="1"]').type('Rich Nathoe ()')
      cy.wait(3000)
      cy.get('.k-grid-content').contains('Rich Nathoe ()').click()
      cy.get('.k-tabstrip-items').contains('Details').click()

      cy.log('9. Click \'EDIT\' button and on \'Contact info\' section expand \'Address(es)\'. Click on the \'Add address\' link and open the \'Category\' drop down.')
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click() //edit
      cy.contains('Address(es)').click()
      cy.get(':nth-child(3) > details > .svx-panelbar-item-footer > .svx-button > .k-button > .telerik-blazor').click() //Add
     
      cy.get(':nth-child(3) > details > :nth-child(2) > .svx-panelbar-item-template > .svx-panelbar-type-section > :nth-child(1)').within(() => {
        cy.get('button.telerik-blazor').click();
      });
      
      cy.wait(3000)
      // List of predefined categories is displayed. Email category just created can be selected.
      cy.contains('.k-list-item-text', 'WorkARTAdressCat').click()
    
  
      cy.log('10. Select the newly created category, fill in all other required fields and press \'SAVE\'')
      //not clear which are the required fields
      cy.get(':nth-child(1) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group').eq(1).type('Holland')
      cy.get('.svx-panelbar-type-section > :nth-child(5)').within(() => {
        cy.get('input.k-input-inner').type('Suriname');
        cy.wait(3000)
        cy.get('input.k-input-inner').type('{enter}')
      });
      
      cy.wait(2000)
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
      cy.contains('WorkARTAdressCat').should('exist')

      //clean up
      cy.get('#tree-item-12 > .k-link > .k-item-text').click()
      cy.contains('Personnel settings').click()
      cy.contains('Address categories').click()
      
        foundRow = false;

        cy.get('.k-master-row').each(($row) => {
        cy.wrap($row).within(() => {
            const rowText = $row.text();
            if (rowText.includes('WorkARTAdressCat') && rowText.includes('True')) {
            foundRow = true;
            
            // Click on the sibling element within the same row
            cy.get('.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-trash').click();
            }
        });
        }).then(() => {
        expect(foundRow).to.be.true;
        });

        cy.get('.k-button-solid-primary').click() //click OK
        cy.contains('WorkARTAdressCat').should('not.exist')

    })
  
  })