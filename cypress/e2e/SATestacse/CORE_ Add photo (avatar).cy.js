describe('CORE_Admin : Add Address Category', () => {
  
  it('checks if photo can be added to user as avatar', () => {
    
    cy.wait(10000)
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Nathoe')
    cy.get('#Login').click()
    cy.wait(10000)
    cy.contains('Settings').click()
    cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').click()
    cy.contains('Address categories').click()

  })
  
})