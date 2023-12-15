describe('CORE_Admin', () => {
  
  it.only('Add Address Category', () => {

    cy.contains('Settings').click()
    cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').click()
    cy.contains('Address categories').click()
    cy.get('[data-text="Name"] > .k-cell-inner > .k-link > .k-column-title').should('exist')
    cy.get('[data-text="Work"] > .k-cell-inner > .k-link > .k-column-title').should('exist')
    cy.get('.svx-button > .telerik-blazor').click()
    cy.get('.svx-modal-header > div').should('exist')
    cy.get('.svx-formfield-content > .k-textbox').type('work ART')
    cy.contains('Cancel').click()
    cy.contains('work ART').should('not.exist')
    cy.get('.svx-button > .telerik-blazor').click()
    cy.get('.svx-formfield-content > .k-textbox').type('work ART')
    cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
    cy.get(':nth-child(2) > .svx-formfield-label > label').click()
    cy.get(':nth-child(2) > .telerik-blazor > .k-button-text').click()
    cy.reload()
    cy.wait(10000).contains('Address categories').click()
    cy.wait(10000).get('.k-grid-content').contains('work ART')


  })

  it('Add Global Requirement', () => {
    
    cy.contains('Settings').click()
    cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').click()
    cy.contains('Address categories').click()

  })
  
})