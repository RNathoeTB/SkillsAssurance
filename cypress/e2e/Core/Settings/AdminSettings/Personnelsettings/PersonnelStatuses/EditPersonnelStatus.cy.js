describe('Settings > Personnel settings', () => {
beforeEach(() => {
//Voeg hier de stappen toe die je voor elke test wilt uitvoeren
  cy.log('Login')
//Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
  cy.get('#Username').type('Richard')
  cy.get('#Password').type('Nathoe')
  cy.get('#Login').click()

  cy.log('Cleanup \'Testcase2385ART\'')
  cy.get('#tree-item-12 > .k-link > .k-item-text').click()
  cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
  cy.get(' .k-link > .svx-font-2').eq(4).click()
  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Testcase2385ART')
  cy.get('.k-grid-content').should('contain', 'Testcase2385ART')
  cy.contains('Testcase2385ART').dblclick()
// Clear the existing text
// Type the new text 'New Name'
  cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').clear().type('Testcase2385')
  cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()

})
it.only('Edit Personnel Status', () => {
  cy.log('1. Double-click on a specific record in Personnel Status grid') 
  cy.get('#tree-item-12 > .k-link > .k-item-text').click()
  cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
  cy.get(' .k-link > .svx-font-2').eq(4).click()
  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Testcase2385')
  cy.get('.k-grid-content').should('contain', 'Testcase2385')
  cy.contains('Testcase2385').dblclick()
//'Personnel status' pop-up appears. It contains all of the prefilled data.

  cy.get('.svx-modal-header').contains('Personnel status')
  cy.get('.required-field').contains('Name')
  cy.get(':nth-child(2) > .svx-formfield-label > label').contains('Description')
  cy.get(':nth-child(3) > .svx-formfield-label > label').contains('Color')
  cy.get(':nth-child(4) > .svx-formfield-label > label').contains('Active')
  
  cy.log('2. Change the \'Name\' field to another valid name. Click \'Save\'.')
  cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').clear()
  cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Testcase2385ART')
  cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
  
// Pop-up closes.
  cy.get('.svx-modal-header > div').should('not.exist')
// The new Name is visible in the grid in place of the old Name.
  cy.get('#tree-item-12 > .k-link > .k-item-text').click()
  cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
  cy.get(' .k-link > .svx-font-2').eq(4).click()
  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Testcase2385ART')
  cy.get('.k-grid-content').should('contain', 'Testcase2385ART')
  cy.contains('Testcase2385ART').dblclick()

  cy.log('3. Open the same record again. Change the \'Description\' field to another valid text. Click \'Save\'.')
  cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').clear().type('Testen RN')
  cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()

  cy.get('#tree-item-12 > .k-link > .k-item-text').click()
  cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
  cy.get(' .k-link > .svx-font-2').eq(4).click()
  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Testcase2385ART')
  cy.get('.k-grid-content').should('contain', 'Testcase2385ART')
  cy.get('.k-grid-content').contains('Testen RN')

  













})





    

})