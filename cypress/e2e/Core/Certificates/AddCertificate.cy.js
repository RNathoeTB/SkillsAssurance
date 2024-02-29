describe('Evidences > Certificates', () => {
    beforeEach(() => {
     cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
    })
    
    it('Add Certificate', () => {
cy.log('1. Observe the grid')
     // The grid contains the following columns:
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     //  'Name'
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link > .k-column-title').should('have.class', "k-column-title").contains('Name')
     //  'Code'
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link > .k-column-title').should('have.class', "k-column-title").contains('Code')
     // 'Active' 
     cy.get('[data-text="Active"] > .k-cell-inner > .k-link > .k-column-title').should('have.class', "k-column-title").contains('Active')

cy.log('2. Click \'ADD\' button')
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     // The edit screen is opened with the following elements:
     // 'Certificate' title
     cy.get('.svx-page-header-title').should('have.class', "svx-page-header-title svx-font-1").contains('Certificate')
     // 'General' tab 
     cy.get('.k-link > .svx-font-2').eq(0).contains('General')
     // 'General Info' section
     cy.get('.svx-column-block-left > .svx-block > .svx-block-header > div').contains('General info')

cy.log('3. Observe \'General Info\' section')
     // The section contains the following elements:
     // 'Active' switch
     cy.get(':nth-child(1) > .svx-formfield > .svx-formfield-label > label').contains('Active')
     cy.get('.k-switch-track').should('have.class', 'k-switch-track k-rounded-full')
     // 'Name' mandatory field
     cy.get('.svx-block-body > :nth-child(2)').within(() => {cy.get('.required-field').should('exist')
     cy.contains('Name').should('exist'); // Ensure the element contains the text 'Name'
    })
     // 'Code' field
     cy.get('.svx-block-body > :nth-child(3)').within(() => {cy.get('.k-input-inner').should('exist')
     cy.contains('Code').should('exist') // Ensure there is a label element containing the text 'Code'
      })

cy.log('4. Enter a Name and Code and click \'CANCEL\'')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('TC1057Step4')
     cy.get(':nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').type('TC1057')
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.wait(3000)
     // The user is redirected to the Certificates overview screen.
     // The new certificate is not added.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC1057Step4')
     cy.get('[data-col-index="2"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC1057')
     cy.wait(3000)
     cy.get('.k-grid-content').should('not.contain', 'TC1057Step4')

cy.log('5. Enter a Name and Code and click \'SAVE\'')
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('TC1057Step5')
     cy.get(':nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').type('TC1057')
     cy.get(':nth-child(2) > .telerik-blazor > .k-button-text').click()
     cy.wait(3000)
     // The user is redirected to the Certificates overview screen.
     // The grid list is updated with newly created item.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC1057Step5')
    //  cy.get('[data-col-index="2"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC1057')
     cy.wait(3000)
     cy.get('.k-grid-content').should('contain', 'TC1057Step5')
    
cy.log('6. Navigate to Employees overview grid and open an Employee profile; within the Evidences > Certificates tab, click \'ADD\' and open the Certificate drop down')
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Ritchie Nathoe')
     cy.get('.k-master-row > [data-col-index="1"]').should('contain', 'Ritchie Nathoe').dblclick()
     cy.get(' .k-link > .svx-font-2').eq(3).click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     //  The newly created item is available for selection. 

cy.log('7. Select the newly created certificate, fill in the required fields and press \'SAVE\'')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .k-combobox').type('TC1057Step5').wait(2000)
     cy.contains('TC1057Step5').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .k-datepicker').find('.telerik-blazor.k-button.k-input-button.k-button-solid.k-button-md.k-button-solid-base.k-icon-button').click().wait(1000)
     cy.get('.k-calendar-nav-today > :nth-child(1) > .k-button-text').click()
     cy.get(':nth-child(2) > .svx-formfield-content > .k-datepicker').find('.telerik-blazor.k-button.k-input-button.k-button-solid.k-button-md.k-button-solid-base.k-icon-button').click().wait(1000)
     cy.get('.k-calendar-nav-today > :nth-child(1) > .k-button-text').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The certificate is stored within the profile.

cy.log('cleanup added certificate TC1057Step5')
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     cy.wait(2000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC1057Step5')
     cy.wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').should('contain', 'TC1057Step5')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
    })
    })