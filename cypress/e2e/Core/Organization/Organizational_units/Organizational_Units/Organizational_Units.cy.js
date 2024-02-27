describe('Roles', () => {
    beforeEach(() => {
      // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
      cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
      cy.get('#Username').clear().type('Richard')
      cy.get('#Password').clear().type('Test123')
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
      cy.get('.k-grid-content').contains('Rich Test123 ()').click()
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

        function generateUniqueVariable(length = 13) {
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let result = '';
          for (let i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * characters.length));
          }
          return result;
        }

        const Name = 'Name' + generateUniqueVariable();
        console.log(Name); // Output will be a unique string with 13 characters

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
        cy.wait(3000)
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

        cy.log('2. Disable \'Active\' and click \'Save\' button')
          cy.get('.k-switch-track').click();
          cy.contains('Save').click();

          cy.get('button.telerik-blazor.k-button.svx-button-additional.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base').eq(1).click();
          cy.contains('span.k-button-text', 'Filter').should('exist')
          cy.get('input.k-input-inner').eq(0).clear().type(Name.substring(0, 10));

          cy.contains(Name).should('not.exist')

        cy.log('3. Navigate to Personnel > Employees and open any profile. Open the Organization tab and click \'EDIT\'. Open the \'Organizational unit\' dropdown.')
          cy.contains('span.k-item-text', 'Personnel').click(); 
          cy.get('#tree-item-4_0 > .k-link > .k-item-text').click(); 
          cy.get('.k-filter-row > [data-col-index="1"]').type('Rich Nath')
          cy.get('.k-grid-content').contains('Rich Nathoe ()').click()
          cy.wait(3000)
          cy.get('.k-tabstrip-items').contains('Organization').click()
          cy.contains('span.k-button-text', 'Edit').click();
          cy.wait(3000)
          cy.get('input[role="combobox"]').eq(0).clear().type(Name.substring(0, 10)).wait(3000);
        cy.log('BUG: OU is still visible in dropdown')
          //cy.contains(Name).should('not.exist')

        cy.log('4. Navigate to Organization > Organizational units. Double-click on an OU with active children')
        cy.contains('span.k-item-text', 'Organization').click(); //organization
        cy.contains('span.k-item-text', 'Organizational units').click(); //Organizational units
        cy.get('div.svx-page-header-title.svx-font-1[b-6hz6kw8com=""]').contains('Organizational units').should('exist')
        cy.get('.svx-organisational-unit-header-buttons > :nth-child(1) > .svx-button > .k-button > .telerik-blazor').click()
        let ouName;

        cy.get('td.k-table-td.k-grid-content-sticky[role="gridcell"][aria-colindex="2"]')
        .eq(0)
        .invoke('text')
        .then(text => {
        const ouName = text.trim(); // Trim any leading or trailing whitespace
        cy.log(ouName); // Log the value of ouName
        cy.contains(ouName).dblclick()


        cy.get('span.k-switch.k-disabled.telerik-blazor.k-switch-on.k-rounded-full.k-switch-md[aria-checked="true"][aria-disabled="true"]').should('exist')
        cy.log('BUG: Information text is not shown')
        //cy.contains('Can\'t be made inactive as it has active children').should('exist')

        let newOuName = ouName + 'ART';
        cy.log('6. Change the Name and click \'SAVE\'')
        cy.get('input.k-input-inner').eq(0).clear().type(newOuName);
        cy.get('input.k-input-inner').eq(0).type('{enter}')
        cy.contains('Save').click();
        cy.get('div.svx-page-header-title.svx-font-1[b-6hz6kw8com=""]').contains('Organizational units').should('exist')
        cy.contains(newOuName).should('exist')

        cy.log('7. Re-open the record, change the Code and click \'SAVE\'')
        cy.contains(newOuName).dblclick();
        let newCode='CodeOUART'
        cy.get('input.k-input-inner').eq(1).clear().type(newCode);
        cy.wait(3000)
        cy.get('input.k-input-inner').eq(1).type('{enter}')
        cy.contains('Save').click();
        cy.get('div.svx-page-header-title.svx-font-1[b-6hz6kw8com=""]').contains('Organizational units').should('exist')
        cy.contains(newCode).should('exist')

        cy.log('BUG: When adding or changing parent the OU is not displayed anymore in the grid')
        cy.log('8. Re-open the record, change the Parent and click \'SAVE\'')
        /*cy.contains(newOuName).dblclick();
        cy.get('input.k-input-inner').eq(2).clear().type('A test');
        cy.wait(3000)
        cy.get('input.k-input-inner').eq(2).type('{enter}')
        cy.wait(3000)
        cy.contains('Save').click();
        cy.get('div.svx-page-header-title.svx-font-1[b-6hz6kw8com=""]').contains('Organizational units').should('exist')
        cy.contains(newCode).should('exist') */

        cy.log('9. Navigate to Personnel > Employees and open the profile of an Employee assigned to the OU edited in step 6. Open the Organization tab and click \'EDIT\'. Open the \'Organizational unit\' dropdown.')
        cy.contains('span.k-item-text', 'Personnel').click(); 
        cy.get('#tree-item-4_0 > .k-link > .k-item-text').click(); 
        cy.get('.k-filter-row > [data-col-index="1"]').type('Rich Nath')
        cy.get('.k-grid-content').contains('Rich Nathoe ()').click()
        cy.wait(3000) 
        cy.get('.k-tabstrip-items').contains('Organization').click()
        cy.contains('span.k-button-text', 'Edit').click();
        cy.wait(3000)
        cy.get('input[role="combobox"]').eq(0).clear().type(newOuName.substring(0, 6)).wait(3000);
        cy.contains(newOuName).should('exist')

        //clean up
        cy.contains('span.k-item-text', 'Organization').click(); //organization
        cy.contains('span.k-item-text', 'Organizational units').click(); //Organizational units
        cy.get('div.svx-page-header-title.svx-font-1[b-6hz6kw8com=""]').contains('Organizational units').should('exist')
        cy.contains(newOuName).dblclick()
        cy.get('input.k-input-inner').eq(0).clear().type(ouName);
        cy.get('input.k-input-inner').eq(0).type('{enter}')
        cy.wait(3000)
        cy.contains('Save').click();
        cy.get('div.svx-page-header-title.svx-font-1[b-6hz6kw8com=""]').contains('Organizational units').should('exist')
        cy.contains(ouName).should('exist')
        cy.contains(newOuName).should('not.exist')

        });
            
    })
      
})