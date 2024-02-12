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
    cy.get('.svx-grid').contains('Name').should('exist')
    cy.get('.svx-grid').contains('Work').should('exist')
    cy.get('.svx-grid') 
 




  })

})