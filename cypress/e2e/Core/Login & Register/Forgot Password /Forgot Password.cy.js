describe('Forgot Password', () => {

  it('Forgot Password', () => {

    cy.log('1. Observe opened Welcome back login page')
    cy.contains('Welcome back')
    cy.contains('Forgot password?').should('be.visible')
    cy.contains('Forgot password?').click()

    cy.log('2. Click on Forgot password link and observe the page')
    cy.contains('Forgot password?').should('be.visible')
    cy.contains('Enter your username and we\'ll send you a link to reset your password:').should('be.visible')
    cy.get('#btnCancelRequestNewPassword').should('be.visible')
    cy.get('#setpassword-submit-btn').should('be.visible')

    cy.log('3. Click on the \'CANCEL\' button')
    cy.get('#btnCancelRequestNewPassword').click()
    cy.contains('Welcome back')

    cy.log('4. Repeat step 2, enter a username (that does not exist in the system)')
    cy.contains('Forgot password?').click()
    cy.get('#Username').type('ART')

    cy.log('5. Click on the \'SEND\' button')
    cy.get('#setpassword-submit-btn').click()
    cy.contains('User ART not found').should('be.visible')

    cy.log('6. Enter a username for an existing account')
    cy.get('#Username').clear().type('Richard')
    
    cy.log('7. Repeat step 5')
    cy.get('#setpassword-submit-btn').click()
    cy.contains('An email is sent to you with instructions to reset your new password.').should('be.visible')
    
    
  })

})