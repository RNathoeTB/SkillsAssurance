describe('Reporting', () => {
    
    beforeEach(() => {
        // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
        cy.log('Login')
        // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
        cy.get('#Username').type('Richard')
        cy.get('#Password').type('Test123')
        cy.get('#Login').click()  
  
        cy.log('Menu -> DAY-TO-DAY -> Reporting -> Compliance matrix')
        cy.contains('span.k-item-text', 'Reporting').click(); 
        cy.contains('span.k-item-text', 'Compliance matrix').click();
        const textToFind = 'Employee filter';
        cy.contains('div.title', textToFind).should('exist');

  
      })



    it('Compliance Matrix: General View', () => {
        
        //1. Observe the screen
        //2. Click 'Apply' and observe the grid
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.contains('Compliance').should('exist')
        cy.contains('Employee').should('exist')
        cy.contains('Main role').should('exist')
        cy.contains('Organizational unit').should('exist')
        cy.log('Bug') //Evidencis column is not shown
        //cy.contains('Evidences').should('exist')


        //3. Click on different personal information columns
        cy.log('Bug') //Colums are not sorted when clicked on
        cy.get('th[data-text="Employee"]').click();

        // Get all the employee names displayed on the webpage
        cy.get('table[data-role="grid"] tbody.k-table-tbody tr')
        .find('td[aria-colindex="4"]')
        .invoke('text')
        .then(employeeNames => {
        // Split the employee names into an array
        const namesArray = employeeNames.split('\n');

        // Create a sorted version of the array
        const sortedArray = [...namesArray].sort();

        // Compare the sorted array with the original array
        expect(namesArray).to.deep.equal(sortedArray);

        });

        cy.log('Bug') //Colums are not sorted when clicked on
        cy.get('th[data-text="Main role"]').click();

        // Get all the employee names displayed on the webpage
        cy.get('table[data-role="grid"] tbody.k-table-tbody tr')
        .find('td[aria-colindex="5"]')
        .invoke('text')
        .then(employeeNames => {
        // Split the employee names into an array
        const namesArray = employeeNames.split('\n');

        // Create a sorted version of the array
        const sortedArray = [...namesArray].sort();

        // Compare the sorted array with the original array
        expect(namesArray).to.deep.equal(sortedArray);

        });
        cy.log('Bug') //Colums are not sorted when clicked on
        cy.get('th[data-text="Organizational unit"]').click();

        // Get all the employee names displayed on the webpage
        cy.get('table[data-role="grid"] tbody.k-table-tbody tr')
        .find('td[aria-colindex="6"]')
        .invoke('text')
        .then(employeeNames => {
        // Split the employee names into an array
        const namesArray = employeeNames.split('\n');

        // Create a sorted version of the array
        const sortedArray = [...namesArray].sort();

        // Compare the sorted array with the original array
        expect(namesArray).to.deep.equal(sortedArray);

        });

        //4. Click any evidence column
        cy.log('Bug') //Colums are not sorted when clicked on
        cy.get('th[data-text="Basic First Aid"]').click();

        // Get all the employee names displayed on the webpage
        cy.get('table[data-role="grid"] tbody.k-table-tbody tr')
        .find('td[aria-colindex="7"]')
        .invoke('text')
        .then(employeeNames => {
        // Split the employee names into an array
        const namesArray = employeeNames.split('\n');

        // Create a sorted version of the array
        const sortedArray = [...namesArray].sort();

        // Compare the sorted array with the original array
        expect(namesArray).to.deep.equal(sortedArray);

        });

        //5. Click the Filter button
        cy.contains('span.k-button-text', 'Filter').click();
        const textToFind = 'Employee filter';
        cy.contains('div.title', textToFind).should('exist');

    })
  
  
  })