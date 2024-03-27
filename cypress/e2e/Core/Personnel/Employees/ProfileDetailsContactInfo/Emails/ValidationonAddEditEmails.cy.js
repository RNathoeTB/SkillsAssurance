describe('Personnel -> Employees -> Profile Details Contact Info', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()   
     // An employee is created
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('ValidationEmail')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('OU 1').wait(5000).type('{enter}')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(5000)
    })
    
it('Emails -> Validation on Add/Edit Email(s)', () => { 
cy.log('1. Expand the Email(s) section, click Add Email link and press SAVE')
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('ValidationEmail').wait(5000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick().wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     cy.get(':nth-child(2) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //   Pop-up opens showing warning message:
     cy.get('.error-message').contains('Please fill all required email details')
     //   'Close' button.
     cy.get('.k-actions > .svx-button > .telerik-blazor').should('exist').click()

cy.log('2. Click Close and select a Category and click SAVE')
     cy.get(':nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Work').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //   Pop-up opens showing warning message:
     cy.get('.error-message').contains('Please fill all required email details')
     //   'Close' button.
     cy.get('.k-actions > .svx-button > .telerik-blazor').click()

cy.log('3. Click Close and enter an invalid email and click SAVE')
     cy.get('.svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('ritchie.nathoetestbotics')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  Pop-up opens showing warning message:
     cy.get('.error-message').contains('Email is not valid')
     //  'Close' button.
     cy.get('.k-actions > .svx-button > .telerik-blazor').click()

cy.log('4. Click Close and enter a valid email, fill in notes with more than 255 characters and click SAVE')
const longName = 'a'.repeat(256)
     cy.get('.svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('ritchie.nathoe@testbotics.nl').wait(3000)
     cy.get(':nth-child(1) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type(longName).wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  Pop-up opens showing warning message:
     cy.get('.error-message').contains('Notes has a maximum of 255 characters')
     //  'Close' button.
     cy.get('.k-actions > .svx-button > .telerik-blazor').click()

cy.log('5. Click Close and enter a note less than 256 characters, check the Primary box and click SAVE')
     cy.get(':nth-child(1) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('comment').wait(3000)
     cy.get('.k-checkbox-wrap').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  Screen returns to view mode. Email record has been successfully added.
     cy.get(':nth-child(2) > .k-card > .k-card-body > :nth-child(1)').contains('ritchie.nathoe@testbotics.nl - Work (Primary)')

cy.log('6. Click EDIT, expand the Email(s) section and click Add email link. Select the same Category as selected in step 2, fill in a valid email and click SAVE.')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     cy.get(':nth-child(2) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Work').wait(5000).type('{enter}')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('richard.nathoe@testbotics.nl').wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)

cy.log('7. Click EDIT, expand the Email(s) section and edit the just created email entry in step 6 by checking the Primary box and observe entry created in step 6.')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .k-checkbox-wrap').click()
     cy.get(':nth-child(1) > .svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .k-checkbox-wrap').find('input[type="checkbox"]').should('have.attr', 'aria-checked', 'false')

cy.log('8. click SAVE')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get('.k-card-body > :nth-child(3)').contains('richard.nathoe@testbotics.nl - Work (Primary)')

cy.log('cleanup')
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('ValidationEmail').wait(5000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
    })  
    })