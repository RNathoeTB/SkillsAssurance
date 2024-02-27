describe('Settings > Personnel settings', () => {
    beforeEach(() => {
     cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
    })
    
    it('Add Certificate', () => {
cy.log('1. Observe the grid')
     // The grid contains the following columns:
     cy.get('#tree-item-10 > .k-link').click()
     cy.get('#tree-item-10_0 > .k-link').click()
     //  'Name'
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link > .k-column-title').should('have.class', "k-column-title").contains('Name')
     //  'Code'
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link > .k-column-title').should('have.class', "k-column-title").contains('Code')
     // 'Active' 
     cy.get('[data-text="Active"] > .k-cell-inner > .k-link > .k-column-title').should('have.class', "k-column-title").contains('Active')

cy.log('2. Click \'ADD\' button')
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     // The edit screen is opened with the following elements:
     // 'Certificate' title
     cy.get('.svx-page-header-title').should('have.class', "svx-page-header-title svx-font-1").contains('Certificate')
     // 'General' tab 
     cy.get('.k-link > .svx-font-2').eq(0).contains('General')
     // 'General Info' section
     cy.get('.svx-column-block-left > .svx-block > .svx-block-header > div').contains('General info')

cy.log('3. Observe \'General Info\' section')
     // The section contains the following elements:
     // 'Active' switch
     cy.get(':nth-child(1) > .svx-formfield > .svx-formfield-label > label').contains('Active')
     cy.get('.k-switch-track').should('have.class', 'k-switch-track k-rounded-full')
     // 'Name' mandatory field
     cy.get('.svx-block-body > :nth-child(2)').within(() => {cy.get('.required-field').should('exist')
     cy.contains('Name').should('exist'); // Ensure the element contains the text 'Name'
    })
     // 'Code' field
     cy.get('.svx-block-body > :nth-child(3)').within(() => {cy.get('.k-input-inner').should('exist')
     cy.contains('Code').should('exist') // Ensure there is a label element containing the text 'Code'
      })

cy.log('4. Enter a Name and Code and click \'CANCEL\'')
      

    })
    
    })