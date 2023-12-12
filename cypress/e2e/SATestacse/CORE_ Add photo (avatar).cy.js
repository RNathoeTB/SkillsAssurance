describe('CORE_ Add photo (avatar)', () => {
  it('checks if photo can be added to user as avatar', () => {
    
    cy.wait(10000)
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Nathoe')
    cy.get('#Login').click()
    cy.get('.vx-logo > a > img').should('exist')

  })
})