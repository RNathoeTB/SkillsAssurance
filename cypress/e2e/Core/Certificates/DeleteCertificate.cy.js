describe('Evidences > Certificates', () => {
    beforeEach(() => {
    cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
      cy.get('#Username').type('Richard')
      cy.get('#Password').type('Test123')
      cy.get('#Login').click()
     // 'Certificate 1' is created and set-up as requirement in the application and set-up as event award.
     // At least one Employee has the requirement assigned and has a planned event which has 'Certificate 1' as award.
     // 'Certificate 2' is created and is not set-up as requirement, or linked as event award, or acquired by anyone yet.
      cy.get('#tree-item-10 > .k-link').click()
      cy.get('#tree-item-10_0 > .k-link').click()
      cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
      cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('Certificate 1').wait(1000)
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
      cy.wait(2000)
      cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
      cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('Certificate 2').wait(1000)
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
      
      cy.get('#tree-item-8 > .k-link').click()
      cy.get('#tree-item-8_0 > .k-link').click()
      cy.get('.svx-button > .telerik-blazor').click()
      cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('Certificate')
      cy.wait(3000)
      cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('{enter}')
      cy.get('input.k-input-inner').eq(2).type('Company Mandatory')
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(2).type('{enter}')
      cy.get('input.k-input-inner').eq(6).type('Europe')
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(6).type('{enter}')
      cy.get('input.k-input-inner').eq(1).type('Certificate 1')
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(1).type('{enter}')
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()

      cy.get('#tree-item-4 > .k-link').click()
      cy.get('#tree-item-4_0 > .k-link').click()
      cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Ritchie Nathoe').wait(3000)
      cy.get('.k-master-row > [data-col-index="1"]').should('contain', 'Ritchie Nathoe').dblclick()
      cy.get(' .k-link > .svx-font-2').eq(3).click()
      cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
      cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .k-combobox').type('Certificate 1').wait(3000).type('{downarrow}').type('{enter}')
      cy.get(':nth-child(1) > .svx-formfield-content > .k-datepicker').find('.telerik-blazor.k-button.k-input-button.k-button-solid.k-button-md.k-button-solid-base.k-icon-button').click().wait(1000)
      cy.get('.k-calendar-nav-today > :nth-child(1) > .k-button-text').click()
      cy.get(':nth-child(2) > .svx-formfield-content > .k-datepicker').find('.telerik-blazor.k-button.k-input-button.k-button-solid.k-button-md.k-button-solid-base.k-icon-button').click().wait(1000)
      cy.get('.k-calendar-nav-today > :nth-child(1) > .k-button-text').click()
      cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
      cy.wait(2000)
    })
    
    it('Delete Certificate', () => {
cy.log('1. Click on bin icon of \'Certificate 1\' item ')
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Certificate 1')
     cy.get('.k-master-row > [data-col-index="1"]').contains('Certificate 1')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     //  A pop-up dialog is displayed: 'Are you sure you want to delete the selected item?'
     cy.contains('Are you sure you want to delete the selected item?').should('exist')
     //  'NO' and 'YES' buttons are available.
cy.log('BUG": CANCEL and OK are available')

cy.log('2. Click \'No\' button')
     cy.get('.k-actions > .k-button-solid-base').click()
     //  The pop-up is closed.
     cy.contains('Are you sure you want to delete the selected item?').should('not.exist')
     //  The user is redirected to the Certificates overview screen.
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link').contains('Name')
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link').contains('Code')
     //  'Certificate 1' remains on the list.
     cy.get('.k-master-row > [data-col-index="1"]').contains('Certificate 1')

cy.log('3. Repeat step 1 and click \'Yes\'')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     //  A pop-up dialog is displayed: 'Are you sure you want to delete the selected item?'
     cy.contains('Are you sure you want to delete the selected item?').should('exist')
     //  click 'Yes'
     cy.get('.k-button-solid-primary').click()
cy.log('BUG": Certificate Deletes')
     // A validation pop-up dialog is opened with the following message:
     // Delete failed because the item is used by:
     // Requirements: '%requirement type%', ...
     // Acquired: '%Employee name%', ...
     // Event awards: '%Event name%', ...
     // Event requests: '%Ref #%', ... 
      cy.contains('Delete failed because the item is used by:').should('be.visible')
      cy.contains('Requirements:').should('be.visible')
      cy.contains('Acquired:').should('be.visible')
      cy.contains('Event awards:').should('be.visible')
      cy.contains('Event requests:').should('be.visible')
      // 'CLOSE' button is available.
      cy.contains('CLOSE').should('exist')

cy.log('4. Click \'Close\'')
cy.log('BUG": can not get the close button element')
     // The pop-up is closed.
     cy.contains('Delete failed because the item is used by:').should('not.exist')
     //  The user is redirected to the Certificates overview screen.
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link').contains('Name')
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link').contains('Code')
     //  'Certificate 1' remains on the list.
     cy.get('.k-master-row > [data-col-index="1"]').contains('Certificate 1')

cy.log('5. Click on bin icon of \'Certificate 2\' item ')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Certificate 2')
     cy.get('.k-master-row > [data-col-index="1"]').contains('Certificate 2')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     //  A pop-up dialog is displayed: 'Are you sure you want to delete the selected item?'
     cy.contains('Are you sure you want to delete the selected item?').should('exist')
     //  'NO' and 'YES' buttons are available.
cy.log('BUG": CANCEL and OK are available')

cy.log('6. Click \'Yes\' button')
     cy.get('.k-button-solid-primary').click().wait(3000)
     //  The pop-up is closed.
     cy.contains('Are you sure you want to delete the selected item?').should('not.exist')
     //  The user is redirected to the Certificates overview screen.
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link').contains('Name')
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link').contains('Code')
     //  'Certificate 2' is removed. 
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Certificate 2')
     cy.get('.k-table-td > label').should('exist').contains('No items to display')
    })
    })