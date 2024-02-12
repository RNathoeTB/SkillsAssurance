describe('Requirements', () => {
  beforeEach(() => {
    // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
    cy.log('Login')
    // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Nathoe')
    cy.get('#Login').click()  
  })


it.only('Add Email Category', () => {
    cy.log('1. Observe the grid')
    cy.get('#tree-item-12 > .k-link > .k-item-text').click()
    cy.contains('Personnel settings').click()
    cy.contains('Email categories').click()
    cy.get('.svx-grid').contains('th', 'Name').should('exist')
    cy.get('.svx-grid').contains('th', 'Name').should('exist')

    cy.get('k-table-td k-grid-content-sticky').find('.label').its('length').then(initialCount => {
    
    cy.log('2. Click on \'ADD\' button')
    cy.get('.svx-button > .telerik-blazor').click()
    cy.get('.svx-modal-header > div').contains('Email category').should('be.visible')
    cy.get('.input-group > .k-textbox').should('exist')
    cy.get(':nth-child(2) > .svx-formfield-content').should('exist')
    cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor > .k-button-text').should('exist').should('have.text', 'Cancel')
    cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').should('exist').contains('Save')

    cy.log('3. Provide valid email category name and click \'CANCEL\'')
    cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').click()
    cy.get('.svx-page-header-title').should('have.text', 'Personnel settings')

    cy.get('k-table-td k-grid-content-sticky').find('.label').its('length').should('eq', initialCount + 1);
        })





  })

})