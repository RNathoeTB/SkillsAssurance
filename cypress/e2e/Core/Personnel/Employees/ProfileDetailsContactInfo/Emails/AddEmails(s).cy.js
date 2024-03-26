describe('Personnel -> Employees -> Profile Details Contact Info', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()   
    // An employee is already created with all personal fields filled
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('AddEmail')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('OU 1').wait(5000).type('{enter}')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(5000)
    })
    
it('Edit Employee Profile - Personal Info', () => {
cy.log('1. Observe Contact Info section and click on Email(s) ')
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('AddEmail').wait(5000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     cy.get(':nth-child(2) > details > .svx-panelbar-item-footer > .svx-button > .k-button').should('exist')

cy.log('2. Click on (+) Add email link')
     cy.get(':nth-child(2) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
     // The following elements are present:'Category' drop-down (required).
     cy.get(':nth-child(1) > .svx-formfield-content > .k-combobox').should('exist')
     cy.get(':nth-child(1) > .svx-formfield-label > .required-field').should('exist')
     // 'Email' text field (required)
     cy.get('.svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     cy.get(':nth-child(2) > .svx-formfield-label > .required-field').should('exist')
     // 'Notes' text field
     cy.get('.svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // 'Primary' check box 
     cy.get('.k-checkbox-wrap').should('exist')

cy.log('3. Click on (+) Add email link')
     // Try to repeat step 2
     cy.get(':nth-child(2) > details > .svx-panelbar-item-footer > .svx-button')
     .find('.telerik-blazor.k-button.svx-button-secondary.svx-panelbar-add-button.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base.k-disabled')
     .should('be.disabled')
   
cy.log('4. Select a category from the list, enter a valid email and add a comment in the Notes field. Click SAVE')
     cy.get(':nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Work').wait(5000).type('{enter}')
     cy.get('.svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('ritchie.nathoe@testbotics.nl')
     cy.get('.svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('comment')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > .k-card > .k-card-body > :nth-child(1)').contains('ritchie.nathoe@testbotics.nl - Work')

cy.log('5. Click EDIT, expand the Email(s) section and click on the Add email link')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     cy.get(':nth-child(2) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
     //  The following additional fields become available underneath the existing record:
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(1) > .svx-formfield-content > .k-combobox').should('exist')
     cy.get(':nth-child(1) > .svx-panelbar-type-section > :nth-child(1) > .svx-formfield-label > .required-field').should('exist')
     // 'Email' text field (required)
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-label > .required-field').should('exist')
     // 'Notes' text field
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // 'Primary' check box 
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .k-checkbox-wrap').should('exist')

cy.log('6. Fill in the required fields and click Cancel')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Private').wait(5000).type('{enter}')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('richard.nathoe@testbotics.nl')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('commentstep6')
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor > .k-button-text').click()
     //  The screen changes to view mode. Email record is not saved.
     cy.get(':nth-child(2) > .k-card > .k-card-body > :nth-child(1)').contains('ritchie.nathoe@testbotics.nl - Work')
     
cy.log('7. Repeat step 5, fill in the required fields, check the Primary box and click SAVE')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     cy.get(':nth-child(2) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Private').wait(5000).type('{enter}')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('richard.nathoe@testbotics.nl')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('commentstep6')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .k-checkbox-wrap').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The screen changes to view mode. Entered email, category and the primary indication are shown.
     cy.get('.k-card-body > :nth-child(3)').contains('richard.nathoe@testbotics.nl - Private (Primary)')

cy.log('cleanup')
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('AddEmail').wait(5000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
    })  
    })