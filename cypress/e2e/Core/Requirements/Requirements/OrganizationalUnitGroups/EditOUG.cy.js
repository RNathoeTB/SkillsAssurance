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
    //  //  create OUG
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_4 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Organizational unit group 1')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Description')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').type('NM Organisational Unit Spain').wait(3000).type('{enter}')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click()
     cy.get('.k-switch-track').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
    })
    
it('Edit Organizational Unit Groups', () => {
cy.log('1. Double-click on \'Organizational unit group 1\'')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Organizational unit group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick()
     //  The edit screen is opened showing the filled-in data. All fields are editable.
     cy.get('.svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').should('exist')
     cy.get('.svx-formfield-content > .k-multiselect').find('.k-input-inner').should('exist')
     cy.get('.k-switch-track').should('exist')
     cy.get('.svx-formfield-content > .k-multiselect').find('.k-input-inner').should('exist')

cy.log('2. Change the Name and click \'SAVE\'')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('OUGchanged').wait(3000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     // The user is redirected to the Organizational Unit overview screen.
     cy.get('.svx-page-header-title').contains('Organizational unit groups')
     // The change on the OU group record has been successfully saved and shows updated in the grid.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('OUGchanged').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('OUGchanged').dblclick()

cy.log('3. Re-open the record, change the Name back to \'Organizational unit group 1\', change the Description and click \'SAVE\'')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Organizational unit group 1').wait(3000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     // The user is redirected to the Organizational Unit overview screen.
     cy.get('.svx-page-header-title').contains('Organizational unit groups')
     //  The change on the OU group record has been successfully saved and shows updated in the grid.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('Organizational unit group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Organizational unit group 1').dblclick()

cy.log('4. Re-open the record, change the Organizational Units selection (remove existing one(s) and add one OU not previously selected) and click \'SAVE\'')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click().type('{backspace}').wait(3000).type('RNTesting').wait(3000).type('{enter}')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Organizational unit group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick()
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').contains('RNTesting')
     cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').click()
     // The user is redirected to the Organizational Unit overview screen.
     cy.get('.svx-page-header-title').contains('Organizational unit groups')
     //  The change on the OU group record has been successfully saved and shows updated in the grid.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('Organizational unit group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="3"]').contains('RNTesting')

cy.log('step 5 6 7 9 Bug in application')
     cy.get('#tree-item-11 > .k-link').click()
     cy.get('#tree-item-11_1 > .k-link').click()

cy.log('8. Navigate to MANAGE -> Requirements -> Organizational unit groups and open \'Organizational unit group 1\' and disable \'Include sub OUs\' and \'SAVE\'. ')
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_4 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('Organizational unit group 1').wait(3000) 
     cy.get('.k-master-row > [data-col-index="3"]').dblclick()
     cy.get('.k-switch-track').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The user is redirected to the Organizational Unit overview screen.
     cy.get('.svx-page-header-title').contains('Organizational unit groups')
     // The change on the OU group record has been successfully saved and shows updated in the grid.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('Organizational unit group 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="4"]').contains('False')

cy.log('9. Bug in application')
     cy.get('#tree-item-11 > .k-link').click()
     cy.get('#tree-item-11_1 > .k-link').click()

cy.log('10. Navigate to MANAGE -> Requirements -> Organizational unit groups and open \'Organizational unit group 1\'. Add an additional requirement group and click \'SAVE\'')
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_4 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('Organizational unit group 1').wait(3000) 
     cy.get('.k-master-row > [data-col-index="3"]').dblclick()








    //  cy.log('Cleanup')
    //  cy.get('#tree-item-8_1 > .k-link').click()
    //  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('RNanyrecord').wait(3000)
    //  cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
    //  cy.get('.k-button-solid-primary').click().wait(3000)

    //  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Americas').wait(3000)
    //  cy.get('[data-render-row-index="2"] > [data-col-index="1"]').dblclick()
    //  cy.get('.k-input-values').find('.k-input-inner').click().type('{backspace}').wait(3000).click()
    //  cy.get('.svx-page-header').click()
    //  cy.get('.dismiss').click()
    //  cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()

    //  cy.get('#tree-item-8_4 > .k-link > .k-item-text').click().wait(3000)
    //  cy.get('#tree-item-8_4 > .k-link > .k-item-text').click().wait(3000)
    //  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('Organisational unit group 1').wait(3000)
    //  cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
    //  cy.get('.k-button-solid-primary').click()
    })
    })