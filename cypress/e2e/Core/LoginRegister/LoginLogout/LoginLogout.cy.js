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
    cy.get('#Password').type('Nathoe')
    cy.get('#Login').click()
    cy.contains('Dashboard').should('be.visible')
    cy.get('#Login').click()
  })

  it('Logout', () => {

    cy.log('Prepare')
    cy.contains('Welcome back').should('be.visible')
    cy.contains('Use the username provided by your company.').should('be.visible')
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Nathoe')
    cy.get('#Login').click()

    cy.log('1. Click on the Avatar in the top part of the menu')
    cy.contains('Dashboard').should('be.visible')
    cy.get('.profile-picture').click()
    cy.log('2. Click on Logout option')
    cy.contains('Logout').click();
    cy.contains('Welcome back').should('be.visible')
  })

  it.only('Forgot Password', () => {
    cy.log('1. Observe opened \'Welcome back\' screen')
    cy.contains('Forgot password?').should('be.visible')

    cy.log('2. Click on \'Forgot password?\' link and observe the page')
    cy.get('.login-card-form-bottom > :nth-child(2) > a').click()
    cy.contains('Forgot password?').should('be.visible')
    cy.contains('Enter your username and we\'ll send you a link to reset your password:').should('be.visible')
    cy.get('#Username').should('have.attr', 'placeholder', 'Username')

    cy.log('3. Click on the \'CANCEL\' button')
    cy.get('#btnCancelRequestNewPassword').click()
    cy.contains('Welcome back').should('be.visible')

    cy.log('4. Repeat step 2, enter a username (that does not exist in the system')
    cy.get('.login-card-form-bottom > :nth-child(2) > a').click()
    cy.contains('Forgot password?').should('be.visible')
    cy.contains('Enter your username and we\'ll send you a link to reset your password:').should('be.visible')
    cy.get('#Username').should('have.attr', 'placeholder', 'Username')
    cy.get('#Username').type('Ricardo')
    cy.get('input[name="Username"]').should('have.value', 'Ricardo')
    
    })

})