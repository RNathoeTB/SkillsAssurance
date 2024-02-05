describe('Forgot Password', () => {

  it('Forgot Password', () => {

    cy.log('1. Observe opened Welcome back login page')
    cy.contains('Welcome back')
    cy.contains('Forgot password?').should('be.visible')
    
  })

})