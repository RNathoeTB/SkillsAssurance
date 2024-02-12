describe('Requirements', () => {
    beforeEach(() => {
      // Voeg hier de stappen toe die je voor elke test wilt uitvoeren
      cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
      cy.get('#Username').type('Richard')
      cy.get('#Password').type('Nathoe')
      cy.get('#Login').click()  
    })
  
    it('Add Global Requirement', () => {

      cy.log('1. Observe the grid')
      cy.contains('Requirements').click()
      cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()
      cy.get('[data-text="Requirement group"]').should('be.visible')

      cy.log('2. Click on \'ADD\' button')
      cy.get('.k-button-text').click()
      cy.get('.svx-page-header-title').should('have.text', 'Requirement')
      
      cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-label > .required-field').should('have.text', 'Type')
      cy.get(':nth-child(2) > .svx-formfield-label > .required-field').should('have.text', 'Evidence')
      cy.get(':nth-child(2) > .svx-block-header > div').should('have.text', 'Requirement Info')
      cy.get(':nth-child(2) > .svx-block-body > :nth-child(1) > .svx-formfield-label > .required-field').should('have.text', 'Requirement type')
      cy.get(':nth-child(5) > .svx-formfield-label > .required-field').should('have.text', 'Requirement group')

      cy.log('3. Fill Requirement type, select Requirement group and select Evidence Type')
      cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('Certificate')
      cy.wait(3000)
      cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('{enter}')
      cy.get('input.k-input-inner').eq(2).type('Company Mandatory')
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(2).type('{enter}')
      cy.get('input.k-input-inner').eq(6).type('Europe')
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(6).type('{enter}')
      cy.get('input.k-input-inner').eq(1).type('Certificate 123')
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(1).type('{enter}')

      cy.log('4. Select an evidence and click \'CANCEL\'')
      cy.log('5. Repeat step 2, select an Evidence and click \'SAVE\'')
      
    })

    it.only('Add Organizational Unit Group Requirement', () => {
      cy.log('1. Observe the grid')
      cy.get('#tree-item-8 > :nth-child(1) > .k-item-text').click()
      cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()
      cy.get('[data-text="Requirement group"] > .k-cell-inner > .k-link > .k-column-title').should('be.visible')
      
      cy.log('2. Click on \'ADD\' button')
      cy.get('.svx-button > .telerik-blazor').click()
      cy.get('.svx-page-header-title').should('have.text', 'Requirement')
      cy.get('.svx-column-block-left > :nth-child(1) > .svx-block-header').should('have.text', 'Evidence Info')
      cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-label > .required-field').should('have.text', 'Type')
      cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content').should('exist')
      cy.get(':nth-child(2) > .svx-formfield-label > .required-field').should('have.text', 'Evidence')
      cy.get(':nth-child(2) > .svx-formfield-label > .required-field').should('exist')
      cy.get(':nth-child(2) > .svx-block-header > div').should('have.text', 'Requirement Info')
      cy.get(':nth-child(2) > .svx-block-body > :nth-child(1) > .svx-formfield-label > .required-field').should('have.text', 'Requirement type')
      cy.get(':nth-child(2) > .svx-block-body > :nth-child(1) > .svx-formfield-content').should('exist')
      cy.get(':nth-child(5) > .svx-formfield-label > .required-field').should('have.text', 'Requirement group')
      cy.get(':nth-child(5) > .svx-formfield-content').should('exist')

      cy.log('3. Fill Requirement type, select Requirement group \'Global requirement group\' and select Evidence Type')
      cy.get('input[type="text"][role="combobox"]').eq(2).type('Company Mandatory')
      cy.wait(3000)
      cy.get('input[type="text"][role="combobox"]').eq(2).type('{enter}')
      cy.get('input[type="text"][role="combobox"]').eq(6).type('Europe')
      cy.wait(3000)
      cy.get('input[type="text"][role="combobox"]').eq(6).type('{enter}')
      cy.get('input[type="text"][role="combobox"]').eq(0).type('Certificate')
      cy.wait(3000)
      cy.get('input[type="text"][role="combobox"]').eq(0).type('{enter}')
      cy.get('input[type="text"][role="combobox"]').eq(1).type('Basic First Aid')
      cy.wait(3000)
      cy.get('input[type="text"][role="combobox"]').eq(1).type('{enter}') 

      cy.get('.modal-buttons > :nth-child(1) > .telerik-blazor').click()
    })

  
    
  })