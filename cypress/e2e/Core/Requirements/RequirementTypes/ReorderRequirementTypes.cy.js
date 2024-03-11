describe('Requirements > Requirement Types', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     //  There are several items created
     //  certificate "Duplicate" is created
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('Duplicate').wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  Requirement type Prio1 & Prio 2 are created
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Prio 1')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('AAAA')
     cy.get('.k-switch[aria-checked="true"]').should('exist').wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)

     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Prio 2')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('BBBB')
     cy.get('.k-switch[aria-checked="true"]').should('exist').wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
    //  Requirements are created
     cy.get('#tree-item-8_0 > .k-link').click()
     cy.get('.svx-button > .telerik-blazor').click().wait(3000)
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('Certificate').wait(3000)
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(1).type('Duplicate').wait(4000)
     cy.get('input.k-input-inner').eq(1).wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(2).type('Prio 1').wait(3000)
     cy.get('input.k-input-inner').eq(2).wait(3000).type('{enter}') 
     cy.get('input.k-input-inner').eq(6).wait(3000).type('Europe').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(5000)

     cy.get('#tree-item-8_1 > .k-link').click()
     cy.get('#tree-item-8_0 > .k-link').click()
     cy.get('.svx-button > .telerik-blazor').click().wait(3000)
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('Certificate').wait(3000)
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(1).type('Duplicate').wait(3000)
     cy.get('input.k-input-inner').eq(1).wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(2).type('Prio 2').wait(3000)
     cy.get('input.k-input-inner').eq(2).wait(3000).type('{enter}') 
     cy.get('input.k-input-inner').eq(6).wait(3000).type('Europe').wait(3000).type('{enter}')
     cy.get('.dismiss').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click()

     // Each is used by a requirement that has been applied to a specific Employee.
     // Employee has 2 'duplicate' requirements defined (not yet acquired):
     // 'Duplicate' certificate having requirement type 'Prio 1' and validity overruling of 24 months
     // 'Duplicate' certificate having requirement type 'Prio 2' and using certificate definition validity of 36 months
    })
    
it('Reorder Requirement Types', () => {
     cy.log('1. Observe the grid')
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click()
     // Requirement type items are ordered based on priority. Highest priority is on top. Button  'Change the order' is available.
     cy.get('.svx-grid-footer-buttons > :nth-child(2) > .k-button').should('exist').contains('Change the order')
     // 'Prio 1' is higher in the list than 'Prio 2' 
cy.get('.k-grid-content').within(() => {
    // Find all rows in the grid
    cy.get('tr').each(($row, index) => {
      if (index === 0) {
        return; // Skip the header row if present
      }
      // Find the element representing Prio 1 in the row
      cy.wrap($row).find('[data-col-index="1"]').invoke('text').then((currentText) => {
        if (currentText.trim() === 'Prio 1') {
          // Find the element representing Prio 2 in the next row
          cy.get('tr').eq(index + 1).find('[data-col-index="1"]').invoke('text').then((nextText) => {
            // Assert that Prio 1 is above Prio 2
            expect(nextText.trim()).to.equal('Prio 2');
          });
        }
      });
    });
  });
  
cy.log('2. Navigate to Personnel > Employees and open specific Employee. Observe the Certificates tab.')
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Ritchie Nathoe').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Ritchie Nathoe').dblclick().wait(3000)
     cy.get(' .k-link > .svx-font-2').eq(3).click().wait(3000)
     // Certificate 'duplicate' is visible once in grid, with type code indication belonging to Prio 1 requirement information.
     cy.get('[data-col-index="3"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Duplicate').wait(3000)
     cy.get('.grid-pagination-information > label').contains('of 1 items')
     cy.get('.condition').contains('AAAA')

cy.log('3. Double-click on the missing requirement and fill in the required field and \'SAVE\'')
cy.get('.k-master-row > [data-col-index="1"]').dblclick()
// User is redirected to the Certificates overview. 'Duplicate' shows as acquired, having applied a 24 months validity (belonging to 'Prio 1' req type).
cy.get(':nth-child(1) > .svx-formfield-content > .k-datepicker').find('.telerik-blazor').click()
cy.get('.k-calendar-nav-today > :nth-child(1) > .k-button-text').click()





     cy.log('cleanup')
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Prio 1').wait(4000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Prio 2').wait(4000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Duplicate').wait(4000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Duplicate').wait(4000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').clear().type('Duplicate').wait(4000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
    })
    })