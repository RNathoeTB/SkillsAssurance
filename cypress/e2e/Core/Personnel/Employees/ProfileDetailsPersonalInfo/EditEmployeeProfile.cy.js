describe('Personnel -> Employees -> Profile Details Personal Info', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()   
    // An employee is already created with all personal fields filled
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('First name')
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Last name')
     cy.get(':nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Middle')
     cy.get(':nth-child(4) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Mr.').wait(5000).type('{enter}')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('OU 1').wait(5000).type('{enter}')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(5000)
     cy.get('.modal-buttons > :nth-child(2)').click()
     cy.get(':nth-child(5) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Given')
     cy.get('#Gender > :nth-child(1)').click()
     cy.get('.k-datepicker').find('span.telerik-blazor.k-button-icon.k-icon.k-svg-icon.k-svg-i-calendar').click()
     cy.get('.k-calendar-nav-today > .k-button-text').click()
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Albanian').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
    })
    
it('Edit Employee Profile - Personal Info', () => {
cy.log('1. Double-click on a record')
     cy.get('#tree-item-4_0 > .k-link').click().wait(5000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('First name Last name').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').should('exist')

cy.log('2. Observe the \'Personal Info\' section')
     cy.get('.svx-column-block-left > .svx-block > .svx-block-header').contains('Personal info')
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(2) > .k-card > .k-card-header > label').contains('Full name')
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(3) > .k-card > .k-card-header > label').contains('Given name')
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(4) > .k-card > .k-card-header > label').contains('Middle name')
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(5) > .k-card > .k-card-header > label').contains('Gender')
     cy.get(':nth-child(6) > .k-card > .k-card-header > label').contains('Date of birth')
     cy.get(':nth-child(7) > .k-card > .k-card-header > label').contains('Nationality')

cy.log('3. Observe Employee Full Name')
     // The following elements build up the full name format:'Title' 'First Name' 'Last Name'
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(2) > .k-card > .k-card-body').contains('Mr. First name Last name ()')

cy.log('4. Click on \'Edit\' button')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The full name is split into the above mentioned 3 separate fields.
     // All previously shown data is present in each separate field.
    //  cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').contains('First name')
    //  cy.get(':nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').contains('Last name')
    //  cy.get(':nth-child(4) > .svx-formfield-content > .k-combobox').find('.k-input-inner').contains('Mr.')

cy.log('5. Select another title from the dropdown and click \'SAVE\'')
     cy.get(':nth-child(4) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().clear().type('Mrs.').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(2) > .k-card > .k-card-body').contains('Mrs. First name Last name ()')

cy.log('6. Click \'EDIT\' and update the \'First name\' field and click \'SAVE\'')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('First name changed')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(2) > .k-card > .k-card-body').contains('Mrs. First name changed Last name ()')

cy.log('7. Click \'EDIT\' and update the \'Last name\' field and click \'SAVE\'')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get('.svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Last name changed')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(2) > .k-card > .k-card-body').contains('Mrs. First name changed Last name changed ()')

cy.log('8. Click \'EDIT\' and update the \'Given name\' field and click \'SAVE\'')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(5) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Given changed')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(3) > .k-card > .k-card-body').contains('Given changed')

cy.log('9. Click \'EDIT\' and update the \'Middle name\' field and click \'SAVE\'')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(6) > .svx-formfield-content > .input-group > .k-textbox').clear().type('Middle changed')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(4) > .k-card > .k-card-body').contains('Middle changed')

cy.log('10. Update the \'Gender\' by selecting the other radio button and click \'SAVE\'')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     cy.get('#Gender > :nth-child(2)').wait(3000).click().wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(5) > .k-card > .k-card-body').contains('Female')

cy.log('11. Click on the calendar of the \'Date\' of birth\' and select another date and click  \'SAVE\'')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get('.k-datepicker').find('.k-input-inner').click().type('2023')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     cy.get(':nth-child(6) > .k-card > .k-card-body').contains('2023')

cy.log('12. Click \'EDIT\' and update the \'Nationality\' field and click \'SAVE\'')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().clear().type('Austrian').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
     cy.get(':nth-child(7) > .k-card > .k-card-body').contains('Austrian')

cy.log('13. Click \'Cancel\' and observe the grid')
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').click().wait(5000)
     // Updated information is correctly showing within the respective columns.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('First name changed Last name changed').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Mrs. First name changed Last name changed ()')
    })  
    })