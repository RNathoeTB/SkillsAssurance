describe('Personnel -> Employees', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
    })
    
it('Add Employee Profile', () => {
cy.log('1. Observe the grid ')
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(5000)
     //  Grid consist of columns:
     // - First name
     cy.get('[data-text="First name"] > .k-cell-inner > .k-link > .k-column-title').should('exist')
     // - Last name 
     cy.get('[data-text="Last name"] > .k-cell-inner > .k-link > .k-column-title').should('exist')
     // - Personnel number
     cy.get('[data-text="Personnel number"] > .k-cell-inner > .k-link > .k-column-title').should('exist')
     // - Organizational unit
     cy.get('[data-text="Organizational unit"] > .k-cell-inner > .k-link > .k-column-title').should('exist')
     // - Main role
     cy.get('[data-text="Main role"] > .k-cell-inner > .k-link > .k-column-title').should('exist')
     // - Personnel status
     cy.get('[data-text="Personnel status"] > .k-cell-inner > .k-link > .k-column-title').should('exist')
     // - Personnel type
     cy.get('[data-text="Personnel type"] > .k-cell-inner > .k-link > .k-column-title').should('exist')
     // - Service date 
     cy.get('[data-text="Service date"] > .k-cell-inner > .k-link > .k-column-title').should('exist')

cy.log('2. Click on \'ADD\' button')
      cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     // The edit screen is opened with the following elements present:
     // 'New employee' title
     cy.get('.svx-page-header-title')
     // 'Employee info' section, including:  
     // - 'First name' text field
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // - 'Last name' text field (required)
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // - 'Middle name' text field
     cy.get(':nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // - 'Title' dropdown
     cy.get(':nth-child(4) > .svx-formfield-content > .k-combobox').should('exist')
     // - 'Service date' date picker
     cy.get('.k-datepicker').should('exist')
     // - 'Personnel number' text field
     cy.get(':nth-child(6) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // - 'Organizational unit' dropdown (required)
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').should('exist')
     // - 'Personnel type' dropdown 
     cy.get(':nth-child(8) > .svx-formfield-content > .k-combobox').should('exist')
     // - 'Status' dropdown (required)
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').should('exist')
     // - 'Main role' dropdown  
     cy.get(':nth-child(10) > .svx-formfield-content > .k-combobox').should('exist')

cy.log('3. Fill all required fields and click \'CANCEL\'')
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('ABCDEF')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('NM Organisational Unit Spain').wait(3000).type('{enter}')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').click().wait(3000)
     // The user is redirected to the Employees overview screen. The new profile is not added.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('ABCDEF').wait(3000)
     cy.get('.k-grid-norecords > .k-table-td').should('exist')

cy.log('4. Click \'ADD\' and enter data in all fields:')
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     //  - First name
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Al')
     //  - Last name
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Pacino')
     //  - Middle name
     cy.get(':nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Scarface')
     //  - Title
     cy.get(':nth-child(4) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Mr.').wait(3000).type('{enter}')
     //  - Service date
     cy.get('.k-datepicker').find('.telerik-blazor').eq(0).click()
     cy.get('.k-calendar-nav-today > .k-button-text').click()
     //  - Personnel number
     cy.get(':nth-child(6) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('xxx')
     //  - Organizational unit
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('NM Organisational Unit Spain').wait(3000).type('{enter}')
     //  - Personnel type
     cy.get(':nth-child(8) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('PB Personnel Type A').wait(3000).type('{enter}')
     //  - Main role 
     cy.get(':nth-child(10) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Driller').wait(3000).type('{enter}')
     //  - Status 
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     cy.get('.svx-column-block-left > .svx-block > .svx-block-body > :nth-child(2) > .k-card > .k-card-body').contains('Mr. Al Pacino')

cy.log('5. Within \'Details\' tab, click on \'Edit\' button')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  - 'First Name' shows data entered in step 4
     cy.contains('Al')
     // - 'Last Name' shows data entered in step 4
     cy.contains('Pacino')
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').click().wait(3000)
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').click().wait(3000)

cy.log('cleanup')
cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Al Pacino').wait(3000)
cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
cy.get('.k-button-solid-primary').click()

    })
    })