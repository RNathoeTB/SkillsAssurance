describe('Forgot Password', () => {

  it('Forgot Password', () => {

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