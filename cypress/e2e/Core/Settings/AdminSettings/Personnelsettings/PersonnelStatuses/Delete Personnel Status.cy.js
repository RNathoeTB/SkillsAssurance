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
     cy.wait(1000)
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Status 2')
     cy.wait(1000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()

     //  Navigate to Employees overview grid
     cy.get('#tree-item-4 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-4_0 > .k-link > .k-item-text') .click()
     //  open an Employee profile (with already a status)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Ritchie Nathoe')
     cy.wait(1000)
     cy.get('.k-grid-content').should('contain', 'Ritchie Nathoe').contains('Ritchie Nathoe ()').click()
     //  within the Organization tab, click \'EDIT\' and open the Personnel status drop down
     cy.wait(3000)
     cy.get('.k-tabstrip-item:contains("Organization")').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The newly created item is available for selection
  
     //  Select the newly created Status 1 and press 'SAVE'
     cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(1) > .svx-formfield-content')
     .find('input.k-input-inner').clear().type('Status 1').get('.k-list-container') // Assuming this is the container for the dropdown list
     .should('be.visible') // Ensure the dropdown list is visible
     .then(() => {
     let found = false;
     cy.get('body').type('{downarrow}'); // Press down arrow to start navigating through the list
     cy.get('.k-list-item').each(($item) => { // Iterate through each item in the list
       if ($item.text().includes('Status 1')) { // Check if the item contains the desired text
         found = true;
         cy.wrap($item).click(); // Click on the item if found
        } 
    });
  })

    })

    // Test data:
    // 'Status 1' - is defined at list for 1 employee
    // 'Status 2' - is created but not used yet

    it.only('Validation on Add/Edit Personnel Status', () => {
     cy.get('#tree-item-12 > .k-link > .k-item-text').click()
     cy.get(':nth-child(3) > .svx-settings-container-body > :nth-child(3) > a').contains('Personnel settings').click()
     cy.get('.k-tabstrip-items').contains('Personnel statuses').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Status 1')
     cy.wait(2000)
     cy.get('.k-grid-content').contains('Status 1')
     cy.get('.k-master-row > [data-col-index="1"]').contains('Status 1')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
    



    })
    
})