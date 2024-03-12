describe('Requirements > Requirement Types', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
    // There are several items created. One of them has Name = 'Mandatory' and Code = 'MAN'.
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Mandatory')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('MAN')
     cy.get('.k-switch[aria-checked="true"]').should('exist').wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
    })
    // Menu -> Manage section -> Requirements -> Requirement types -> ADD button
it('Validation on Add/Edit Requirement Type', () => {
cy.log('1. Do not fill any field in and click \'SAVE\' button ')
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The dialog remains opened.
     cy.get('.svx-modal-header > div').should('exist').contains('Requirement type')
     //  'Name' and 'Code' text fields are highlighted.
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     //  On hover, the following message is shown:'Name/Code is a required field'
cy.log('BUG: different messages are shown')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').click()
     cy.get('.k-child-animation-container > .telerik-blazor').contains('Name/Code is a required field')
     cy.get('.svx-modal-header').click()
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').click()
     cy.get('.k-child-animation-container > .telerik-blazor').contains('Name/Code is a required field')

cy.log('2. Enter a name that contains 256 or more characters, click \'SAVE\'')
     const longName = 'a'.repeat(256)
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type(longName)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  Both fields remain highlighted.
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     //  The validation message to 'Name' field on hover is changed to ' Name has a maximum of 255 allowed characters.'
cy.log('BUG: different messages are shown')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').click()
     cy.get('.k-child-animation-container > .telerik-blazor').contains('Name has a maximum of 255 allowed characters.')

cy.log('3. Enter \'Mandatory\' into \'Name\' field and \'CMC\' into code field and click \'SAVE\' button ')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').clear().type('Mandatory')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('CMC')
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The dialog remains opened.
cy.log('BUG: dialog closes, record is saved ')
     cy.get('.svx-modal-header > div').should('exist').contains('Requirement type')
     //  'Name' text fields is highlighted.
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     //  On hover, the following message is shown: 'An error has occurred while saving: An item with this name already exists.'
cy.log('BUG: message not shown')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').click()
     cy.get('.k-child-animation-container > .telerik-blazor').contains('An error has occurred while saving: An item with this name already exists.')

cy.log('4. Click CLOSE. Now enter \'Critical\' into \'Name\' field and \'MAN\' into code field and click \'SAVE\' button ')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').clear().type('Critical')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').clear().type('MAN')
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The dialog remains opened.
cy.log('BUG: dialog closes, record is saved ')
     cy.get('.svx-modal-header > div').should('exist').contains('Requirement type')
     //  'Code' text fields is highlighted.
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     //  On hover, the following message is shown: 'An error has occurred while saving: An item with this name already exists.'
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').click()
     cy.get('.k-child-animation-container > .telerik-blazor').contains('An error has occurred while saving: An item with this name already exists.')

cy.log('5. Click CLOSE. Now enter \'Critical\' into \'Name\' field and \'MANDAT\' into code field and click \'SAVE\' button ')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').clear().type('Critical')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').clear().type('MANDAT')
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The dialog remains opened.
     cy.get('.svx-modal-header > div').should('exist').contains('Requirement type')
     //  'Code' text fields remains highlighted.
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     //  On hover, the following message is shown: 'Code has a maximum of 5 allowed characters.'
cy.log('BUG: different messages are shown')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').click()
     cy.get('.k-child-animation-container > .telerik-blazor').contains('Code has a maximum of 5 allowed characters.')

cy.log('6. Provide valid \'Name\' and \'Code\' and click \'SAVE\' button')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').clear().type('TESTING')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('Test').wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The pop-up dialog is closed.
     cy.get('.svx-modal-header > div').should('not.exist')
     //  The user is redirected to the Requirement types overview screen.
     cy.get('.svx-page-header').contains('Requirement types')
     //  Newly created item is available at the bottom of the list.
cy.log('BUG: list not updated automatically, need to refresh')
     cy.get('.k-grid-container > .k-grid-content').then(($gridContent) => {
     // Flag to indicate if the record is found
     let recordFound = false;
     // Iterate over each row in the grid
     cy.wrap($gridContent).find('tr').each(($row) => {
      // Check if the row contains the record name "TESTING"
      cy.wrap($row).invoke('text').then((rowContent) => {
        if (rowContent.includes('TESTING')) {
          // If the row contains the record name "TESTING", set recordFound flag to true
          recordFound = true;
          // Check if there are no rows after this row
          if ($row.nextAll().length === 0) {
            // If there are no rows after this row, log success
            cy.log('The "TESTING" record is in the last row, and there are no rows after it.');
          } else {
            // If there are rows after this row, fail the test
            throw new Error('The "TESTING" record is in the last row, but there are rows after it.');
          }
        }
      });
    }).then(() => {
      // Assert that the record is found in at least one row
      expect(recordFound).to.be.true;
    });
  });
  
     cy.log('cleanup')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Mandatory').wait(4000)
     cy.get('[data-col-index="2"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('MAN').wait(4000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('TESTING').wait(4000)
     cy.get('[data-col-index="2"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Test').wait(4000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
     
    })
    })