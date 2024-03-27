describe('Personnel -> Employees -> Profile Details Contact Info', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()   
     // An employee is created with at least 2 emails.
     cy.get('#tree-item-4 > .k-link').click()
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('DeleteEmail')
     cy.get(':nth-child(7) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('OU 1').wait(5000).type('{enter}')
     cy.get(':nth-child(9) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Status 1').wait(5000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(5000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     cy.get(':nth-child(2) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Work').wait(3000).type('{enter}')
     cy.get('.svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('ritchie.nathoe@testbotics.nl')
     cy.get(':nth-child(2) > details > .svx-panelbar-item-footer > .svx-button > .k-button').click()
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(1) > .svx-formfield-content > .k-combobox').find('.k-input-inner').click().type('Private').wait(5000).type('{enter}')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('richard.nathoe@testbotics.nl').wait((3000))
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
    })
    
it('Emails -> Delete Email(s)', () => { 
cy.log('1. Expand the Email(s) section and observe')
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('DeleteEmail').wait(5000)
     cy.get('.k-master-row > [data-col-index="1"]').dblclick().wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     // At least 2 email records are showing, each having it's own bin icon
     cy.get(':nth-child(1) > .svx-panelbar-type-section > :nth-child(2)').should('exist').contains('Email')
     cy.get(':nth-child(2) > .svx-panelbar-type-section > :nth-child(2)').should('exist').contains('Email')
     cy.get(':nth-child(1) > .svx-panelbar-item-delete-field > .svx-button > .k-button').should('exist')
     cy.get(':nth-child(2) > .svx-panelbar-item-delete-field > .svx-button > .k-button').should('exist')

cy.log('2. Click on the bin icon of the first email')
     cy.get(':nth-child(1) > .svx-panelbar-item-delete-field > .svx-button > .k-button').click()
     //  The email entry disappears (Category, Email, Notes and Primary fields). Other email fields shift up.
   
cy.log('3. Click CANCEL')
     cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').click()
     //  The screen returns to view mode. All emails are still shown (the email was not deleted).
     cy.get(':nth-child(2) > .k-card > .k-card-body > :nth-child(1)').contains('ritchie.nathoe@testbotics.nl - Work')
     cy.get('.k-card-body > :nth-child(3)').contains('richard.nathoe@testbotics.nl - Private')

cy.log('4. Expand the Email(s) section, click on the bin icon of the first email and click SAVE')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get(':nth-child(2) > details > summary > .k-icon').click()
     cy.get(':nth-child(1) > .svx-panelbar-item-delete-field > .svx-button > .k-button').click()
     cy.get('.modal-buttons > :nth-child(2)').click()
     //  The screen returns to view mode. The email is deleted, no longer showing.
     cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(2) > .k-card > .k-card-body').should('not.contain', 'ritchie.nathoe@testbotics.nl - Work')

cy.log('cleanup')
     cy.get('#tree-item-4_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').type('DeleteEmail').wait(5000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

    })  
    })