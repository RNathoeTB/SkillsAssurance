describe('Roles', () => {
    beforeEach(() => {
      // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
      cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
      cy.get('#Username').type('Richard')
      cy.get('#Password').type('Test123')
      cy.get('#Login').click()  

      cy.log('Entry point: Manage Section -> Organization > Roles')
      cy.contains('span.k-item-text', 'Organization').click(); //organization
      cy.contains('span.k-item-text', 'Roles').click(); //roles

    })
  
  
  it('Add Role', () => {
    cy.log('1. Observe the grid')
    cy.log('Bug: not alle colums are shown')
    cy.contains('span.k-column-title', 'Name').should('exist');
    cy.contains('span.k-column-title', 'Active').should('exist');
    cy.contains('span.k-column-title', 'Code').should('exist');
    cy.contains('span.k-column-title', 'Main role').should('exist');
    cy.contains('span.k-column-title', 'Additional role').should('exist');
    cy.contains('span.k-column-title', 'Formal role').should('exist');

    cy.log('2. Click on \'ADD\' button')
    cy.contains('span.k-button-text', 'Add').click();
    cy.contains('div.svx-page-header-title', 'Role').should('exist');
    //Role Info section title
    cy.contains('label', 'Active').should('exist');
    cy.contains('label', 'Name').should('exist');
    cy.contains('label', 'Code').should('exist');
    cy.contains('label', 'Role area').should('exist');
    cy.contains('label', 'Role group').should('exist');

    //Configuration section title
    cy.contains('div', 'Configuration').should('exist');
    cy.contains('label', 'Main role').should('exist');
    cy.contains('label', 'Additional role').should('exist');
    cy.contains('label', 'Formal role').should('exist');
    cy.get('label.required-field').contains('Name').should('exist'); //Name requires field
    cy.get('span.k-switch').find('input[type="checkbox"]').should('have.attr', 'value', 'true'); //Name checkbox

    cy.log('Enter a Name, Code and check the \'Main role\' box and click \'CANCEL\'')
    cy.get('input.k-input-inner').eq(0).type('TestART');
    cy.get('input.k-input-inner').eq(1).type('TestART');
    cy.contains('label', 'Main role').click();
    cy.contains('Cancel').click(); //cancel
    //The user is redirected to the Roles overview screen.
    cy.contains('div.svx-page-header-title', 'Role').should('exist');
    //The new role is not added.
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).type('TestART');
    cy.wait(3000)
    cy.contains('TestART').should('not.exist')

    cy.log('Repeat step 2-3 and click \'Save\' button')
    cy.contains('span.k-button-text', 'Add').click();
    cy.get('input.k-input-inner').eq(0).type('TestART');
    cy.get('input.k-input-inner').eq(1).type('TestART');
    cy.contains('label', 'Main role').click();
    cy.contains('span.k-button-text', 'Save').click();
    cy.contains('div.svx-page-header-title', 'Role').should('exist');
    //The new role is added.
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).type('TestART');
    cy.wait(6000)
    cy.contains('TestART').should('exist')

    cy.log('5. Navigate to Employees overview grid and open an Employee profile; within the Organization tab, click \'EDIT\' and open the Main role drop down')
    cy.contains('span.k-item-text', 'Personnel').click(); 
    cy.get('#tree-item-4_0 > .k-link > .k-item-text').click(); 
    cy.get('.k-filter-row > [data-col-index="1"]').type('Rich Nath')
    cy.get('.k-grid-content').contains('Rich Test123 ()').click()
    cy.get('.k-tabstrip-items').contains('Organization').click()
    cy.contains('span.k-button-text', 'Edit').click();
    
    cy.log('6. Select the newly created role and press \SAVE\'')
    //Organizational unit is manditory
    cy.get('input.k-input-inner').eq(3).type('A test'); 
    cy.wait(3000)
    cy.get('input.k-input-inner').eq(3).type('{enter}')

    cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(4)').within(() => {
        cy.get('input[role="combobox"]').clear().type('TestART');
        cy.wait(3000)
        cy.get('input.k-input-inner').type('{enter}')
      });
    cy.contains('span.k-button-text', 'Save').click();
    cy.contains('TestART').should('exist')
    
    cy.log('7. Click \'CANCEL\' and observe')
    cy.wait(8000)
    cy.contains('Cancel').click();
    //The user is redirected to the Employees overview grid.
    cy.contains('.k-column-title', 'Employee').should('exist');
    //The role is correctly shown in the Main role column.
    cy.get('.k-filter-row > [data-col-index="1"]').type('Rich Nath')
    cy.wait(3000)

    // Scroll to the right by 1000 pixels horizontally
    //cy.get('.k-grid-content').scrollTo('right', { x: 1000 });
    // Define the scroll increment
