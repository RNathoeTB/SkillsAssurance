describe('Personnel -> Employees', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     //  add OU 1
     cy.get('#tree-item-11 > .k-link').click()
     cy.get('#tree-item-11_1 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('OU 1')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // add employee profile
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(5000)
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('First name')
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Last name')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('OU 1').wait(3000).type('{enter}')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(3000).type('{enter}')
     cy.get(':nth-child(6) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('12345')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').click().wait(5000)
    })
    
it('Validation on Add Employee Profile', () => {
cy.log('1. Do not fill any field in and click \'SAVE\' button ')
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The screen remains opened.
     cy.get('.svx-page-header-title').should('exist').contains('New employee')
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     // On hover, the following message is shown:
cy.log('BUG: all Messages are different than expected')
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('Last name is a required field')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('Last name is a required field')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('Last name is a required field')

cy.log('2. Enter a first name by entering one that contains 256 characters or more. Fill the required fields with valid info (selecting value from dropdown or entering a value with maximum of 255 characters) and click \'SAVE\'')
     const longName = 'a'.repeat(256)
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type(longName)
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Last name')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('OU 1').wait(3000).type('{enter}')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The validation message on hover shows 'First name has a maximum of 255 characters.'
cy.log('BUG: Message different')
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('First name has a maximum of 255 characters.')
    
cy.log('3. Change the first name to have less than 256 characters. Enter a last name by entering one that contains 256 characters or more. Fill the other required fields with valid info (selecting value from dropdown or entering a value with maximum of 255 characters) and click \'SAVE\'')
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('First name')
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type(longName)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The validation message on hover shows 'First name has a maximum of 255 characters.'
     cy.log('BUG: Message different')
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('Last name has a maximum of 255 characters.')
    
cy.log('4. Enter a middle name by entering one that contains 256 characters or more. Fill the required fields with valid info (selecting value from dropdown or entering a value with maximum of 255 characters) and click \'SAVE\'')
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Last name')     
     cy.get(':nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type(longName)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
cy.log('BUG: SAVES PROFILE')
     // The validation message on hover shows 'First name has a maximum of 255 characters.'
cy.log('BUG: Message different')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('Middle name has a maximum of 255 characters.')
   
cy.log('5. Remove the middle name. Enter a personnel number by entering one that contains 256 characters or more. Fill the required fields with valid info (selecting value from dropdown or entering a value with maximum of 255 characters) and click \'SAVE\'')
     cy.get(':nth-child(6) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').click().type(longName)
     cy.get(':nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
cy.log('BUG: SAVES PROFILE')
     // The validation message on hover shows 'First name has a maximum of 255 characters.'
cy.log('BUG: Message different')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('Middle name has a maximum of 255 characters.')

cy.log('6. ')
     cy.get(':nth-child(6) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('12345').wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(10000)
 
cy.log('cleanup')
cy.get('#tree-item-4_0 > .k-link').click().wait(5000)
cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('First name ').wait(3000)
cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
cy.get('.k-button-solid-primary').click()

    })
    })