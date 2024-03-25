describe('Personnel -> Employees -> Creation Forms', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
    })
    
it('Add User Account Upon Employee Creation - Set Manual Password', () => {
cy.log('1. Below Contact Info select a Category for \'Email\' and enter a valid email address')
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(5000)
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.email-section > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Work').wait(3000).type('{enter}')
     cy.get('.email-section > :nth-child(2) > .svx-formfield-content > .input-group').find('.k-input-inner').type('richard.nathoe@testbotics.nl')

cy.log('2. Observe the User Account section')
     // 'Create user account' checkbox is present.
     cy.get('.k-checkbox-wrap').should('exist')

cy.log('3. Check \'Create user account\'')
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

cy.log('4. Observe the \'Email\' field')
     //  The field is pre-filled with the value from the 'Email' field part of the Contact info section.
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group').contains('richard.nathoe@testbotics.nl')

cy.log('5. Adjust the email to another valid email address')
     cy.get('.email-section > :nth-child(2) > .svx-formfield-content > .input-group').find('.k-input-inner').clear().type('ritchie.nathoe@testbotics.nl')
     // Email is updated to the new one
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group').contains('ritchie.nathoe@testbotics.nl')

cy.log('6. Enter a Username and a security group (admin) and uncheck the \'Send email containing password instructions to user\' box')
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('TC2800')
     cy.get('.k-multiselect').find('.k-input-inner').click().type('Admin settings').wait(5000).type('{enter}').wait(3000).click()
     cy.get('.svx-formfield > .k-checkbox-wrap').click()
     // Three additional options become available:
     // - 'Password' field
     cy.get(':nth-child(8) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // - 'Confirm password' field
     cy.get(':nth-child(9) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // - 'Force password change on first login' checkbox (unchecked)  
     cy.get(':nth-child(10) > .svx-formfield').find('input[type="checkbox"].telerik-blazor').should('have.attr', 'aria-checked', 'false')

cy.log('7. Fill in a password applying the password requirements and use the same password in the \'Confirm password\' field.')
     cy.get(':nth-child(8) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('TC2800!')
     cy.get(':nth-child(9) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('TC2800!')
     // Check the 'Force password change on first login' box and click 'SAVE'
     cy.get(':nth-child(10) > .svx-formfield > .k-checkbox-wrap').click()
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Last name')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('OU 1').wait(3000).type('{enter}')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(3000).type('{enter}')
     cy.get(':nth-child(2) > .svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('ritchie.nathoe@testbotics.nl').wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(2) > .k-card > .k-card-body').contains('Last name')
     cy.get(':nth-child(2) > .k-card > .k-card-body > :nth-child(1)').contains('ritchie.nathoe@testbotics.nl')
     cy.get('.k-link > .svx-font-2').eq(1).click().wait(3000)
     cy.get('.svx-column-block-left > :nth-child(1) > .svx-block-body > :nth-child(4) > .k-card > .k-card-body').contains('OU 1')
     cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(1) > .k-card > .k-card-body').contains('Status 1')

cy.log('8. Logout and login with the username and password details provided in step 6 and 8.')
     cy.get('.profile-picture').click()
     cy.contains('Logout').click()
     cy.get('#Username').type('TC2800')
     cy.get('#Password').type('TC2800!')
     cy.get('#Login').click().wait(3000)
     //  The login page of SkillsVX is shown with a 'Request new password' form, including:
     //  - 'Password' field (placeholder text, no label)
     cy.get('#Password').should('exist')
     //  - 'Confirm password' field (placeholder text, no label)
     cy.get('#PasswordRepeat').should('exist')
     //  - 'SUBMIT' button
     cy.get('#SetPassword').should('exist')
     //  - 'Password requirements' section shown on the right side, showing the configured password requirements. 
     cy.get('.svx-card-password-information').should('exist')

cy.log('9. Fill in a new password applying the password requirements and use the same password in the \'Confirm password\' field. Click \'SUBMIT\'')  
     cy.get('#Password').type('Skills2024!')
     cy.get('#PasswordRepeat').type('Skills2024!')
     cy.get('#SetPassword').click().wait(5000)
     // User is redirected to the login screen.
     cy.log('BUG: not redirected to login screen')

cy.log('10. Login with Username and newly created password')
     cy.get('#Username').type('TC2800')
     cy.get('#Password').type('Skills2024!')
     cy.get('#Login').click().wait(3000)
    //  User is successfully logged-in.
cy.log('BUG: can not log in')

cy.log('11. Click on my avatar in the menu > My profile')
     cy.get('.profile-picture').click()
     cy.contains('My profile').click()
     //  The employee profile opens showing the data as filled-in (preconditions).
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(2) > .k-card > .k-card-body').contains('Last name')
     cy.get(':nth-child(2) > .k-card > .k-card-body > :nth-child(1)').contains('ritchie.nathoe@testbotics.nl')
     cy.get('.k-link > .svx-font-2').eq(1).click().wait(3000)
     cy.get('.svx-column-block-left > :nth-child(1) > .svx-block-body > :nth-child(4) > .k-card > .k-card-body').contains('OU 1')
     cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(1) > .k-card > .k-card-body').contains('Status 1')

cy.log('12. Navigate to Settings > Users and locate account you logged-in with (username from step 6). Open the record.')
     cy.get('#tree-item-11 > .k-link').click()
     cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(1) > a').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('TC2800').wait(3000)
     //  Correct details are shown as provided in step 6 and correct associated employee shown.
     cy.get('.k-master-row > [data-col-index="1"]').contains('Last name')
     cy.get('.k-grid-container > .k-grid-content').contains('Admin settings')
    })
    })