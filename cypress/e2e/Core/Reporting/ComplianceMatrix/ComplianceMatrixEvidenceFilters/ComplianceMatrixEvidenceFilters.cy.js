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

      it.only('Matrix Requirement Groups Filter', () => {

        cy.log('1. Look through Filter dropdown.')
        cy.contains('label', 'Requirement groups').should('exist');

        cy.log('2. Fill no additional fields. Click \'Apply\'')
        cy.log('this is already checked in other testcase')

        cy.log('3. Open Filter dropdown. In \'Requirements Groups\' field pick first and second Requirement Group. Click \'Apply\'. ')
        cy.get('.svx-filter-content').find('.k-input-inner').eq(6).click({force: true}).type('PB ReqGroup A +subA', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.get('.svx-filter-content').find('.k-input-inner').eq(6).click({force: true}).type('PB ReqGroup A +subB', {force: true}).wait(2000).type('{enter}',{force: true})
        cy.contains('span.k-button-text', 'Apply').click({ force: true });
        cy.wait(5000)


      })

    })