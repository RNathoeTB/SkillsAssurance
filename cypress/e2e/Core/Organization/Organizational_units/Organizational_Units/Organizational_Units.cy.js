describe('Organizational Units', () => {
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


    it('Edit Organizational Units', () => {

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
      
    it('Validation on Add/Edit Organizational Units', () => {

      //precondition
      //Menu -> Manage section -> Organisation -> Organisational units, click 'Add' button
      cy.contains('span.k-button-text', 'Add').click()
      //1. Do not fill any field in and click 'SAVE' button 
      cy.contains('Save').click()
      cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
      cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').click()
      cy.log('BUG: different message is shown: The Name is a required field')
      //cy.get('.k-child-animation-container > .telerik-blazor').contains('Name is a required field')

      //2. Enter 'OU 1' into 'Name' field and click 'SAVE' button
      const Name = 'OU 1'
      cy.get('input.k-input-inner').eq(0).clear().type(Name);
      cy.wait(3000)
      //Click Save
      cy.contains('span.k-button-text', 'Save').click();
      cy.contains(Name).dblclick();

      cy.log('Bug')
      //3. Double-click on just created item 'OU 1' and within Parent field select 'Parent 1'
      //cy.get('input.k-input-inner').eq(2).clear().type('Parent 1');
      //cy.wait(3000)

      //4. Rename the OU by entering a name that contains 256 or more characters and click 'SAVE'
      const longName = 'a'.repeat(257)
      cy.get('input.k-input-inner').eq(0).clear().type(longName);
      cy.contains('span.k-button-text', 'Save').click();
      cy.get('.svx-block-body > :nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').click()
      cy.log('Bug')
      //cy.get('.k-child-animation-container > .telerik-blazor').contains('Name has a maximum of 255 characters.')  

      //5. Provide valid OU name (255 or less characters and not yet existing) and click 'SAVE' button 
      cy.get('input.k-input-inner').eq(0).clear().type(Name);
      cy.wait(3000)
      //Click Save
      cy.contains('span.k-button-text', 'Save').click();
      cy.wait(3000)
      cy.contains(Name).dblclick();

      //6. Reopen item and enter a code that contains 256 or more characters and click 'SAVE'
      cy.get('input.k-input-inner').eq(1).clear().type(longName);
      cy.contains('span.k-button-text', 'Save').click();
      cy.get('.svx-block-body > :nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').click() 
      cy.log('Bug')
      //cy.get('.k-child-animation-container > .telerik-blazor').contains('Code has a maximum of 255 characters')  

      //7. Provide valid code (255 or less characters) and click 'SAVE' button 
      cy.get('input.k-input-inner').eq(1).clear().type(Name);
      cy.contains('span.k-button-text', 'Save').click();
      cy.contains(Name).dblclick();


  })

  it.only('Permissions Handling of Organizational Units', () => {

    //precondition
    //2. Click 'ADD', fill all required fields and click 'SAVE'
    cy.contains('span.k-button-text', 'Add').click()
    const Name = 'Permisssion'
    cy.get('input.k-input-inner').eq(0).clear().type(Name);
    cy.wait(3000)
    //Click Save
    cy.contains('span.k-button-text', 'Save').click();

    //3. Double-click on the just added record and change the name and click 'SAVE'
    cy.wait(3000)
    cy.contains(Name).dblclick();
    cy.get('input.k-input-inner').eq(0).clear().type(Name);
    cy.wait(3000)
    //Click Save
    cy.contains('span.k-button-text', 'Save').click();
    
    //4. Click on the bin icon of the just created/updated item.   
    cy.get('tr.k-master-row')
    .contains('td', Name)
    .siblings('td')
    .find('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-trash[aria-hidden="true"]')
    .click();

    //5. Click 'Yes'
    cy.log('BUG') //should be Yes instead of OK 
    cy.contains('button.k-button', 'Yes').click();
    cy.contains(Name).should('not.exist');

    //6. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab
    cy.get('#tree-item-12 > .k-link').click()
    cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
    cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
    cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
    cy.wait(2000)
    cy.get('.k-link > .svx-font-2').eq(1).click()
    cy.get('.k-link > .svx-font-2').eq(5).click()

    //7. Unselect 'Delete' and click 'SAVE' button
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group > .k-group-end')
     .invoke('attr', 'aria-pressed').then(ariaPressed => {
     if (ariaPressed === 'true') {
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .svx-permission-block-body > :nth-child(2) > .right-column > .k-button-group > .k-group-end').click();
    } 
  })

  cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The edit security group dialog is closed.
     // 'Save successful' notification message is shown.
     cy.contains('Save succesful')
  cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
      cy.get('.dismiss').click()
  cy.log('BUG: "Save successful" notification message is not shown.')

  //8. Re-login and navigate to the Organizational units overview
  cy.log('8. Re-login and navigate to the Organizational unit groups overview')
     cy.get('.profile-picture').click()
     cy.contains('Logout').click()
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     cy.get('#tree-item-8 > .k-link').click()
     cy.get('#tree-item-8_4 > .k-link').click().wait(5000)
     //  User is not able to remove grid records.
     //  Bin icons are not available. 
  cy.log('BUG: Bin icons are available ')
     //  'ADD' button is available.
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').should('exist').contains('Add')

  //9. Click 'ADD', fill all required fields and click 'SAVE'
  cy.log('9. Click \'ADD\', fill all required fields and click \'SAVE\'')
  cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
  cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('TC1095changedstep9')
  cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
  //  The user is redirected to the 'Organizational unit groups' overview screen.
  cy.get('.svx-page-header-title').contains('Organizational unit groups')
  // The grid list is updated with newly created item.
  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('TC1095changedstep9').wait(3000)
  cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('TC1095changedstep9')

cy.log('10. Double-click on the just added record and change the name and click \'SAVE\'')
  cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('TC1095changedstep9').dblclick()
  //  change the name and click 'SAVE'
  cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC1095changedstep10').wait(3000)
  cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
  //  The user is redirected to the 'Organizational unit groups' overview screen.
  cy.get('.svx-page-header-title').contains('Organizational unit groups')
  //  The grid list is updated with updated item.
  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('TC1095changedstep10').wait(3000)
  cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('TC1095changedstep10')

cy.log('11. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Organizational unit groups unselect \'Create\' and click \'SAVE\'')
  cy.get('#tree-item-12 > .k-link').click().wait(2000)
  cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
  cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
  cy.wait(2000)
  cy.get('.k-link > .svx-font-2').eq(1).click()
  cy.get('.k-link > .svx-font-2').eq(5).click()
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .svx-permission-block-body > :nth-child(2) > .right-column').contains('.telerik-blazor', 'Create')
  .invoke('attr', 'aria-pressed').then(ariaPressed => {
  if (ariaPressed === 'true') {
     cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .svx-permission-block-body > :nth-child(2) > .right-column').contains('.telerik-blazor', 'Create').click();
 } else {
   // If aria-pressed is already false, no action is needed
 }
})
  cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
  // The edit security group dialog is closed.
  // 'Save successful' notification message is shown.
  cy.contains('Save succesful')
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
  cy.get('.dismiss').click()
cy.log('BUG: "Save successful" notification message is not shown.')

cy.log('12. Re-login and navigate to the Organisational unit groups overview')
  cy.get('.profile-picture').click()
  cy.contains('Logout').click()
  cy.get('#Username').type('Richard')
  cy.get('#Password').type('Test123')
  cy.get('#Login').click()
  cy.get('#tree-item-8 > .k-link').click()
  cy.get('#tree-item-8_4 > .k-link').click().wait(5000)
  // 'ADD' button is not available. Bin icons are not available.
cy.log('BUG: ADD and Bin icons are available ')

cy.log('13. Double-click on any record and change the name and click \'SAVE\'')
  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('TC1095changedstep10').wait(3000)
  cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('TC1095changedstep10').dblclick()
  //  change the name and click 'SAVE'
  cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC1095changedstep13').wait(3000)
  cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').wait(3000).click().wait(3000)
  //  The user is redirected to the 'Organizational unit groups' overview screen.
  cy.get('.svx-page-header-title').contains('Organizational unit groups')
  //  The grid list is updated with updated item.
  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().wait(3000).type('TC1095changedstep13').wait(3000)
  cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('TC1095changedstep13')

cy.log('14. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Organizational unit groups unselect \'Update\' and click \'SAVE\'')
  cy.get('#tree-item-12 > .k-link').click()
  cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a > div').click()
  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
  cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
  cy.wait(2000)
  cy.get('.k-link > .svx-font-2').eq(1).click()
  cy.get('.k-link > .svx-font-2').eq(5).click()
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .svx-permission-block-body > :nth-child(2) > .right-column').contains('.telerik-blazor', 'Update')
  .invoke('attr', 'aria-pressed').then(ariaPressed => {
  if (ariaPressed === 'true') {
     cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .svx-permission-block-body > :nth-child(2) > .right-column').contains('.telerik-blazor', 'Update').click();
 } else {
   // If aria-pressed is already false, no action is needed
 }
})
  cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
  // The edit security group dialog is closed.
  // 'Save successful' notification message is shown.
  cy.contains('Save succesful')
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
  cy.get('.dismiss').click()
cy.log('BUG: "Save successful" notification message is not shown.')

cy.log('15. Re-login, navigate to the Organisational unit groups overview')
  cy.get('.profile-picture').click()
  cy.contains('Logout').click()
  cy.get('#Username').type('Richard')
  cy.get('#Password').type('Test123')
  cy.get('#Login').click()
  cy.get('#tree-item-8 > .k-link').click()
  cy.get('#tree-item-8_4 > .k-link').click().wait(5000)
  // 'ADD' button is not available. Bin icons are not available.
cy.log('BUG: ADD and Bin icons are available ')

cy.log('16. Double-click on any record and observe')
  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('TC1095changedstep13').wait(3000)
  cy.get('.k-master-row > [data-col-index="1"]').contains('TC1095changedstep13').dblclick().wait(2000)
  // All fields are uneditable.
cy.log('BUG: All fields are editable ')
  cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').click().wait(3000)

cy.log('17. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Organizational unit groups unselect \'View\' and click \'SAVE\'')
  cy.get('#tree-item-12 > .k-link').click().wait(2000)
  cy.get(':nth-child(1) > .svx-settings-container-body > :nth-child(2) > a').click()
  cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('Admin settings').wait(3000)
  cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('Admin settings').dblclick()
  cy.wait(2000)
  cy.get('.k-link > .svx-font-2').eq(1).click()
  cy.get('.k-link > .svx-font-2').eq(5).click()
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .svx-permission-block-body > :nth-child(2) > .right-column').contains('.telerik-blazor', 'View')
  .invoke('attr', 'aria-pressed').then(ariaPressed => {
  if (ariaPressed === 'true') {
     cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .svx-permission-block-body > :nth-child(2) > .right-column').contains('.telerik-blazor', 'View').click();
 } else {
   // If aria-pressed is already false, no action is needed
 }
})
  cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
  // The edit security group dialog is closed.
  // 'Save successful' notification message is shown.
  cy.contains('Save succesful')
cy.log('BUG: "An unhandled error has occurred. Reload" message is shown')
  cy.get('.dismiss').click()
cy.log('BUG: "Save successful" notification message is not shown.')

cy.log('18. Re-login and navigate to MANAGE -> Requirements')
  cy.get('.profile-picture').click()
  cy.contains('Logout').click()
  cy.get('#Username').type('Richard')
  cy.get('#Password').type('Test123')
  cy.get('#Login').click()
  cy.get('#tree-item-8 > .k-link').click()
  cy.get('#tree-item-8_4 > .k-link').click().wait(5000)
  // 'Organisational unit groups' is no longer available in submenu.
cy.log('BUG: Requirement groups on tabs strip menu is STILL available')
  cy.get('.k-panelbar-group').should('not.contain', 'Requirement types')

cy.log('cleanup: Delete OUG') 
cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).type('TC1095changedstep13').wait(3000)
  cy.get('.k-master-row > [data-col-index="1"]').contains('TC1095changedstep13')
  cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
  cy.get('.k-button-solid-primary').click()

})
    
})