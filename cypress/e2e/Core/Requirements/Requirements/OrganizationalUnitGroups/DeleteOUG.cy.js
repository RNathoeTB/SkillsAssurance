describe('Requirements > Organizational unit groups', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     //  create OU
     cy.get('#tree-item-11 > .k-link').click()
     cy.get('#tree-item-11_1 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('RNTesting').wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  create OUG
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_4 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Organizational unit group 1')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').type('RNTesting').wait(3000).type('{enter}')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click()
     cy.get(':nth-child(5) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').wait(3000).type('Americas').wait(3000).type('{enter}')
     cy.get(':nth-child(5) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click()
     cy.get('.k-switch-track').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)

     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Organizational unit group 2')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').type('RNTesting').wait(3000).type('{enter}')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click()
     cy.get('.k-switch-track').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
    })
    
it('Delete Organizational Unit Groups', () => {
cy.log('1. Click on bin icon of \'Organizational unit group 1\' item')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('Organizational unit group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Organizational unit group 1')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     //  A pop-up dialog is displayed: 'Are you sure you want to delete the selected item?'
     cy.contains('Are you sure you want to delete the selected item?')
     //  'NO' and 'YES' (preselected) buttons are available.')
     cy.get('.k-button-solid-primary').should('have.css', 'background-color', 'rgb(13, 128, 142)')
cy.log('BUG: CANCEL and OK available')
     cy.get('.k-actions > .k-button-solid-base').contains('NO')
     cy.get('.k-button-solid-primary').contains('YES')

cy.log('2. Click \'YES\' button')
     cy.get('.k-button-solid-primary').click().wait(3000)
     // A validation failure pop-up dialog is opened with the following message:
     cy.contains('Delete failed because the item is used by:')
     cy.contains('Requirement groups: Americas')
     // 'CLOSE' button is available.
cy.log('BUG: CANCEL available')
     cy.contains('CLOSE')

cy.log('3. Click \'CLOSE\' button')
     cy.get('.svx-modal-buttons > .svx-button').click()
     //  The pop-up is closed.
     cy.contains('Delete validation failure').should('not.exist')
     //  The user is redirected to the Organizational unit groups overview screen.
     cy.get('.svx-page-header-title').contains('Organizational unit groups')
     //  'Organizational unit group 1' remains on the list.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Organizational unit group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Organizational unit group 1')

cy.log('4. Click on bin icon of any item that contains Organizational units but is not linked to any Requirement group ')
       cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('Organizational unit group 2').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Organizational unit group 2')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     //  A pop-up dialog is displayed: 'Are you sure you want to delete the selected item?'
     cy.contains('Are you sure you want to delete the selected item?')
     //  'NO' and 'YES' (preselected) buttons are available.')
     cy.get('.k-button-solid-primary').should('have.css', 'background-color', 'rgb(13, 128, 142)')
cy.log('BUG: CANCEL and OK available')
     cy.get('.k-actions > .k-button-solid-base').contains('NO')
     cy.get('.k-button-solid-primary').contains('YES')

cy.log('5. Click \'NO\' button')
     cy.get('.k-actions > .k-button-solid-base').click()
     //  The pop-up is closed.
     cy.contains('Are you sure you want to delete the selected item?').should('not.exist')
     //  The user is redirected to the Organizational unit groups overview screen.
     cy.get('.svx-page-header-title').contains('Organizational unit groups')
     //  'Organizational unit group 2' remains on the list.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Organizational unit group 2').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Organizational unit group 2')

cy.log('6. Repeat step 4 and click \'YES\' button ')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click().wait(3000)
     //  The pop-up is closed.
     cy.contains('Are you sure you want to delete the selected item?').should('not.exist')
     //  The user is redirected to the Organizational unit groups overview screen.
     cy.get('.svx-page-header-title').contains('Organizational unit groups')
     //  'Organizational unit group 2' is no longer available on the grid list.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Organizational unit group 2').wait(3000)
     cy.get('.k-table-td > label').contains('No items to display')
     
cy.log('7. Click on the \'ADD\' button, re-enter the previously deleted item (same Name), select any Organizational units and click SAVE')
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Organizational unit group 2')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').type('RNTesting').wait(3000).type('{enter}')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click()
     cy.get('.k-switch-track').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     // The Organizational unit group item is successfully created and added to the grid list.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('Organizational unit group 2').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Organizational unit group 2')

     cy.log('Cleanup')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('Organizational unit group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick()
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click().wait(3000).type('{backspace}').click()
     cy.get(':nth-child(5) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click().wait(3000).type('{backspace}').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('Organizational unit group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

     cy.get('#tree-item-11 > .k-link').click()
     cy.get('#tree-item-11_1 > .k-link').click()
     cy.get('.svx-organisational-unit-header-buttons > :nth-child(2) > .svx-button > .k-button').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('RNTesting').wait(3000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
    })
    })