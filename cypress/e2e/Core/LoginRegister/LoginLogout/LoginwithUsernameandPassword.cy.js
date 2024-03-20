describe('Login & Logout', () => {
  
  it('Login with Username and Password', () => {

    cy.log('1. Observe screen')
    cy.contains('Welcome back')
    cy.contains('Use the username provided by your company.').click();
    cy.get('#Username').should('be.visible')
    cy.get('#Password').should('be.visible')
    cy.get('#Login').should('be.visible')

    cy.log('2. Fill in correct Username, but add an incorrect password')
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Natho')
   
    cy.log('3. Click Login')
    cy.get('#Login').click()
    cy.contains('Wrong username or password').should('be.visible')

    cy.log('4. Change the password by entering the valid password and click Login')
    cy.get('#Password').type('Test123')
    cy.get('#Login').click()
    cy.contains('Dashboard').should('be.visible')
    
  })

  it('Logout', () => {

    cy.log('Prepare')
    cy.contains('Welcome back').should('be.visible')
    cy.contains('Use the username provided by your company.').should('be.visible')
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Test123')
    cy.get('#Login').click()

    cy.log('1. Click on the Avatar in the top part of the menu')
    cy.contains('Dashboard').should('be.visible')
    cy.get('.profile-picture').click()
    cy.log('2. Click on Logout option')
    cy.contains('Logout').click();
    cy.contains('Welcome back').should('be.visible')
  })


})