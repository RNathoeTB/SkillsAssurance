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

    it('Matrix Columns', () => {

    cy.log('1. Look through Filter dropdown.')
        cy.contains('label', 'Matrix columns').should('exist');
        cy.contains('span.k-chip-label', 'Employee').should('exist');
        cy.contains('span.k-chip-label', 'Main role').should('exist');
        cy.contains('span.k-chip-label', 'Organizational unit').should('exist');

    cy.log('2. Fill no additional fields. Click \'Apply\'')
        cy.log('this is already checked in other testcase')

    cy.log('3. Open Filter dropdown. In \'Matrix Columns\' field pick all possible options. Click \'Apply\'. ')
        // Array of item texts
        cy.wait(3000)
        const items = [
            'Personnel number',
            '2nd personnel number',
            '3rd personnel number',
            'Personnel status',
            'Personnel type',
            'Grade Level',
            'Additional role(s)',
            'First name',
            'Last name'
        ];
        
        cy.get('.svx-filter-content').find('.k-input-inner').eq(12).click({force: true})
        // Loop through each item
        items.forEach(item => {
        
            // Locate the item within the dropdown
            cy.contains('.k-list-item-text', item)
            // Scroll to the item
            .scrollIntoView({force: true})
            // Click on the item
            .click({force: true});
            cy.get('.svx-filter-content').find('.k-input-inner').eq(12).click({force: true})
        });
  
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)

        cy.get('.k-grid-content').eq(1).scrollTo('right', { deltaX: 100 });
        cy.get('th[data-text="Personnel number"][data-reorderable="True"]').should('exist');
    
    cy.log('4. Open Filter dropdown. Clear \'Matrix Columns\' field from any values. Click \'Apply\'. ')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-clear-value').eq(0).click({ force: true });
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)
        cy.get('th[data-text="Compliance"]').should('exist');
        cy.get('th[data-text="Basic First Aid"]').should('exist');
        cy.get('th[data-text="Main role"]').should('not.exist');

      })

    it('Matrix - Soon to Expire Filter', () => {

    cy.log('1. Look through Filter dropdown.')
        cy.contains('label', 'Highlight expiring in months').should('exist');
        cy.get('input[aria-valuenow="3"]').should('exist');
    
    cy.log('2. Fill \'Employee\' field with one Employee.Click \'Apply\'')  
        cy.get('.svx-filter-content').find('.k-input-inner').eq(5).click({force: true}).type('Rich Nathoe ()', {force: true}).wait(5000).type('{enter}',{force: true})
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)
        cy.log('Bug') //we do not how a Evidence should look like when it is marked as Soon to expire. 
    
    cy.log('3. Open Filter dropdown. Change value of \'Highlight expiring in months\' field to 6. Click \'Apply\'. ')
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-numerictextbox input').clear({force: true}).type('6', {force: true});
        cy.get('input[aria-valuenow="6"]').should('exist');
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)
        cy.log('Bug') //we do not how a Evidence should look like when it is marked as Soon to expire. 

    cy.log('4. Open Filter dropdown. Change value of \'Highlight expiring in months\' field to 12. Click \'Apply\'. ')
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-numerictextbox input').clear({force: true}).type('12', {force: true});
        cy.get('input[aria-valuenow="12"]').should('exist');
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)
        cy.log('Bug') //we do not how a Evidence should look like when it is marked as Soon to expire. 

    cy.log('5. Open Filter dropdown. Change value of \'Highlight expiring in months\' field to 1. Click \'Apply\'. ')
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-numerictextbox input').clear({force: true}).type('1', {force: true});
        cy.get('input[aria-valuenow="1"]').should('exist');
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)
        cy.log('Bug') //we do not how a Evidence should look like when it is marked as Soon to expire. 

      })


    })