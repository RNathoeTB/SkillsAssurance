describe('Personnel -> Employees -> Creation Forms', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     // 'User 1' is already created (username)
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Last name')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('NM Organisational Unit Spain').wait(5000).type('{enter}')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(5000).type('{enter}')
     cy.get('.k-checkbox-wrap').click()
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('User 1')
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').type('ritchie.nathoe@testbotics.nl')
     cy.get('.k-multiselect').find('.k-input-inner').click().type('Admin settings').wait(5000).type('{enter}').wait(3000).click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click()
    })
    
it('Validation on Add User Account Upon Employee Creation', () => {
cy.log('1. Check \'Create user account\' in \'User Account\' section')
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Last name')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('NM Organisational Unit Spain').wait(5000).type('{enter}')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(5000).type('{enter}')
     cy.get('.k-checkbox-wrap').click()
     //  Following additional fields become available:
     // - 'Username' free text field
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // - 'Email' free text field
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // - 'Send email containing password instructions' checkbox (default checked)
     cy.get('input[type="checkbox"].telerik-blazor').should('have.attr', 'aria-checked', 'true')
     // - 'Security groups' multiple select field  
     cy.get('.k-multiselect').should('exist')

cy.log('2. Click \'SAVE\'')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click() 
     // Screen remains open. 'Username', 'Email' and 'Security groups' fields are highlighted.
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     cy.get('.k-multiselect').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     //  Upon hover the following message is shown:
     // '[Field name] is a required field' 
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').click()
     cy.get('.k-validation-error').contains('Username is a required field')
     cy.get(':nth-child(2) > .svx-block-header').click()
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').click()
     cy.get('.k-validation-error').contains('Email is a required field')
     cy.get(':nth-child(2) > .svx-block-header').click()
     cy.get('.k-multiselect').click()
     cy.get('.k-validation-error').contains('Security groups is a required field')

cy.log('3. Enter \'User 1\' into Username field, enter a valid email address and select a security group and click \'SAVE\'.')
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('User 1')
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('ritchie.nathoe@testbotics.nl')
     cy.get('.k-multiselect').find('.k-input-inner').click().type('Admin settings').wait(5000).type('{enter}').wait(3000).click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click()
cy.log('BUG: profile saves. duplicate!')
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     //  The screen remains open. 'Username' field is highlighted.
     //  On hover, the following message is shown:
     // 'An item with this name already exists.'
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').click()
     cy.get('.k-validation-error').contains('An item with this name already exists.')

cy.log('4. Enter a unique username, change the Email to an invalid one and click \'SAVE\'')
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('User 999')
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('ritchie.nathoe.nl')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The screen remains open. 'Email' field is highlighted.
     //  On hover, the following message is shown:
     // 'Email is not valid.'
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('Email is not valid.')

cy.log('5. Enter a valid email address, uncheck the \'Send email containing password instructions to user\' box and click \'SAVE\'')
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('ritchie.nathoe@testbotics.nl')
     cy.get('.svx-formfield > .k-checkbox-wrap').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The screen remains open. 'Password' and 'Confirm password' fields are highlighted.
     // On hover, the following message is shown:
     // 'Password is a required field'   
     cy.get(':nth-child(8) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     // 'Confirm password is a required field'   
     cy.get(':nth-child(9) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')

cy.log('6. Fill in a passwords where \'Password\' and \'Confirm password\' fields don\'t match.')
     cy.get(':nth-child(8) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Passw0rdTB2024!')
     cy.get(':nth-child(9) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Pasw0rdTB2024!')
     // 'Confirm password' field is highlighted. On hover the following message is shown:
     // 'Password' and 'Confirm password' do not match.
cy.log('BUG: different message')
     cy.get(':nth-child(9) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').click()
     cy.get('.k-validation-error').contains('\'Password\' and \'Confirm password\' do not match.')

cy.log('7. Fill in a new password applying the password requirements and using the same password in the \'Confirm password\' field. Click \'SAVE\'')
     cy.get(':nth-child(9) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Passw0rdTB2024!')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click()
     //  The employee is created.
     // User is able to see the profile with already entered data in view mode.
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(2) > .k-card > .k-card-body').contains('Last name ()')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').should('exist')
    })  
    })