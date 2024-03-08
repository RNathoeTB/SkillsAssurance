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
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Ritchie Nathoe').wait(5000)
     cy.get('.k-master-row > [data-col-index="1"]').should('contain', 'Ritchie Nathoe').dblclick()
     cy.get(' .k-link > .svx-font-2').eq(3).click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Requirement having type 1').wait(3000).type('{enter}')
     cy.get(':nth-child(1) > .svx-formfield-content > .k-datepicker').find('.telerik-blazor.k-button.k-input-button.k-button-solid.k-button-md.k-button-solid-base.k-icon-button').click().wait(1000)
     cy.get('.k-calendar-nav-today > :nth-child(1) > .k-button-text').click()
     cy.get(':nth-child(2) > .svx-formfield-content > .k-datepicker').find('.telerik-blazor.k-button.k-input-button.k-button-solid.k-button-md.k-button-solid-base.k-icon-button').click().wait(1000)
     cy.get('.k-calendar-nav-today > :nth-child(1) > .k-button-text').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     

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
     cy.get('#tree-item-8_0 > .k-link').click()
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').dblclick()
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(1) > .svx-formfield-content').find('.k-input-inner').wait(2000).clear().type('Requirement type 1 changed').wait(3000)
     cy.get('.k-list-content').contains('Requirement type 1 changed')
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').click()


   
    cy.log('cleanup')
     cy.get('#tree-item-8_3 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement type 1 changed').wait(3000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement having type 1')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()









    })
    })