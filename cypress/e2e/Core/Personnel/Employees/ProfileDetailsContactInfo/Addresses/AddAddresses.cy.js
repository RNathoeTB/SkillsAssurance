describe('Personnel -> Employees -> Profile Details Contact Info', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()   
     // An employee is already created, no Address is added
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('AddAddress')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('OU 1').wait(5000).type('{enter}')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(5000)
    })
    
it('Addresses -> Add Address(es)', () => { 
cy.log('1. Observe Contact Info section and click on Address(es) ')
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('AddAddress').wait(5000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(3) > details > summary > .k-icon').click()
     cy.get(':nth-child(3) > details > .svx-panelbar-item-footer > .svx-button > .k-button').should('exist')

cy.log('2. Click on (+) Add address link')
     cy.get(':nth-child(3) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
     // The following elements are present:
     //  'Category' drop-down 
     cy.get(':nth-child(1) > .svx-formfield-content > .k-combobox').should('exist')
     // 'Address line 1' text field
     cy.get('.svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // 'Address line 2' text field
     cy.get('.svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // 'Address line 3' text field
     cy.get('.svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // 'Country' dropdown
     cy.get(':nth-child(5) > .svx-formfield-content > .k-combobox').should('exist')
     // 'Airport' dropdown
     cy.get(':nth-child(6) > .svx-formfield-content > .k-combobox').should('exist')

cy.log('4. Click on (+) Add address link')
     // Try to repeat step 2
     // (+) Add address' link is non functional.
     cy.get(':nth-child(3) > details > .svx-panelbar-item-footer > .svx-button')
     .find('.telerik-blazor.k-button.svx-button-secondary.svx-panelbar-add-button.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base.k-disabled')
     .should('be.disabled')

cy.log('4. Select a category from the list, enter information in address lines 1-3, select a country and an airport. Click SAVE')
     cy.get(':nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Work').wait(3000).type('{enter}')
     cy.get('.svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('AddAddress1')
     cy.get('.svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('AddAddress2')
     cy.get('.svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('AddAddress3')
     cy.get(':nth-child(5) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Brazil').wait(5000).type('{enter}')
     cy.get(':nth-child(6) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Abu Dhabi').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(2000).click()
     cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(3) > .k-card > .k-card-body').contains('AddAddress1, AddAddress2, AddAddress3 - Work')

cy.log('5. Click EDIT, expand the address(es) section and click on the Add address link')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(3) > details > summary > .k-icon').click()
     cy.get(':nth-child(3) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
     //  The following additional fields become available underneath the existing record:
     //  'Category' drop-down 
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(1) > .svx-formfield-content > .k-combobox').should('exist')
     // 'Address line 1' text field
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // 'Address line 2' text field
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // 'Address line 3' text field
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .input-group > .k-textbox').should('exist')
     // 'Country' dropdown
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(5) > .svx-formfield-content > .k-combobox').should('exist')
     // 'Airport' dropdown
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(6) > .svx-formfield-content > .k-combobox').should('exist')

cy.log('6. Fill in the required fields and click Cancel')
       cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Work').wait(3000).type('{enter}')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Address11')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Address22')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Address33')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(5) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Bermuda').wait(5000).type('{enter}')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(6) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Abeche').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').wait(2000).click()
     //  The screen changes to view mode. Adress record is not saved.
     cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(3) > .k-card > .k-card-body').contains('AddAddress1, AddAddress2, AddAddress3 - Work')
     
cy.log('7. Repeat step 5, fill in the required fields and click SAVE')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(3) > details > summary > .k-icon').click()
     cy.get(':nth-child(3) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Work').wait(3000).type('{enter}')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Address11')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Address22')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Address33')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(5) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Bermuda').wait(5000).type('{enter}')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(6) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Abeche').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(2000).click()
     //  The screen changes to view mode. Adress record is not saved.
     cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(3) > .k-card > .k-card-body').contains('AddAddress1, AddAddress2, AddAddress3 - Work')
     cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(3) > .k-card > .k-card-body').contains('Address11, Address22, Address33 - Work')

cy.log('cleanup')
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('AddAddress').wait(5000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
    })  
    })