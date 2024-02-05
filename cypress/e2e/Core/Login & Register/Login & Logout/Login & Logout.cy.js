describe('Login & Logout', () => {
  
  it('Login with Username and Password', () => {

    cy.log('1. Observe screen')
    cy.contains('Welcome back', { timeout: 10000 }).click();
    cy.contains('Use the username provided by your company.', { timeout: 10000 }).click();
    cy.get('#Username')
    cy.get('#Password')
    cy.get('#Login')

    cy.log('2. Fill in correct Username, but add an incorrect password')
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Natho')
   
    cy.log('3. Click Login')
    cy.get('#Login').click()
    cy.contains('Wrong username or password', { timeout: 15000 }).click();

    cy.log('4. Change the password by entering the valid password and click Login')
    cy.get('#Password').type('Nathoe')
    cy.get('#Login').click()
    cy.contains('Dashboard', { timeout: 15000 })
    
  })

  it('Logout', () => {

    cy.log('Prepare')
    cy.contains('Welcome back', { timeout: 10000 }).click();
    cy.contains('Use the username provided by your company.', { timeout: 10000 }).click();
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Nathoe')
    cy.get('#Login').click()

    cy.log('1. Click on the Avatar in the top part of the menu')
    cy.contains('Dashboard', { timeout: 15000 })
    cy.get('.profile-picture').click()
    cy.log('2. Click on Logout option')
    cy.contains('Logout', { timeout: 10000 }).click();
    cy.contains('Welcome back', { timeout: 10000 }).click();
    
  })

})