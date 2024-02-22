describe('Roles', () => {
    beforeEach(() => {
      // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
      cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
      cy.get('#Username').clear().type('Richard')
      cy.get('#Password').clear().type('Nathoe')
      cy.get('#Login').click()  

      cy.log('Entry point:Manage Section -> Organization > Organizational Units')
      cy.contains('span.k-item-text', 'Organization').click(); //organization
      cy.contains('span.k-item-text', 'Organizational units').click(); //Organizational units
      cy.get('div.svx-page-header-title.svx-font-1[b-6hz6kw8com=""]').contains('Organizational units').should('exist')


    })


    it('Add Organizational Units', () => {

      cy.log('1. Observe the grid')
      cy.get('button.telerik-blazor.k-button.svx-button-additional.svx-button-no-text.svx-custom-treeview.organisational-unit-view-mode-selected.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base').should('exist')
      cy.contains('span.k-button-text', 'Filter').should('not.exist')
      cy.contains('span.k-column-title', 'Name').should('exist')
      cy.contains('span.k-column-title', 'Active').should('exist')
      cy.contains('span.k-column-title', 'Code').should('exist')
      cy.log('Bug')
      //cy.contains('span.k-column-title', 'Parent').should('exist')

      cy.log('2. Click on \'ADD\' button')
      cy.contains('span.k-button-text', 'Add').click()
      cy.contains('div.svx-block-header', 'Organizational unit info').should('exist')
      cy.get('span.k-switch[aria-checked="true"]').should('exist');
      cy.contains('span.k-button-text', 'Save').click();
      cy.get('input.k-input-inner[aria-invalid="true"]').should('exist')
      cy.contains('label.required-field', 'Name').should('exist')
      cy.contains('label', 'Active').should('exist');
      cy.contains('label', 'Name').should('exist');
      cy.contains('label', 'Code').should('exist');
      cy.log('Bug')
     // cy.contains('label', 'Parent').should('exist');

      cy.log('3.Enter a Name, Code and select a parent OU from the dropdown and click \'CANCEL\'')
      //Name
      cy.get('input.k-input-inner').eq(0).clear().type('NameOUART');
      //Code
      cy.get('input.k-input-inner').eq(1).clear().type('CodeOUART');
      //Parent
      cy.get('input.k-input-inner').eq(2).clear().type('A test');
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(2).type('{enter}')
      //Organizationale unit category
      cy.get('input.k-input-inner').eq(3).clear().type('Drillship');
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(3).type('{enter}')
      //Cancel
      cy.contains('Cancel').click();
      cy.get('button.telerik-blazor.k-button.svx-button-additional.svx-button-no-text.svx-custom-treeview.organisational-unit-view-mode-selected.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base').should('exist')
      cy.contains('NameOUART').should('not.exist')

      cy.log('4. Switch to list view')
      cy.get('button.telerik-blazor.k-button.svx-button-additional.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base').eq(1).click();
      cy.contains('span.k-button-text', 'Filter').should('exist')

      cy.log('5. Repeat step 3 and click \'Save\' button')
      cy.log('Click on \'ADD\' button')
      cy.contains('span.k-button-text', 'Add').click()
      cy.contains('div.svx-block-header', 'Organizational unit info').should('exist')
      cy.get('span.k-switch[aria-checked="true"]').should('exist');
      cy.contains('span.k-button-text', 'Save').click();
      //cy.contains('The Name field is required.')
      cy.get('input.k-input-inner[aria-invalid="true"]').should('exist')
      cy.contains('label.required-field', 'Name').should('exist')
      cy.contains('label', 'Active').should('exist');
      cy.contains('label', 'Name').should('exist');
      cy.contains('label', 'Code').should('exist');
      cy.log('Bug')
     //cy.contains('label', 'Parent').should('exist');

      cy.log('Enter a Name, Code and select a parent OU from the dropdown and click \'CANCEL\'')
      //Name
      let Name= 'NameOUART'
      cy.get('input.k-input-inner').eq(0).clear().type(Name);
      //Code
      cy.get('input.k-input-inner').eq(1).clear().type('CodeOUART');
      //Parent
      cy.get('input.k-input-inner').eq(2).clear().type('A test');
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(2).type('{enter}')
      //Organizationale unit category
      cy.get('input.k-input-inner').eq(3).clear().type('Drillship');
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(3).type('{enter}')
      //Cancel
      cy.contains('Save').click();
      cy.get('button.telerik-blazor.k-button.svx-button-additional.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base').eq(1).click();
      cy.contains('span.k-button-text', 'Filter').should('exist')
      cy.get('input.k-input-inner').eq(0).clear().type(Name);
      cy.contains(Name).should('exist')

      cy.log('6. Navigate to Employees overview grid and open an Employee profile; within the Organization tab, click \'EDIT\' and open the Organizational unit drop down')
      cy.contains('span.k-item-text', 'Personnel').click(); 
      cy.get('#tree-item-4_0 > .k-link > .k-item-text').click(); 
      cy.get('.k-filter-row > [data-col-index="1"]').clear().type('Rich Nath')
      cy.get('.k-grid-content').contains('Rich Nathoe ()').click()
      cy.wait(3000)
      cy.get('.k-tabstrip-items').contains('Organization').click()
      cy.contains('span.k-button-text', 'Edit').click();
      cy.get('input.k-input-inner').eq(3).clear().clear().type('A test'); 
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(3).type('{enter}')

      cy.log('7. Select the newly created OU and press \'SAVE\'')
      cy.contains('span.k-button-text', 'Save').click();
      cy.contains('A test').should('exist')
      cy.wait(5000)

      cy.log('8. Click \'CANCEL\' and observe')
      cy.contains('Cancel').click(); 
      cy.wait(5000)
      cy.get('.k-filter-row > [data-col-index="1"]').type('Rich Nath')
      cy.wait(5000)
      cy.contains('A test').should('exist')

    })


    it.only('Edit Organizational Units', () => {

      //Pre condition Add OU
      cy.contains('span.k-button-text', 'Add').click()
      cy.contains('div.svx-block-header', 'Organizational unit info').should('exist')

      let Name= 'editOUART'
      cy.get('input.k-input-inner').eq(0).clear().type(Name);
      //Code
      cy.get('input.k-input-inner').eq(1).clear().type('CodeOUART');
      //Parent
      cy.get('input.k-input-inner').eq(2).clear().type('A test');
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(2).type('{enter}')
      //Organizationale unit category
      cy.get('input.k-input-inner').eq(3).clear().type('Drillship');
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(3).type('{enter}')
      //Cancel
      cy.contains('Save').click();

      cy.log('1.Double-click on a OU not being a parent no OU\'s assigned as a child')
      cy.get('button.telerik-blazor.k-button.svx-button-additional.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base').eq(1).click();
      cy.contains('span.k-button-text', 'Filter').should('exist')
      cy.get('input.k-input-inner').eq(0).clear().type(Name);
    
      let nameCount;
      cy.get('tr.k-master-row.k-table-row').then($elements => {
        nameCount = $elements.length;
        cy.log(nameCount);
        cy.pause()
        cy.contains(Name).dblclick()
        cy.contains('div.svx-block-header', 'Organizational unit info').should('exist')
        cy.get('input.k-input-inner').eq(0).clear().type(Name);
        //Code
        cy.get('input.k-input-inner').eq(1).clear().type('CodeOUART');
        //Parent
        cy.get('input.k-input-inner').eq(2).clear().type('A test');
        cy.wait(3000)
        cy.get('input.k-input-inner').eq(2).type('{enter}')
        //Organizationale unit category
        cy.get('input.k-input-inner').eq(3).clear().type('Drillship');
        cy.wait(3000)
        cy.get('input.k-input-inner').eq(3).type('{enter}')
  
        cy.log('Disable \'Active\' and click \'Save\' button')
        cy.get('.k-switch-track').click();
        cy.contains('Save').click();

        cy.get('button.telerik-blazor.k-button.svx-button-additional.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base').eq(1).click();
        cy.contains('span.k-button-text', 'Filter').should('exist')
        cy.get('input.k-input-inner').eq(0).clear().type(Name);

      let newNameCount;
      cy.get('tr.k-master-row.k-table-row').then($newElements => {
        newNameCount = $newElements.length;
  
          // Perform assertion inside the nested callback
          expect(newNameCount).to.be.lessThan(nameCount);
        });
      });
            
    })
      
})