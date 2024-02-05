// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
beforeEach(() => {
    cy.log('Go to url')
    cy.viewport(1200,660)
    cy.clearAllCookies()
    cy.log('Observe screen')
    cy.visit(
        'https://testing.skillsv10.com/',
            {
             failOnStatusCode: false,
          })
          cy.wait(10000).get('#Username').type('Richard')
          cy.get('#Password').type('Nathoe')
          cy.get('#Login').click()
          cy.wait(10000)
  })