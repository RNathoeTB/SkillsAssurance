describe('Settings > Personnel settings', () => {
    beforeEach(() => {
      cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
      cy.get('#Username').type('Richard')
      cy.get('#Password').type('Test123')
      cy.get('#Login').click()

     // 'Certificate 1' is created and set-up as requirement in the application.
     // At least one Employee has the requirement assigned.
     // 'Certificate 2' is created and is not set-up as requirement.
     // cy.get('#tree-item-10 > .k-link').click()
     // cy.get('#tree-item-10_0 > .k-link').click()
     // cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     // cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('Certificate 1').wait(1000)
     // cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // cy.wait(2000)
     // cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     // cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('Certificate 2').wait(1000)
     // cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     
     // cy.get('#tree-item-8 > .k-link').click()
     // cy.get('#tree-item-8_0 > .k-link').click()
     // cy.get('.svx-button > .telerik-blazor').click()
     // cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('Certificate')
     // cy.wait(3000)
     // cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('{enter}')
     // cy.get('input.k-input-inner').eq(2).type('Company Mandatory')
     // cy.wait(3000)
     // cy.get('input.k-input-inner').eq(2).type('{enter}')
     // cy.get('input.k-input-inner').eq(6).type('Europe')
     // cy.wait(3000)
     // cy.get('input.k-input-inner').eq(6).type('{enter}')
     // cy.get('input.k-input-inner').eq(1).type('Certificate 1')
     // cy.wait(3000)
     // cy.get('input.k-input-inner').eq(1).type('{enter}')
     // cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()

     // cy.get('#tree-item-4 > .k-link').click()
     // cy.get('#tree-item-4_0 > .k-link').click()
     // cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Ritchie Nathoe')
     // cy.get('.k-master-row > [data-col-index="1"]').should('contain', 'Ritchie Nathoe').dblclick()
     // cy.get(' .k-link > .svx-font-2').eq(3).click()
     // cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     // cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .k-combobox').type('Certificate 1').wait(3000).type('{downarrow}').type('{enter}')
     // cy.get(':nth-child(1) > .svx-formfield-content > .k-datepicker').find('.telerik-blazor.k-button.k-input-button.k-button-solid.k-button-md.k-button-solid-base.k-icon-button').click().wait(1000)
     // cy.get('.k-calendar-nav-today > :nth-child(1) > .k-button-text').click()
     // cy.get(':nth-child(2) > .svx-formfield-content > .k-datepicker').find('.telerik-blazor.k-button.k-input-button.k-button-solid.k-button-md.k-button-solid-base.k-icon-button').click().wait(1000)
     // cy.get('.k-calendar-nav-today > :nth-child(1) > .k-button-text').click()
     // cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // cy.wait(2000)

    })
    
    it('Edit Certificate', () => {
// cy.log('1. Double-click on \'Certificate 1\'')
//       cy.get('#tree-item-10 > .k-link').click()
//       cy.get('#tree-item-10_0 > .k-link').click()
//       cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Certificate 1')
//       cy.get('.k-master-row > [data-col-index="1"]').contains('Certificate 1').dblclick()
//       //  The edit screen is opened showing the filled-in data. All fields are editable.

// cy.log('2. Try to disable \'Active\'')
//       // Unable to disable 'Active' and information text is shown: "This evidence is used as a requirement. Please refer to the Requirements section".
     
// cy.log('3. Change the Name and click \'SAVE\'')
//       cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Certificate 1 changed').wait(2000)
//       cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
//       cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Certificate 1 changed').wait(5000)
//       cy.get('.k-grid-content').contains('Certificate 1 changed')
    
// cy.log('4. Navigate to Personnel > Employees and open the profile of the Employee having the just edited certificate as requirement. Observe the Evidences > Certificates tab.')
//       cy.get('#tree-item-4 > .k-link').click()
//       cy.get('#tree-item-4_0 > .k-link').click().wait(2000)
//       cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Ritchie Nathoe').wait(5000)
//       cy.get('.k-master-row > [data-col-index="1"]').should('contain', 'Ritchie Nathoe').dblclick().wait(2000)
//       cy.get(' .k-link > .svx-font-2').eq(3).click()
//       cy.get('.k-grid-content').contains('Certificate 1 changed')

// cy.log('5. Navigate to Evidences > Certificates. Re-open the record, change the name back to \'Certificate 1\' and change the Code. Click \'SAVE\'')
//       cy.get('#tree-item-10 > .k-link').click()
//       cy.get('#tree-item-10_0 > .k-link').click()
//       cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Certificate 1 changed')
//       cy.get('.k-master-row > [data-col-index="1"]').contains('Certificate 1').dblclick()
//       cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Certificate 1')
//       cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
//       //  The user is redirected to the Certificates overview screen.
//       //  The changes have been successfully saved and show updated in the grid.
//       cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Certificate 1')
//       cy.get('.k-grid-content').contains('Certificate 1')

// cy.log('6. Double-click on \'Certificate 2\'')
//       cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Certificate 2').wait(3000)
//       cy.get('.k-master-row > [data-col-index="1"]').contains('Certificate 2').dblclick() 
//       //  The edit screen is opened showing the filled-in data. All fields are editable.

// cy.log('7. Disable \'Active\' and click \'SAVE\'')
//       cy.get('.k-switch-track').click()
//       cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
//       //  The user is redirected to the Certificates overview screen.
//       //  The change has been successfully saved and the record no longer shows in the grid.
//       cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Certificate 2').wait(5000)
//       cy.get('.k-grid-content').should('not.contain', 'Certificate 2')

cy.log('8. Navigate to Personnel > Employees and open any profile. Open the Certificates subtab and click \'ADD\'. Open the Certificate dropdown.')
      cy.get('#tree-item-4 > .k-link').click()
      cy.get('#tree-item-4_0 > .k-link').click()
      cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Ritchie Nathoe')
      cy.get('.k-master-row > [data-col-index="1"]').should('contain', 'Ritchie Nathoe').dblclick()
      cy.get(' .k-link > .svx-font-2').eq(3).click()
      cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
      cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.telerik-blazor').eq(0).click().wait(3000)

      function scrollDownListContentUntilItemNotExists(itemText) {
          let itemFound = false;
        
          function checkForItemInList() {
            cy.get('.k-list-content').should('be.visible').then(($listContent) => {
              const items = $listContent.find('.k-item');
        
              items.each((index, element) => {
                const currentItemText = Cypress.$(element).text().trim();
                if (currentItemText === itemText) {
                  itemFound = true;
                  return false; // Stop iteration if item found
                }
              });
            });
          }
        
          function scrollAndCheck() {
            cy.get('.k-list-content').scrollTo('bottom').then(() => {
              checkForItemInList();
              if (itemFound) {
                // Fail the test if "Certificate 2" is found
                throw new Error(`Found item: ${itemText}`);
              }
              // Continue scrolling if "Certificate 2" is not found
              scrollAndCheck();
            });
          }
        
          scrollAndCheck();
        }
        
        // Call the function with the item text you want to check for
        scrollDownListContentUntilItemNotExists('Certificate 2');
        









    })
    
    })