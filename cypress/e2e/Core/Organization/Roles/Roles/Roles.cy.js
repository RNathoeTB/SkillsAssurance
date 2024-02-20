describe('Roles', () => {
    beforeEach(() => {
      // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
      cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
      cy.get('#Username').type('Richard')
      cy.get('#Password').type('Nathoe')
      cy.get('#Login').click()  

      cy.log('Entry point: Manage Section -> Organization > Roles')
      cy.contains('span.k-item-text', 'Organization').click(); //organization
      cy.contains('span.k-item-text', 'Roles').click(); //roles

    })
  
  
  it('Add Role', () => {
    cy.log('1. Observe the grid')
    cy.log('Bug: not alle colums are shown')
    cy.contains('span.k-column-title', 'Name').should('exist');
    //cy.contains('span.k-column-title', 'Active').should('exist');
    cy.contains('span.k-column-title', 'Code').should('exist');
    //cy.contains('span.k-column-title', 'Main role').should('exist');
    //cy.contains('span.k-column-title', 'Additional role').should('exist');
    //cy.contains('span.k-column-title', 'Formal role').should('exist');

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
    //The new role is not added.
    cy.get('input.k-input-inner[aria-readonly="false"][tabindex="-1"]').eq(0).type('TestART');
    cy.wait(6000)
    cy.contains('TestART').should('exist')

    cy.log('5. Navigate to Employees overview grid and open an Employee profile; within the Organization tab, click \'EDIT\' and open the Main role drop down')
    cy.contains('span.k-item-text', 'Personnel').click(); 
    cy.get('#tree-item-4_0 > .k-link > .k-item-text').click(); 
    cy.get('.k-filter-row > [data-col-index="1"]').type('Rich Nath')
    cy.get('.k-grid-content').contains('Rich Nathoe ()').click()
    cy.get('.k-tabstrip-items').contains('Organization').click()
    cy.contains('span.k-button-text', 'Edit').click();
    
    cy.log('6. Select the newly created role and press \SAVE\'')
    cy.get('input.k-input-inner').eq(3).type('A test'); // Replace 'Your Text Here' with the text you want to add
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
  
  })