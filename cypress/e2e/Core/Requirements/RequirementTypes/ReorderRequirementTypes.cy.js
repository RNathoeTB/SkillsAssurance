describe('Requirements > Requirement Types', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     //  'Requirement type 1' is created, having 'Impacting compliance' enabled.
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Prio 1')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('prio1')
     cy.get('.k-switch[aria-checked="true"]').should('exist').wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()

     cy.get('.svx-grid-footer-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Prio 2')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('prio2')
     cy.get('.k-switch[aria-checked="true"]').should('exist').wait(2000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()

     // Certificate 'Requirement having type 1' is assigned to this type.
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('Duplicate')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  Specific employee has this requirement assigned.
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_0 > .k-link').click()
     cy.get('.svx-button > .telerik-blazor').click().wait(3000)
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('Certificate').wait(3000)
     cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(1).type('Requirement having type 1').wait(3000)
     cy.get('input.k-input-inner').eq(1).wait(3000).type('{downarrow}').type('{enter}')
     cy.get('input.k-input-inner').eq(1).type('{enter}')
     cy.get('input.k-input-inner').eq(2).type('Requirement type 1').wait(3000)
     cy.get('input.k-input-inner').eq(2).wait(3000).type('{enter}') 
     cy.get('input.k-input-inner').eq(6).wait(3000).type('Europe').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)

    })
    
it('Reorder Requirement Types', () => {
cy.log('1. Double-click on \'Requirement type 1\' record ')

     cy.log('cleanup')
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_3 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement type 1').wait(4000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement having type 1').wait(4000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('Requirement having type 1')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()

     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_0 > .k-link').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Requirement having type 1').wait(4000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
    })
    })