const scrollIncrement = 50; // Adjust as needed

// Function to check if element exists
const checkElementExistence = () => {
  cy.contains('TestART').should('exist'); // Adjust selector as needed
};

// Function to scroll to the right
const scrollToRight = (scrollAmount) => {
  cy.get('.k-grid-content').scrollTo('right', { x: scrollAmount });
};

// Loop to gradually scroll to the right and check if element exists
let scrolledAmount = 0;
const maxScroll = 2000; // Adjust as needed
while (scrolledAmount <= maxScroll) {
  // Scroll to the right
  scrollToRight(scrolledAmount);
  
  // Check if element exists
  checkElementExistence();

  // Increment the scroll amount
  scrolledAmount += scrollIncrement;
}

    //clean up
    cy.contains('span.k-item-text', 'Organization').click(); //organization
    cy.contains('span.k-item-text', 'Roles').click(); //roles
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).type('TestART');
    cy.wait(3000)
    cy.contains('TestART').should('exist')
    cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-trash').click(); //trash can
    cy.get('button.k-button.k-button-md.k-button-solid.k-button-solid-primary.k-rounded-md').click(); //Ok
    cy.contains('div.svx-page-header-title', 'Role').should('exist');
    //The new role is not added.
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).clear().type('TestART');
    cy.wait(3000)
    cy.contains('TestART').should('not.exist')


  })
  
  it('Edit Role', () => {
    cy.log('1. Double-click on a role')
    //Add a role and delete later
    let edit = 'roleEdit';
    cy.contains('span.k-button-text', 'Add').click();
    cy.get('input.k-input-inner').eq(0).type(edit);
    cy.get('input.k-input-inner').eq(1).type(edit);
    cy.contains('label', 'Main role').click();
    cy.contains('span.k-button-text', 'Save').click();
    cy.contains('div.svx-page-header-title', 'Role').should('exist');
    //The new role is added.
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).type(edit);
    cy.wait(6000)
    cy.contains(edit).dblclick();

    cy.log('2. Disable \'Active\'and click \'Save\' button')
    cy.get('.k-switch-thumb').click()
    cy.get('span.k-switch').should('have.attr', 'aria-checked', 'false');
    cy.contains('span.k-button-text', 'Save').click();
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).type(edit);
    cy.wait(6000)
    cy.contains(edit).should('not.exist')

    cy.log('3. Navigate to Personnel > Employees and open any profile. Open the Organization tab and click \'EDIT\'. Open the related drop down based on the role type you made inactive (Main/Additional or Formal) and observe.')
    cy.contains('span.k-item-text', 'Personnel').click(); 
    cy.get('#tree-item-4_0 > .k-link > .k-item-text').click(); 
    cy.get('.k-filter-row > [data-col-index="1"]').type('Rich Nath')
    cy.get('.k-grid-content').contains('Rich Test123 ()').click()
    cy.wait(3000)
    cy.get('.k-tabstrip-items').contains('Organization').click()
    cy.contains('span.k-button-text', 'Edit').click();
    cy.wait(3000)
    cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(4)').within(() => {
        cy.get('input[role="combobox"]').clear().type(edit.substring(0, 4));
        cy.wait(3000)
      });
    cy.contains(edit).should('not.exist')

    cy.log('4. Navigate to Organization > Roles. Double-click on a role and change the name and click \'SAVE\'')
    cy.contains('span.k-item-text', 'Organization').click(); //organization
    cy.contains('span.k-item-text', 'Roles').click(); //roles

    cy.contains('span.k-button-text', 'Add').click();
    cy.get('input.k-input-inner').eq(0).type(edit);
    cy.get('input.k-input-inner').eq(1).type(edit);
    cy.contains('label', 'Main role').click();
    cy.contains('span.k-button-text', 'Save').click();
    cy.contains('div.svx-page-header-title', 'Role').should('exist');

    //The new role is added.
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).type(edit);
    cy.wait(6000)
    cy.contains(edit).dblclick();

    edit = edit + 'change'
    cy.get('input.k-input-inner').eq(0).clear().type(edit);
    cy.wait(3000)
    cy.contains('span.k-button-text', 'Save').click();
    cy.wait(3000)
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).clear().type(edit);
    cy.wait(6000)
    cy.contains(edit).should('exist')

    cy.log('5. Navigate to Personnel > Employees and open any profile. Open the Organization tab and click \'EDIT\'. Open the related drop down based on the role type you changed the name (Main/Additional or Formal) and observe.')
    cy.contains('span.k-item-text', 'Personnel').click(); 
    cy.get('#tree-item-4_0 > .k-link > .k-item-text').click(); 
    cy.get('.k-filter-row > [data-col-index="1"]').type('Rich Nath')
    cy.get('.k-grid-content').contains('Rich Test123 ()').click()
    cy.wait(3000)
    cy.get('.k-tabstrip-items').contains('Organization').click()
    cy.contains('span.k-button-text', 'Edit').click();
    cy.wait(3000)
    cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(4)').within(() => {
        cy.get('input[role="combobox"]').clear().type(edit.substring(0, 4));
        cy.wait(3000)
      });
    cy.contains(edit).should('exist')

    cy.log('6. Navigate to Organization > Roles. Double-click on a role and change the Code and click \'SAVE\'')
    cy.contains('span.k-item-text', 'Organization').click(); //organization
    cy.contains('span.k-item-text', 'Roles').click(); //roles

    cy.contains('div.svx-page-header-title', 'Role').should('exist');
    //The new role is added.
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).clear().type(edit);
    cy.wait(6000)
    cy.contains(edit).dblclick();
    const codeValue = 'codeTest'
    cy.wait(3000)
    cy.get('input.k-input-inner').eq(1).clear().type(codeValue);
    cy.wait(3000)
    cy.contains('span.k-button-text', 'Save').click();
    cy.wait(3000)
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).clear().type(edit);
    cy.wait(6000)
    cy.contains(codeValue).should('exist')
    
    cy.log('7. Double-click on a role indicated only as Main role. Check the \'Additional role\' box in addition and click \'SAVE\'')
    cy.contains(edit).dblclick();
    cy.contains('label', 'Additional role').click();
    cy.contains('span.k-button-text', 'Save').click();
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).clear().type(edit);
    cy.wait(6000)
    cy.log('Bug')
    cy.contains('Additional role').should('exist')

    //let edit = 'roleEditchange'
    cy.log('Navigate to Personnel > Employees and open any profile. Open the Organization tab and click \'EDIT\'. Open the \'Main role\' drop down and observe.')  
    cy.contains('span.k-item-text', 'Personnel').click(); 
    cy.get('#tree-item-4_0 > .k-link > .k-item-text').click(); 
    cy.get('.k-filter-row > [data-col-index="1"]').type('Rich Nath')
    cy.get('.k-grid-content').contains('Rich Test123 ()').click()
    cy.wait(3000)
    cy.get('.k-tabstrip-items').contains('Organization').click()
    cy.contains('span.k-button-text', 'Edit').click();
    cy.wait(3000)
    //Organizational unit is manditory
    cy.get('input.k-input-inner').eq(3).clear().type('A test'); 
    cy.wait(3000)
    cy.get('input.k-input-inner').eq(3).type('{enter}')

    cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(4)').within(() => {
        cy.get('input[role="combobox"]').clear().type(edit);
        cy.wait(3000)
        cy.get('input.k-input-inner').type('{enter}')
      });

    cy.log('9. Select the role and click \'SAVE\'')
    cy.contains('Save').click(); //save
    cy.contains(edit).should('exist')

    cy.log('10. Click \'EDIT\' and open the \'Additional role\' drop down and observe.')
    cy.contains('span.k-button-text', 'Edit').click();

    //Organizational unit is manditory
    cy.get('input.k-input-inner').eq(3).clear().type('A test'); 
    cy.wait(3000)
    cy.get('input.k-input-inner').eq(3).type('{enter}')

    cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(6)').within(() => {
    cy.get('input.k-input-inner').clear().type(edit)
    cy.wait(3000)
    cy.get('input.k-input-inner').type('{enter}')});
    cy.contains('Save').click();
    cy.get('.k-card-body').contains('roleEditchange').should('exist');

    //Clean up
  //Organizational unit is manditory
    cy.contains('span.k-button-text', 'Edit').click();
    cy.get('input.k-input-inner').eq(3).clear().type('A test'); 
    cy.wait(3000)
    cy.get('input.k-input-inner').eq(3).type('{enter}')

    cy.wait(3000)
    cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(4)').within(() => {
        cy.get('input[role="combobox"]').clear()
        cy.wait(3000)
        cy.get('input.k-input-inner').type('{enter}')});

    cy.get('.svx-column-block-right > .svx-block > .svx-block-body > :nth-child(6)').within(() => {
        cy.get('input.k-input-inner').click()
        cy.wait(3000)
        cy.get('input.k-input-inner').type('{backspace}')
        cy.get('input.k-input-inner').type('{enter}')});
    
    cy.contains('Save').click();

    cy.contains('span.k-item-text', 'Organization').click(); //organization
    cy.contains('span.k-item-text', 'Roles').click(); //roles

    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).type(edit);
    cy.wait(6000)
    cy.contains(edit).dblclick();

    cy.get('.k-switch-thumb').click()
    cy.get('span.k-switch').should('have.attr', 'aria-checked', 'false');
    cy.contains('span.k-button-text', 'Save').click();
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).type(edit);
    cy.wait(6000)
    cy.contains(edit).should('not.exist')
    
})

