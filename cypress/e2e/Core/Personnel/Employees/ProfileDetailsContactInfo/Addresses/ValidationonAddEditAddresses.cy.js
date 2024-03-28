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
      cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('ValidationAddress')
      cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('OU 1').wait(5000).type('{enter}')
      cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(5000).type('{enter}')
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(5000)
    })
    
it('Emails -> Validation on Add/Edit Address(es)', () => { 
cy.log('1. Expand the Email(s) section, click Add Email link and press SAVE')
      cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
      cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('ValidationAddress').wait(5000)
      cy.get('.k-master-row > [data-col-index="1"]').dblclick().wait(3000)
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
      cy.get(':nth-child(3) > details > summary > .k-icon').click()
      cy.get(':nth-child(3) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(2000).click()
      //   Pop-up opens showing warning message:
      cy.get('.error-message').contains('Please fill all required address details')

cy.log('2. Click Close and select Home as Category and click SAVE')
      cy.get('.k-actions > .svx-button > .telerik-blazor').click()
      cy.get(':nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Home').wait(3000).type('{enter}')
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(2000).click()
      //   Pop-up opens showing warning message:
      cy.get('.error-message').contains('Please fill all required address details')

cy.log('3. Click Close and select a country and enter information in Address line 1 with more than 255 characters and click SAVE')
      const longName = 'a'.repeat(256)
      cy.get('.k-actions > .svx-button > .telerik-blazor').click() 
      cy.get(':nth-child(5) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Brazil').wait(5000).type('{enter}')
      cy.get('.svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type(longName)
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(2000).click()
      //   Pop-up opens showing warning message:
      cy.get('.error-message').contains('Address line has a maximum of 255 characters')
      
cy.log('4. Click Close, enter address info in address line 1 of less than 256 characters and enter information in Address line 2 with more than 255 characters and click SAVE')
      cy.get('.k-actions > .svx-button > .telerik-blazor').click()
      cy.get('.svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('address line 1')
      cy.get('.svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type(longName)
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(2000).click()
      // Pop-up opens showing warning message:
      cy.get('.error-message').contains('Address line has a maximum of 255 characters')

cy.log('5. Click Close, enter address info in address line 2 of less than 256 characters and enter information in Address line 3 with more than 255 characters and click SAVE')
      cy.get('.k-actions > .svx-button > .telerik-blazor').click()
      cy.get('.svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('address line 2')
      cy.get('.svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type(longName)
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(2000).click()
      // Pop-up opens showing warning message:
      cy.get('.error-message').contains('Address line has a maximum of 255 characters')

cy.log('6. Click Close, enter address info in address line 3 of less than 256 characters and click SAVE')
      cy.get('.k-actions > .svx-button > .telerik-blazor').click()
      cy.get('.svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('address line 3')
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(2000).click()
      // Screen returns to view mode. Address record has been successfully added.
      cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(3) > .k-card > .k-card-body').contains('address line 1, address line 2, address line 3 - Home')

cy.log('7. Click EDIT, expand the Address(es) section and click Add address link. Select the same Category as selected in step 2 (Home), fill the required fields with valid data (up to 255 characters) and click SAVE')
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()     
      cy.get(':nth-child(3) > details > summary > .k-icon').click()
      cy.get(':nth-child(3) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
      cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').type('Home').wait(3000).type('{enter}')
      cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Address1')
      cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Address2')
      cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Address3')
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(2000).click()
      // Pop-up opens showing warning message:
      cy.get('.error-message').contains('An item with this category already exists')
cy.log('BUG: saves duplicate category')

cy.log('8. Click Close and click CANCEL')
      cy.get('.k-actions > .svx-button > .telerik-blazor').click()
      // Screen return to view mode. Additional address record has not been added.
      cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(3) > .k-card > .k-card-body').contains('address line 1, address line 2, address line 3 - Home')
      cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(3) > .k-card > .k-card-body').should('not.contain', 'Address1, Address2, Address3 - Home')

cy.log('cleanup')
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('ValidationAddress').wait(5000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
    })  
    })