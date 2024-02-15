describe('Settings', () => {
    beforeEach(() => {
      // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
      cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
      cy.get('#Username').type('Richard')
      cy.get('#Password').type('Nathoe')
      cy.get('#Login').click()  
    })
  
  
  it.only('Add Personnel Status', () => {
      cy.log('1. Observe the grid')
      
  
  
  
  
  
  
  
  
  
  
  
    })
  
  })