it('Delete Role', () => {

    /*
    Test data:
    'Role 1' - created and has persons assigned
    'Role 2' - created and has requirements linked
    'Role 3' - created and has persons assigned and requirements linked
    */
    cy.log('1. Click on bin icon of \'Role 1\' item ')
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).clear().type('Role 1');
    cy.wait(5000)
    //cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-trash[aria-hidden="true"]').click() //delete
    //cy.contains('Are you sure you want to delete the selected item?').should('exist')
    cy.log('2. Click \'No\' button ')
    cy.log('Bug')
    //cy.contains('NO').click()
    cy.log('3. Repeat step 1 and click \'Yes\'')
    //cy.contains('YES').click()
    //cy.contains('Delete failed because the item is used by').should('exist')
    cy.log('4. Click \'Close\'')
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).clear().type('Role 1');
    cy.contains('Role 1').should('exist')
    cy.log('5. Click on bin icon of \'Role 2\' item ')
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).clear().type('Role 2');
    cy.contains('Role 2').should('exist')
    //cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-trash[aria-hidden="true"]').click() //delete
    //cy.contains('Are you sure you want to delete the selected item?').should('exist')
    cy.log('6. Click \'Yes\' button')
    //cy.contains('Yes').click()
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).clear().type('Role 2');
    //cy.contains('Role 2').should('not.exist')
    cy.log('7. Click on bin icon of \'Role 3\' item ')
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).clear().type('Role 3');
    cy.contains('Role 3').should('exist')
    //cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-trash[aria-hidden="true"]').click() //delete
    //cy.contains('Are you sure you want to delete the selected item?').should('exist')
    cy.log('6. Click \'Yes\' button')
    //cy.contains('Yes').click()
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).clear().type('Role 3');
    cy.contains('Role 3').should('exist')


})


