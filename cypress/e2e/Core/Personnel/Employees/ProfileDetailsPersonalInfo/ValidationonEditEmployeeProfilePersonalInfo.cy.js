describe('Personnel -> Employees -> Profile Details Personal Info', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()   
    })
    
it('Validation on Edit Employee Profile - Personal Info', () => {
cy.log('1. Remove value from required field Last name and click \'SAVE\' button')
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('Ritchie Nathoe').wait(5000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick()
     cy.get('.modal-buttons > :nth-child(2)').click()
     cy.get('.svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click()
     cy.get('.svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('Last name is a required field')

cy.log('2. Enter a last name by entering one that contains 256 characters or more and click \'SAVE\'')
     const longName = 'a'.repeat(256)
     cy.get('.svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type(longName)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click()
     cy.get('.svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('Last name has a maximum of 255 characters.')

cy.log('3. Change the last name to have less than 256 characters. Change the first name by entering one that contains 256 characters or more and click \'SAVE\'')
     cy.get('.svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Nathoe')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type(longName)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click()
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('First name has a maximum of 255 characters.')

cy.log('4. Change the first name to have less than 256 characters. Change the given name by entering one that contains 256 characters or more and click \'SAVE\'')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Ritchie')
     cy.get(':nth-child(5) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type(longName)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click()
     cy.get(':nth-child(5) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').click()
    cy.get('.k-validation-error').contains('Given name has a maximum of 255 characters.')

cy.log('5. Change the given name to have less than 256 characters. Change the middle name by entering one that contains 256 characters or more and click \'SAVE\'')
     cy.get(':nth-child(5) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Ikkie')
     cy.get(':nth-child(6) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type(longName)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click()
     cy.get(':nth-child(6) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('Middle name has a maximum of 255 characters.')
    cy.get(':nth-child(6) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Raheed')
    cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click()
    })  
    })