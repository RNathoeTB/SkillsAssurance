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

    it('Permissions Handling of Compliance Matrix', () => {

    cy.log('1. Observe Filter')
        cy.get('label[class=""]').contains('Organizational units').should('exist');
        cy.get('label[class=""]').contains('Include sub OUs').should('exist');

    cy.log('2. Fill no additional fields. Click Apply')
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.get('tr.k-master-row').should('have.length.gt', 2);

    cy.log('3. Open Filter. In \'Organizational Units\' field select \'OU 1\' and \'OU 2\' Click Apply ')    
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)
        cy.get('.svx-filter-content').find('.k-input-inner').eq(0).click({force: true}).type('OU 1', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.get('.svx-filter-content').find('.k-input-inner').eq(0).click({force: true}).type('OU 2', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)
        cy.get('td[role="gridcell"]').contains('PTS BV').should('not.exist')
        cy.get('td[role="gridcell"]').contains('OU 1').should('exist');

        cy.log('Bug') //OU 2 does not exist
        cy.get('td[role="gridcell"]').contains('OU 2').should('exist');
    
    cy.log('4. Open Filter dropdown. Check \'Include sub OUs\' box. Click \'Apply\'.')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.contains('label', 'Include sub OUs').click({ force: true });
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)

        cy.get('span.condition').contains('CM').should('exist');
    
    cy.log('5. Open Filter dropdown. Clear \'Organizational Units\' field. Click \'Apply\'.')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-clear-value').eq(0).click({ force: true });
        cy.contains('label', 'Include sub OUs').click({ force: true });
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)

        cy.get('tr.k-master-row').should('have.length.gt', 2);

    })

    
    it('Roles Filter', () => {

    cy.log('1. Observe Filter')
        cy.get('label[class=""]').contains('Roles').should('exist');
        cy.get('label[class=""]').contains('Only include main role requirements').should('exist');

    cy.log('2. Fill no additional fields. Click \'Apply\'')
        cy.log('this is already checked in other testcase')
    
    cy.log('3. Open Filter.In \'Roles\' field pick first and second Role. Click \'Apply\'. ')
        cy.wait(3000)
        cy.get('.svx-filter-content').find('.k-input-inner').eq(1).click({force: true}).type('Role 2', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.get('.svx-filter-content').find('.k-input-inner').eq(1).click({force: true}).type('PB Main Role A', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)
        cy.get('td[role="gridcell"]').contains('Role 2').should('exist');
        cy.get('td[role="gridcell"]').contains('PB Main Role A').should('exist');
        cy.get('td[role="gridcell"]').contains('Crane Operator').should('not.exist');
    
    cy.log('4. Open Filter. Check the \'Only include main role requirements\' box. Click \'Apply\'. ')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.contains('label', 'Only include main role requirements').click({ force: true });
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)

        cy.log('Bug') //Main role PB does not exist. 
        cy.contains('PB Main Role A').should('exist')
        cy.contains('Role 1').should('not.exist')
    
    cy.log('Open Filter. In \'Roles\' field remove \'Role 2\'. Click \'Apply\'. ')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-clear-value').eq(0).click({ force: true });
        cy.get('.svx-filter-content').find('.k-input-inner').eq(1).click({force: true}).type('Role 2', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.contains('label', 'Only include main role requirements').click({ force: true });
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)

        cy.contains('PB Main Role A').should('not.exist')
        cy.contains('Role 2').should('exist')

    cy.log('6. Open Filter. Clear \'Roles\' field. Click \'Apply\'. ')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-clear-value').eq(0).click({ force: true });
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.get('td[role="gridcell"]').contains('Role 2').should('exist');
        cy.get('td[role="gridcell"]').contains('PB Main Role A').should('exist');
        cy.get('td[role="gridcell"]').contains('Crane Operator').should('exist');


    })
  
    it('Personnel Types Filter', () => {

    cy.log('1. Observe Filter')
        cy.get('label[class=""]').contains('Personnel types').should('exist');

    cy.log('2. Fill no additional fields. Click \'Apply')
        cy.log('this is already checked in other testcase')
    
    cy.log('3. Open Filter dropdown. In \'Personnel Types\' field pick \'Personnel Type 1\' and \'Personnel type 2\'. Click \'Apply\'.')
        cy.get('.svx-filter-content').find('.k-input-inner').eq(2).click({force: true}).type('PB Personnel type A', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.get('.svx-filter-content').find('.k-input-inner').eq(2).click({force: true}).type('PB Personnel type B', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)
        
        cy.log('Bug') //Personal type column is not shown. 
        cy.contains('Personnel type').should('exist')
        cy.get('td[role="gridcell"]').contains('Ritchie Nathoe ()').should('exist'); 
        cy.get('td[role="gridcell"]').contains('Test Automation 1 ()').should('exist');
        cy.get('td[role="gridcell"]').contains('Crane Operator').should('not.exist');

    cy.log('4. Open Filter dropdown. In \'Personnel Types\' field remove \'Personnel Type 2\'.Click \'Apply\'.')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-clear-value').eq(0).click({ force: true });
        cy.get('.svx-filter-content').find('.k-input-inner').eq(2).click({force: true}).type('PB Personnel type A', {force: true}).wait(2000).type('{enter}',{force: true})

        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)

        cy.get('td[role="gridcell"]').contains('Ritchie Nathoe ()').should('not.exist'); 
        cy.get('td[role="gridcell"]').contains('Test Automation 1 ()').should('exist');
    
    cy.log('5. Open Filter dropdown. Clear \'Personnel Types\' field. Click \'Apply\'. ')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-clear-value').eq(0).click({ force: true });
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.get('td[role="gridcell"]').contains('Role 2').should('exist');
        cy.get('td[role="gridcell"]').contains('PB Main Role A').should('exist');
        cy.get('td[role="gridcell"]').contains('Crane Operator').should('exist');

    }) 

    it('Grade Levels Filter', () => {
    
    cy.log('1. Observe Filter')
        cy.get('label[class=""]').contains('Grade levels').should('exist');
    
    cy.log('2. Fill no additional fields. Click \'Apply\'')
        cy.log('this is already checked in other testcase')

    cy.log('3. Open Filter dropdown. In \'Grade levels\' field pick \'Grade level 1\' and \'Grade level 2\'. Click \'Apply\'. ')
        cy.get('.svx-filter-content').find('.k-input-inner').eq(3).click({force: true}).type('PB Grade A', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.get('.svx-filter-content').find('.k-input-inner').eq(3).click({force: true}).type('PB Grade B', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)
        
        cy.log('Bug') //Grade level column is not shown. 
        //cy.contains('Garde level').should('exist')
        cy.get('td[role="gridcell"]').contains('Ritchie Nathoe ()').should('exist'); 
        cy.get('td[role="gridcell"]').contains('Test Automation 1 ()').should('exist');
        cy.get('td[role="gridcell"]').contains('Crane Operator').should('not.exist');

    cy.log('4. Open Filter dropdown. In \'Grade levels\' field remove \'Grade level 2\'. Click \'Apply\'. ')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-clear-value').eq(0).click({ force: true });
        cy.get('.svx-filter-content').find('.k-input-inner').eq(3).click({force: true}).type('PB Grade A', {force: true}).wait(2000).type('{enter}',{force: true})

        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)

        cy.get('td[role="gridcell"]').contains('Ritchie Nathoe ()').should('not.exist'); 
        cy.get('td[role="gridcell"]').contains('Test Automation 1 ()').should('exist');

    cy.log('5. Open Filter dropdown. Clear \'Grade Level\' field. Click \'Apply\'. ')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-clear-value').eq(0).click({ force: true });
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.get('td[role="gridcell"]').contains('Role 2').should('exist');
        cy.get('td[role="gridcell"]').contains('PB Main Role A').should('exist');
        cy.get('td[role="gridcell"]').contains('Crane Operator').should('exist');
                

    }) 

    it('Employees Filter', () => {
        cy.log('1. Observe Filter')
        cy.get('label[class=""]').contains('Employees').should('exist');    
        cy.get('label[class=""]').contains('Include inactive').should('exist');
    
    cy.log('2. Fill no additional fields. Click \'Apply\'')
        cy.log('this is already checked in other testcase')

    cy.log('3. Open Filter. In \'Employees\' field pick two employees. Click \'Apply\'. ')
        cy.get('.svx-filter-content').find('.k-input-inner').eq(5).click({force: true}).type('Ritchie Nathoe ()', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.get('.svx-filter-content').find('.k-input-inner').eq(5).click({force: true}).type('Test Automation 1 ()', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)
        
        cy.get('td[role="gridcell"]').contains('Ritchie Nathoe ()').should('exist'); 
        cy.get('td[role="gridcell"]').contains('Test Automation 1 ()').should('exist');
        cy.get('td[role="gridcell"]').contains('Crane Operator').should('not.exist');

    cy.log('4. Open Filter. In \'Employees\' field remove one of the selected employees. Click \'Apply\'.  ')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-clear-value').eq(0).click({ force: true });
        cy.get('.svx-filter-content').find('.k-input-inner').eq(5).click({force: true}).type('Test Automation 1 ()', {force: true}).wait(2000).type('{enter}',{force: true})

        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)

        cy.get('td[role="gridcell"]').contains('Ritchie Nathoe ()').should('not.exist'); 
        cy.get('td[role="gridcell"]').contains('Test Automation 1 ()').should('exist');

    cy.log('5. Open Filter. Clear \'Employees\' field. Click \'Apply\'.  ')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.get('span.k-clear-value').eq(0).click({ force: true });
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.get('td[role="gridcell"]').contains('Role 2').should('exist');
        cy.get('td[role="gridcell"]').contains('PB Main Role A').should('exist');
        cy.get('td[role="gridcell"]').contains('Crane Operator').should('exist');

    cy.log('6. Open Filter. Check \'Include inactive\' checkbox. Click \'Apply\'. ')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.contains('label', 'Include inactive').click({ force: true });
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        
        cy.get('td[role="gridcell"]').contains('Role 3 ()').should('exist');

    cy.log('7. Open Filter dropdown. Uncheck \'Include inactive\' checkbox. Click \'Apply\'. ')
        cy.wait(3000)
        cy.contains('span.k-button-text', 'Filter').click().wait(3000);
        cy.contains('div.title', 'Employee filter').should('exist');
        cy.wait(3000)

        cy.contains('label', 'Include inactive').click({ force: true });
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.get('td[role="gridcell"]').contains('Test Automation 1 ()').should('exist');

    }) 
  
  })