describe('Requirements > Requirement Types', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     //  certificate "TC1054" is created
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('TC1054').wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // 'Requirement type 1' is used in at least 1 Requirement.     
     // 'Requirement type 2' is not used in any Requirement.
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Requirement type 1')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Req1').wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Requirement type 2')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Req2').wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     
     cy.get('#tree-item-8_0 > .k-link').click()
     cy.get('.svx-grid-footer-template').find('.k-button-text').click()
     cy.get('.k-popup').find('.k-menu-link-text').contains('Add').click()
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('Certificate').wait(3000)
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(1).type('TC1054').wait(5000)
     cy.get('input.k-input-inner').eq(1).wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(2).type('Requirement type 1').wait(3000)
     cy.get('input.k-input-inner').eq(2).wait(3000).type('{enter}') 
     cy.get('input.k-input-inner').eq(6).wait(3000).type('Europe').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click()
     cy.get('.dismiss').click().wait(3000)
    })
    
it('Delete Requirement Types', () => {
cy.log('1. Click on bin icon of \'Requirement type 1\' item')
     cy.get('#tree-item-8_3 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Requirement type 1').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Requirement type 1')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     //  A pop-up dialog is displayed: 'Are you sure you want to delete the selected item?'
     cy.contains('Are you sure you want to delete the selected item?')
     //  'NO' and 'YES' (preselected) buttons are available.
cy.log('BUG: NO and YES not available, CANCEL and OK available')
     cy.get('.k-actions > .k-button-solid-base').contains('Yes')
     cy.get('.k-button-solid-primary').should('have.css', 'background-color', 'rgb(13, 128, 142)');
     cy.get('.k-actions > .k-button-solid-base').contains('No')
     
cy.log('2. Click \'YES\' button')
     cy.get('.k-button-solid-primary').click().wait(3000)
     // A validation failure pop-up dialog is opened with the following message:
     cy.contains('Delete failed because the item is used by:')
     cy.contains('Requirements: TC1054')
     // 'CLOSE' button is available.
cy.log('BUG: CANCEL available')
     cy.contains('CLOSE')

cy.log('3. Click \'CLOSE\' button')
     cy.get('.svx-modal-buttons > .svx-button > .telerik-blazor').click()
     //  The pop-up is closed.
     cy.contains('Delete validation failure').should('not.exist')
     //  The user is redirected to the Requirement types overview screen.
     cy.get('.svx-page-header-title').contains('Requirement types')
     //  'Requirement type 1' remains on the list.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement type 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement type 1')

cy.log('4. Click on bin icon of \'Requirement type 2\' item ')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement type 2').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Requirement type 2')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()     
     // A pop-up is displayed: 'Are you sure you want to delete the selected item?'
     cy.contains('Are you sure you want to delete the selected item?')
     //  'NO' and 'YES' (preselected) buttons are available.
cy.log('BUG: NO and YES not available, CANCEL and OK available')
     cy.get('.k-actions > .k-button-solid-base').contains('Yes')
     cy.get('.k-button-solid-primary').should('have.css', 'background-color', 'rgb(13, 128, 142)');
     cy.get('.k-actions > .k-button-solid-base').contains('No')

cy.log('5. Click \'NO\' button')
     cy.get('.k-actions > .k-button-solid-base').click()
     //  The pop-up is closed.
     cy.contains('Are you sure you want to delete the selected item?').should('not.exist')
     // The user is redirected to the Requirement types overview screen.
     cy.get('.svx-page-header-title').contains('Requirement types')
     // 'Requirement type 2' remains on the list.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement type 2').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Requirement type 2')

cy.log('6. Repeat step 4 and click \'YES\' button ')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click().wait(3000)
     //  The pop-up is closed.
     cy.contains('Are you sure you want to delete the selected item?').should('not.exist')
     //  The user is redirected to the Requirement types overview screen.
     cy.get('.svx-page-header-title').contains('Requirement types')
     //  'Requirement type 2' is no longer available on the grid list.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement type 2').wait(3000)
     cy.get('.k-table-td > label').contains('No items to display')

cy.log('7. Click on the \'ADD\' button, enter the previously deleted \'Requirement type 2\' and click SAVE')
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Requirement type 2')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Req2')
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('Requirement type 2').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Requirement type 2')

cy.log('cleanup')
     // delete requirement
     cy.get('#tree-item-8_0 > .k-link').click().wait(5000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC1054').wait(4000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click().wait(3000)

     cy.get('#tree-item-8_3 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Requirement type 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click().wait(3000)

     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('Requirement type 2').wait(3000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click().wait(3000)

     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('TC1054').wait(3000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button').click()
     cy.get('.k-button-solid-primary').click()
    })
    })