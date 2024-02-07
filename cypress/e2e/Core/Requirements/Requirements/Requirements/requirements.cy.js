describe('Requirements', () => {
    beforeEach(() => {
      // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
      cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
      cy.get('#Username').type('Richard')
      cy.get('#Password').type('Nathoe')
      cy.get('#Login').click()  
    })
  
    it.only('Add Global Requirement', () => {

      cy.log('1. Observe the grid')
      cy.contains('Requirements').click()
      cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()
      cy.get('[data-text="Requirement group"]').should('be.visible')

      cy.log('2. Click on \'ADD\' button')
      cy.get('.k-button-text').click()
      cy.get('.svx-page-header-title').should('have.text', 'Requirement')
      cy.contains('div', 'Evidence Info')
      cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-label > .required-field').should('have.text', 'Type')
      cy.get(':nth-child(2) > .svx-formfield-label > .required-field').should('have.text', 'Evidence')
      cy.get(':nth-child(2) > .svx-block-header > div').should('have.text', 'Requirement Info')
      cy.get(':nth-child(2) > .svx-block-body > :nth-child(1) > .svx-formfield-label > .required-field').should('have.text', 'Requirement type')
      cy.get(':nth-child(5) > .svx-formfield-label > .required-field').should('have.text', 'Requirement group')

      cy.log('3.Fill Requirement type, select Requirement group and select Evidence Type')
      cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('Certificate')
      cy.wait(3000)
      cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('{enter}')
      cy.get('input.k-input-inner').eq(2).type('Company Mandatory')
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(2).type('{enter}')
      cy.get('input.k-input-inner').eq(6).type('Europe')
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(6).type('{enter}')


    })
  
    // Voeg hier meer tests toe...
  })
  