it('Validation on Add/Edit Role', () => {

    /*
    Test data:
    'Role 1' - created and has persons assigned
    'Role 2' - created and has requirements linked
    'Role 3' - created and has persons assigned and requirements linked
    */
    cy.log('1. Do not fill any field in and click \'SAVE\' button ')
    cy.contains('span.k-button-text', 'Add').click();
    cy.contains('span.k-button-text', 'Save').click();
    cy.get('.k-input-inner[aria-invalid="true"][tabindex="0"]').should('exist')

    cy.log('2. Enter \'Role 1\' into \'Name\' field, select \'Main role\' and click \'SAVE\' button')
    cy.get('input.k-input-inner').eq(0).clear().type('Role 1');
    cy.log('Bug')
    //cy.contains('span.k-button-text', 'Save').click();
    //cy.get('.k-input-inner[aria-invalid="true"][tabindex="0"]').should('exist')
    
    cy.log('3.Rename the role by entering a name that contains 256 or more characters and click \'SAVE\'')
    const longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    cy.get('input.k-input-inner').eq(0).clear().type(longString);
    cy.contains('span.k-button-text', 'Save').click();
    cy.get('.k-input-inner[aria-invalid="true"][tabindex="0"]').should('exist')
    cy.log('4.Provide valid role name (255 or less characters and not yet existing) and click \'SAVE\' button ')
    cy.log('step 4 is tested in other testxcase of role')

    cy.log('5. Re-open the record and add a Code that contains 256 or more characters and click \'SAVE\'')
    cy.get('input.k-input-inner').eq(0).clear().type('TestEditAdd');
    cy.get('input.k-input-inner').eq(1).clear().type(longString);
    cy.contains('span.k-button-text', 'Save').click();

    cy.get('.k-input-inner[aria-invalid="true"][tabindex="0"]').should('exist')
    
    cy.log('6.Provide valid code (255 or less characters) and click \'SAVE\' button ')
    cy.log('step 6 is tested in other testxcase of role')

})


