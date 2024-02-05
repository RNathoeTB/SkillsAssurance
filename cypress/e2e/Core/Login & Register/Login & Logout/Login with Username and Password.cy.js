describe('Login with Username and Password', () => {
  
  it.only('logs in with usernamen and password', () => {

    cy.log('Observe screen')
    cy.contains('Welcome back', { timeout: 10000 }).click();
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Nathoe')
    cy.get('#Login').click()
    cy.wait(10000)
  })

})