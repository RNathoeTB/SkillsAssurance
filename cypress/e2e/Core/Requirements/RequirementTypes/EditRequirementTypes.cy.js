describe('Requirements > Requirement Types', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     //  'Requirement type 1' is created, having 'Impacting compliance' enabled.
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Requirement type 1')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('Test')
     cy.get('.k-switch[aria-checked="true"]').should('exist').wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // Certificate 'Requirement having type 1' is assigned to this type.
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('Requirement having type 1')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  Specific employee has this requirement assigned.
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_0 > .k-link').click()
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('Certificate')
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(1).type('Requirement having type 1')
     cy.get('input.k-input-inner').eq(1).wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(1).type('{enter}')
     cy.get('input.k-input-inner').eq(2).type('Requirement type 1')
     cy.wait(4000)
     cy.get('input.k-input-inner').eq(2).type('{enter}') 
     cy.get('input.k-input-inner').eq(6).type('Europe').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(4000)

    })
    
it('Edit Requirement Types', () => {
cy.log('1. Double-click on \'Requirement type 1\' record ')
cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement type 1')
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement type 1').dblclick()
     //  The edit screen is opened showing the filled-in data. All fields are editable.
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Requirement type 1')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Test')   

cy.log('2. Change the \'Name\' and click \'SAVE\' button')
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Requirement type 1 changed').wait(3000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     // Change is saved successfully.
     // The corresponding grid record is updated with new value.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement type 1 changed').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement type 1 changed')

cy.log('3. Navigate to Requirements > Requirements and open any requirement. Open the \'Requirement type\' dropdown.')
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_0 > .k-link').click()
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').dblclick()
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(1) > .svx-formfield-content').find('.k-input-inner').wait(2000).clear().type('Requirement type 1 changed').wait(3000)
     //  The new name is shown, having replaced the old name.
     cy.get('.k-list-content').contains('Requirement type 1 changed')
    //  cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').click()

cy.log('4. Navigate to Requirements > Requirement types. Re-open the record of step 2 and change the name back to \'Requirement type 1\'. Change the \'Code\' and click \'SAVE\'.')
     cy.get('#tree-item-8_3 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement type 1 changed').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement type 1 changed').dblclick()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Requirement type 1').wait(3000)
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('step4').wait(3000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(5000)
     // Changes are saved successfully.
     // The corresponding grid record is updated with new values.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement type 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement type 1')
     cy.get('.k-master-row > [data-col-index="2"]').contains('step4')

cy.log('4. Navigate to Personnel > Employees and open Employee having \'Requirement having type 1\' as requirement. Observe the \'Certificates\' tab.')
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Ritchie Nathoe').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Ritchie Nathoe').dblclick().wait(3000)
     cy.get(' .k-link > .svx-font-2').eq(3).click().wait(3000)
     // 'Requirement having type 1' is visible (having default filters applied). The updated code is shown.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement having type 1').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement having type 1')
     




    //  cy.log('cleanup')
    //  cy.get('#tree-item-8_3 > .k-link').click()
    //  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement type 1 changed').wait(3000)
    //  cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
    //  cy.get('.k-button-solid-primary').click()

    //  cy.get('#tree-item-10 > .k-link').click()
    //  cy.get('#tree-item-10_0 > .k-link').click()
    //  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement having type 1').wait(3000)
    //  cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement having type 1')
    //  cy.get('.k-master-row > [data-col-index="0"]').click()
    //  cy.get('.k-button-solid-primary').click()
    })
    })