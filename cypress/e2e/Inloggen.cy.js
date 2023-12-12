describe('POC', () => {
  it('passes', () => {
    cy.visit(
  'https://testing.skillsv10.com/',
      {
       failOnStatusCode: false,
    })
    cy.wait(5000)
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Nathoe')
    cy.get('#Login').click()
    cy.get('.vx-logo > a > img').should('exist')

  })
})