it('Permissions Handling of Roles', () => {
    cy.log('Step 1 - 5 is alreay automated in other Role testcases')
    cy.log('6. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab')
    cy.contains('span.k-item-text', 'Settings').click()
    cy.contains('div', 'Security groups').click()
    cy.contains('td[role="gridcell"]', 'Admin settings').dblclick()
    cy.contains('span.svx-font-2', 'Permissions').click()
    cy.contains('span.svx-font-2', 'Core').click()

    cy.get('div.svx-crud-permission-selector')
    .contains('Roles')
    .parent() // Go up to the parent of the element containing "Set all"
    .within(() => {
      cy.contains('View').should('exist'); // Check if "View" exists within the parent
      cy.contains('Delete').should('exist'); // Check if "Delete" exists within the parent
      cy.contains('Update').should('exist'); // Check if "Update" exists within the parent
      cy.contains('Create').should('exist'); // Check if "Create" exists within the parent
    });

    cy.log('7. Unselect \'Delete\' and click \'SAVE\' button')
    cy.get('div.svx-crud-permission-selector')
    .contains('Roles')
    .parent() // Go up to the parent of the element containing "Set all"
    .within(() => {
      cy.get('button').contains('Delete').then(($button) => {
        if ($button.attr('aria-pressed') === 'false') {
          cy.contains('Delete').click(); // Click on "Delete" if aria-pressed is false
        }
      });
    });
    cy.contains('Save').click()

    cy.log('8. Re-login and navigate to the Roles overview')
    cy.get('.profile-picture').click()
    cy.log('2. Click on Logout option')
    cy.contains('Logout').click();
    cy.contains('Welcome back').should('be.visible')
    cy.wait(3000)
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Test123')
    cy.get('#Login').click()
    cy.contains('Dashboard').should('be.visible')
    cy.contains('span.k-item-text', 'Organization').click(); //organization
    cy.contains('span.k-item-text', 'Roles').click(); //roles
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).type('Main Role ()');
    cy.wait(3000);
    cy.log('bug')
    //cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-trash').should('not.exist');
    cy.contains('span.k-button-text', 'Add').should('exist')

    cy.log('step 9 - 10 is automated in other testcase')
    
    cy.log('11. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Roles unselect \'Create\' and click \'SAVE\'')
    cy.contains('span.k-item-text', 'Settings').click()
    cy.contains('div', 'Security groups').click()
    cy.contains('td[role="gridcell"]', 'Admin settings').dblclick()
    cy.contains('span.svx-font-2', 'Permissions').click()
    cy.contains('span.svx-font-2', 'Core').click()
    cy.get('div.svx-crud-permission-selector')
    .contains('Roles')
    .parent() // Go up to the parent of the element containing "Set all"
    .within(() => {
      cy.get('button').contains('Create').then(($button) => {
        if ($button.attr('aria-pressed') === 'false') {
          cy.contains('Create').click(); // Click on "Delete" if aria-pressed is false
        }
      });
    });
    cy.contains('Save').click()

    cy.log('12. Re-login and navigate to the Roles overview')
    cy.get('.profile-picture').click()
    cy.contains('Logout').click();
    cy.contains('Welcome back').should('be.visible')
    cy.wait(3000)
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Test123')
    cy.get('#Login').click()
    cy.contains('Dashboard').should('be.visible')
    cy.contains('span.k-item-text', 'Organization').click(); //organization
    cy.contains('span.k-item-text', 'Roles').click(); //roles
    cy.wait(3000);
    cy.log('bug')
    cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-trash').should('not.exist');
    cy.contains('span.k-button-text', 'Add').should('not.exist')
    
    cy.log('13 is already automated in other testcase')

    cy.log('14. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Roles unselect \'Update\' and click \'SAVE\'')
    cy.contains('span.k-item-text', 'Settings').click()
    cy.contains('div', 'Security groups').click()
    cy.contains('td[role="gridcell"]', 'Admin settings').dblclick()
    cy.contains('span.svx-font-2', 'Permissions').click()
    cy.contains('span.svx-font-2', 'Core').click()
    cy.get('div.svx-crud-permission-selector')
    .contains('Roles')
    .parent() // Go up to the parent of the element containing "Set all"
    .within(() => {
      cy.get('button').contains('Update').then(($button) => {
        if ($button.attr('aria-pressed') === 'false') {
          cy.contains('Update').click(); // Click on "Delete" if aria-pressed is false
        }
      });
    });
    cy.contains('Save').click()

    cy.log('15. Re-login and navigate to the Roles overview')
    cy.get('.profile-picture').click()
    cy.contains('Logout').click();
    cy.contains('Welcome back').should('be.visible')
    cy.wait(3000)
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Test123')
    cy.get('#Login').click()
    cy.contains('Dashboard').should('be.visible')
    cy.contains('span.k-item-text', 'Organization').click(); //organization
    cy.contains('span.k-item-text', 'Roles').click(); //roles
    cy.wait(3000);
    cy.log('bug')
    cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-trash').should('not.exist');
    cy.contains('span.k-button-text', 'Add').should('not.exist')

    cy.log('16. Double-click on any record and observe')
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).type('Role');
    cy.wait(3000);
    cy.contains('Role 1').dblclick();
    cy.log('Bug')
    cy.get('input.k-input-inner').eq(0).should('have.attr', 'readonly', 'true');

    cy.log('17. Go to Settings -> Security groups -> Admin security group-> Permissions tab -> Core subtab and for Roles unselect \'View\' and click \'SAVE\'')
    cy.contains('span.k-item-text', 'Settings').click()
    cy.contains('div', 'Security groups').click()
    cy.contains('td[role="gridcell"]', 'Admin settings').dblclick()
    cy.contains('span.svx-font-2', 'Permissions').click()
    cy.contains('span.svx-font-2', 'Core').click()
    cy.get('div.svx-crud-permission-selector')
    .contains('Roles')
    .parent() // Go up to the parent of the element containing "Set all"
    .within(() => {
      cy.get('button').contains('View').then(($button) => {
        if ($button.attr('aria-pressed') === 'false') {
          cy.contains('View').click(); // Click on "Delete" if aria-pressed is false
        }
      });
    });
    cy.contains('Save').click()

    cy.log('18. Re-login and navigate to the Roles overview')
    cy.get('.profile-picture').click()
    cy.contains('Logout').click();
    cy.contains('Welcome back').should('be.visible')
    cy.wait(3000)
    cy.get('#Username').type('Richard')
    cy.get('#Password').type('Test123')
    cy.get('#Login').click()
    cy.contains('Dashboard').should('be.visible')
    cy.contains('span.k-item-text', 'Organization').click(); //organization
    cy.contains('span.k-item-text', 'Roles').click(); //roles
    cy.wait(3000);
    cy.log('bug')
    cy.contains('.k-tabstrip-items > .k-tabstrip-item > .k-link > .svx-font-2', 'Roles').should('not.exist')
    
})


  
})