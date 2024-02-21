describe('Settings > Personnel settings', () => {
    beforeEach(() => {
      // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
     cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Nathoe')
     cy.get('#Login').click()

     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
     cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Status 1')
     cy.wait(1000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     
    })
    // Test data:
    // The following personnel status was already created:'Status 1'

    it.only('Validation on Add/Edit Personnel Status', () => {
     cy.log('1. Do not fill any field in and click \'SAVE\' button')
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
     cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
    //  The pop-up dialog remains open.
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get('.svx-modal-header > div').should('contain', 'Personnel status')
    // 'Name' text field is highlighted as required.
     cy.get('input.k-input-inner[aria-invalid="true"]').should('exist')
    // On hover the following validation message is shown in tooltip:'Name is a required field' (not possible)

     cy.log('2. Enter the name that contains more than 255 characters (256 or more), click \'SAVE\'')
    const longName = 'A'.repeat(256); // Generating a string with length greater than 255
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type(longName)
     cy.wait(1000)
     cy.get(':nth-child(2) > .telerik-blazor > .k-button-text').click()
    //  The pop-up remains open.
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get('.svx-modal-header > div').should('contain', 'Personnel status')
    //  The 'Name' field is highlighted.
     cy.get('input.k-input-inner[aria-invalid="true"]').should('exist')
    //  On hover the following validation message is shown in the tooltip:'Name has a maximum of 255 allowed characters'

     cy.log('3. Enter \'Status 1\' in \'Name\' text field and click \'SAVE\' button ')
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
     cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Status 1')
     cy.wait(1000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
    //  The pop-up dialog remains open.
    //  cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
    //  cy.get('.svx-modal-header > div').should('contain', 'Personnel status')

     cy.log('4. Enter valid name. Move down to the Description text field and enter more than 5000 characters (5001 and more), click \'SAVE\'')
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
     cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
     cy.get('.svx-button > .telerik-blazor').click()
    const longName5000Plus = 'A'.repeat(5001)
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Status 1')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type(longName5000Plus)
     cy.wait(3000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     



   
   

     




    
  
    
      })
    
    })