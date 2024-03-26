describe('Personnel -> Employees -> Profile Details Contact Info', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()   
     // An employee is created having at least 2 emails added of which 1 has been indicated as primary one.
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('EditEmail')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('OU 1').wait(5000).type('{enter}')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(5000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     cy.get(':nth-child(2) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Work').wait(5000).type('{enter}')
     cy.get('.svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('ritchie.nathoe@testbotics.nl')
     cy.get(':nth-child(1) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('comment').wait(3000)
     cy.get(':nth-child(2) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Private').wait(5000).type('{enter}')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('richard.nathoe@testbotics.nl')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('commentstep6')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .k-checkbox-wrap').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
    })
    
it('Emails -> Add Email(s)', () => {
cy.log('1. Observe Contact Info section and click on Email(s) ')
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('EditEmail').wait(5000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     // For each added email, the fields 'Category', 'Email', 'Notes' and 'Primary' are visible. 

cy.log('2. For one entry, change the category to another one in the list and click SAVE')
     cy.get(':nth-child(1) > .svx-panelbar-type-section > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').clear().type('WorkART').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The screen changes to view mode. Email information including updated category is shown.
     cy.get(':nth-child(2) > .k-card > .k-card-body > :nth-child(1)').contains('ritchie.nathoe@testbotics.nl - WorkART')


cy.log('3. Click Edit, expand the Email(s) section and change the email of one of the entries (using valid email). Click SAVE')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     cy.get(':nth-child(1) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('ritchie.nathoe@test.nl').wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The screen changes to view mode. Email information including updated category is shown.
     cy.get(':nth-child(2) > .k-card > .k-card-body > :nth-child(1)').contains('ritchie.nathoe@test.nl - WorkART')

cy.log('4. Click Edit, expand the Email(s) section and change/add notes to one of the entries. Click SAVE')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     cy.get(':nth-child(1) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('commentchanged').wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
  
cy.log('5. Click Edit, expand the Email(s) section and change/add notes to one of the entries. Click SAVE')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     cy.get(':nth-child(1) > .svx-panelbar-type-section > :nth-child(3) > .svx-formfield-content > .input-group')
     .find('.k-input-inner').invoke('val').then((value) => {expect(value.trim()).to.include('commentchanged')})
      
cy.log('6. Uncheck the Primary checkbox of the applicable entry and click SAVE')
cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .k-checkbox-wrap').find('input[type="checkbox"]').should('have.attr', 'aria-checked', 'true')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(4) > .svx-formfield-content > .k-checkbox-wrap').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(2) > .k-card > .k-card-body').should('not.contain', 'Primary')

cy.log('cleanup')
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('EditEmail').wait(5000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

    })  
    })