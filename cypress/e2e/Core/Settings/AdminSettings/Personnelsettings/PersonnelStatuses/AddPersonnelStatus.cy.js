describe('Settings > Personnel settings', () => {
  beforeEach(() => {
    // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
   cy.log('Login')
    // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
   cy.get('#Username').type('Richard')
   cy.get('#Password').type('Nathoe')
   cy.get('#Login').click()
   
   cy.log('Cleanup')
   cy.get('#tree-item-12 > .k-link > .k-item-text').click()
   cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
   cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
   cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper').type('TestBoticsRN')
   cy.wait(2000)
   cy.get('.k-master-row > [data-col-index="0"]').click()
   cy.get('.k-button-solid-primary').click()
  })
  

  it.only('Add Personnel Status', () => {
   cy.log('1. Observe the grid')
    // The grid consists of columns:
    // Name
    // Active
    // Color
    // Description
   cy.get('#tree-item-12 > .k-link > .k-item-text').click()
   cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
   cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
   cy.get('[data-text="Name"] > .k-cell-inner > .k-link').contains('Name')
   cy.get('[data-text="Active"] > .k-cell-inner > .k-link').contains('Active')
   cy.get('[data-text="Color"] > .k-cell-inner > .k-link').contains('Color')
   cy.get('[data-text="Description"] > .k-cell-inner > .k-link').contains('Description')

   cy.log('2. Click on \'ADD\' button')
   cy.get('.svx-button > .telerik-blazor').click()
    // The pop-up dialog is opened with the following elements:
    // 'Personnel status' title
   cy.get('.svx-modal-header > div').contains('Personnel status');
    // 'Name' text field is marked as required
   cy.get('.svx-modal-body > :nth-child(1)').within(() => {
   cy.get('label').should('contain', 'Name')
  })
    // 'Description' text field 
   cy.get('.svx-modal-body > :nth-child(2)').within(() => {
   cy.get('label').should('contain', 'Description');
   cy.get('.input-group > .k-textbox').should('exist')
  })
    // 'Color' drop-down
   cy.get('.svx-modal-body > :nth-child(3)').within(() => {
   cy.get('label').should('contain', 'Color')
   cy.get('span.telerik-blazor.k-button-icon.k-icon.k-svg-icon.k-svg-i-caret-alt-down').find('svg').should('exist')
  })  
    // 'Active' checkbox (ticked by default)
   cy.get(':nth-child(4) > .svx-formfield-label > label').contains('Active')
   cy.get('input[type="checkbox"]').should('be.checked')
    // 'CANCEL' and 'SAVE' buttons
   cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').should('exist').should('contain', 'Cancel')
   cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').should('exist').should('contain', 'Save')

   cy.log('3. Enter \'Name\' and click \'CANCEL\' button ')
   cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Name')
   cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').click()
    // The pop-up dialog is closed.
   cy.get('.svx-modal').should('not.exist')
    // The user is redirected to the 'Personnel statuses' overview screen.
   cy.get('.k-link > .svx-font-2').eq(4).should('contain', 'Personnel statuses')

   
   
    // New personnel status is not created.



   cy.log('4. Click \'ADD\', provide valid data for all fields and click \'SAVE\'')
   cy.get('.svx-button > .telerik-blazor').click()
   cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('TestBoticsRN')
   cy.wait(1000)
   cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
   // The pop-up dialog is closed.
   cy.get('.svx-modal').should('not.exist')
   // The user is redirected back to the personnel statuses overview screen.
   cy.get('.k-link > .svx-font-2').eq(4).should('contain', 'Personnel statuses')

   cy.log('5. Observe the grid list ')
  //  The list is updated by newly created item.
   cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper').type('TestBoticsRN')
   cy.get('.k-master-row > [data-col-index="1"]').should('contain', 'TestBoticsRN')

   cy.log('6. Navigate to Employees overview grid and open an Employee profile; within the Organization tab, click \'EDIT\' and open the Personnel status drop down ')
   cy.get('#tree-item-4 > .k-link > .telerik-blazor').click()
   cy.get('#tree-item-4_0 > .k-link > .k-item-text') .click()
   cy.wait(3000)
   cy.get('[data-render-row-index="2"] > [data-col-index="1"] > .span-nav').click()
   cy.get('.k-tabstrip-items').eq(4).click()
   cy.wait(3000)
   cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
   cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(1) > .svx-formfield-content').contains('.telerik-blazor').click()
   








 





  
  
  
  
  
    })
  
  })