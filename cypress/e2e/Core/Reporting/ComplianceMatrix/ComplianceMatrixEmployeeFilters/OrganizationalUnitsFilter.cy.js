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
  
  
  })