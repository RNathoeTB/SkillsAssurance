describe('Login with Username and Password', () => {
  
  it.only('logs in with usernamen and password', () => {

    cy.wait(10000).get('#Username').type('Richard')
    cy.get('#Password').type('Nathoe')
    cy.get('#Login').click()
    cy.wait(10000)
  })

})