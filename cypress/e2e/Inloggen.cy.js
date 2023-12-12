describe('POC', () => {
  it('passes', () => {
    
    cy.wait(10000)
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Nathoe')
    cy.get('#Login').click()
    cy.get('.vx-logo > a > img').should('exist')

  })
})