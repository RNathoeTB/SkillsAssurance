beforeEach(() => {
    cy.log('Go to url')
    cy.viewport(1920,1080)
    cy.clearAllCookies()
    cy.visit(
        'https://testautomation.skillsv10.com/',
            {
             failOnStatusCode: false,
          })
  })