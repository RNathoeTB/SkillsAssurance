describe('Settings > Personnel settings', () => {
    beforeEach(() => {
      // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
     cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Nathoe')
     cy.get('#Login').click()
     
    })
    
  
    it.only('Validation on Add/Edit Personnel Status', () => {
     cy.log('1. Do not fill any field in and click \'SAVE\' button')
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
     cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
    // 'Name' text field is highlighted as required.
    // On hover the following validation message is shown in tooltip:'Name is a required field'
    cy.get('label[for="_a07359be8d33428db5ff5284379196c4"]').should('have.css', 'color', 'rgb(0, 128, 0)');

    //  cy.get('.svx-form input[name="name"]').should('have.css', 'border-color', 'rgb(0, 128, 0)')

     




    
  
    
      })
    
    })