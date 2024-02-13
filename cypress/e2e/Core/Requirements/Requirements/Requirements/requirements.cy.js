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
      cy.wait(10000)
      //Get number of requirements

      let firstNumber;
      cy.get('.grid-pagination-information > label').invoke('text').then((text) => {
        const regex = /(\d+)/; // Reguliere expressie om het cijfer te vinden
        const match = text.match(regex); // Zoek naar overeenkomsten met de reguliere expressie in de tekst
        firstNumber = match ? parseInt(match[0]) : null; // Converteer de gevonden overeenkomst naar een getal
      
        // Gebruik het nummer zoals nodig in je test
        if (firstNumber !== null) {
          cy.log('Het gevonden nummer is:', firstNumber);
          // Voer hier acties uit met het gevonden nummer
        } else {
          cy.log('Geen nummer gevonden in de tekst:', text);
        }
      });

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
      cy.get(':nth-child(1) > .telerik-blazor > .k-button-text').click()

            //Deze actie is een workaround voor nu:
            cy.get('.dismiss').click()
            cy.contains('Requirements').click()
            cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()

      //Compare first nummer with nieuw number
      cy.wait(10000)
      cy.get('.grid-pagination-information > label').invoke('text').then((text) => {
        const regex = /(\d+)/;
        const match = text.match(regex);
        const newNumber = match ? parseInt(match[0]) : null;
      
        // Vergelijk het nieuwe nummer met het eerste nummer
        if (firstNumber !== null && newNumber !== null) {
          expect(newNumber).to.equal(firstNumber); // Vergelijk de twee nummers
        } else {
          throw new Error('Kan het eerste of nieuwe nummer niet vinden');
        }
      });


      cy.log('5. Repeat step 2, select an Evidence and click \'SAVE\'')
      cy.get('.k-button-text').click()
      cy.get('.svx-page-header-title').should('have.text', 'Requirement')
      cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('Certificate')
      cy.wait(3000)
      cy.get(':nth-child(1) > .svx-block-body > :nth-child(1) > .svx-formfield-content > .k-combobox > .k-input-inner').type('{enter}')
      cy.get('input.k-input-inner').eq(2).type('Company Mandatory')
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(2).type('{enter}')
      cy.get('input.k-input-inner').eq(6).type('Europe')
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(6).type('{enter}')
      cy.get('input.k-input-inner').eq(1).type('AICC Award')
      cy.wait(3000)
      cy.get('input.k-input-inner').eq(1).type('{enter}')
      cy.get(':nth-child(2) > .telerik-blazor > .k-button-text').click();


            //Deze actie is een workaround voor nu:
            cy.get('.dismiss').click()
            cy.contains('Requirements').click()
            cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()

       //Compare first nummer with nieuw number
       cy.wait(10000)
       cy.get('.grid-pagination-information > label').invoke('text').then((text) => {
        const regex = /(\d+)/;
        const match = text.match(regex);
        const newNumber = match ? parseInt(match[0]) : null;


        // Vergelijk het nieuwe nummer met het eerste nummer
        if (firstNumber !== null && newNumber !== null) {
          expect(newNumber).not.to.equal(firstNumber); // Vergelijk de twee nummers
        } else {
          throw new Error('Kan het eerste of nieuwe nummer niet vinden');
        }
      });

      cy.log('6. Go to Employee profile of any Employee > Evidences tab. Search for the Evidence used in step 5.')
      cy.get('#tree-item-4 > .k-link > .k-item-text').click() //click personal
      cy.get('#tree-item-4_0 > .k-link > .k-item-text').click()
      cy.wait(10000)
      cy.get('td.k-grid-header-sticky:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)').type('Jasper');
      cy.wait(10000)
      cy.get('.span-nav').click()
      cy.wait(10000)
      cy.get('.k-link > .svx-font-2').eq(3).click()
      cy.wait(10000)
      cy.contains('Advanced').should('be.visible')

    })

    it('Add Organizational Unit Group Requirement', () => {
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


      cy.log('4. Select an evidence and click \'CANCEL\'. skipped because it excists in another testcase')

      cy.log('5. Repeat step 2, select an Evidence and click \'SAVE\'')
      cy.get(':nth-child(2) > .telerik-blazor > .k-button-text').click();
    }) 

    it('Add Grade Level Requirement', () => {
        cy.log('1. Observe the grid')
        cy.get('#tree-item-8 > :nth-child(1) > .k-item-text').click()
        cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()
        cy.get('[data-text="Grade Level"] > .k-cell-inner > .k-link > .k-column-title').should('be.visible')
        
        cy.wait(10000)
        let firstNumber;
        cy.get('.grid-pagination-information > label').invoke('text').then((text) => {
          const regex = /(\d+)/; // Reguliere expressie om het cijfer te vinden
          const match = text.match(regex); // Zoek naar overeenkomsten met de reguliere expressie in de tekst
          firstNumber = match ? parseInt(match[0]) : null; // Converteer de gevonden overeenkomst naar een getal
        
          // Gebruik het nummer zoals nodig in je test
          if (firstNumber !== null) {
            cy.log('Het gevonden nummer is:', firstNumber);
            // Voer hier acties uit met het gevonden nummer
          } else {
            cy.log('Geen nummer gevonden in de tekst:', text);
          }
        });
        
        cy.log('2. Click on \'ADD\' button')
        cy.get('.svx-button > .telerik-blazor').click()

        cy.log('3. Fill all required fields in a way that will allow for a new record to be created.')
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

        cy.log('4. Click on the Grade Level dropdown.')
        cy.log('5. Pick a specific value in Grade Level dropdown')
        cy.wait(3000)
        cy.get('input[type="text"][role="combobox"]').eq(4).type('CM 14')
        cy.wait(3000)
        cy.get('input[type="text"][role="combobox"]').eq(1).type('{enter}') 

        cy.log('6. Click \'SAVE\' button')
        cy.get(':nth-child(2) > .telerik-blazor > .k-button-text').click();

         //Deze actie is een workaround voor nu:
         cy.get('.dismiss').click()
         cy.contains('Requirements').click()
         cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()

        //Compare first nummer with nieuw number
        cy.wait(10000)
        cy.get('.grid-pagination-information > label').invoke('text').then((text) => {
            const regex = /(\d+)/;
            const match = text.match(regex);
            const newNumber = match ? parseInt(match[0]) : null;
        
            // Vergelijk het nieuwe nummer met het eerste nummer
            if (firstNumber !== null && newNumber !== null) {
            expect(newNumber).not.to.equal(firstNumber); // Vergelijk de twee nummers
            } else {
            throw new Error('Kan het eerste of nieuwe nummer niet vinden');
            }
        });

      }) 
     
      it('Add Role Requirement', () => {
        cy.log('1. Observe the grid')
        cy.get('#tree-item-8 > :nth-child(1) > .k-item-text').click()
        cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()
        cy.get('[data-text="Grade Level"] > .k-cell-inner > .k-link > .k-column-title').should('be.visible')
        
        cy.wait(10000)
        let firstNumber;
        cy.get('.grid-pagination-information > label').invoke('text').then((text) => {
          const regex = /(\d+)/; // Reguliere expressie om het cijfer te vinden
          const match = text.match(regex); // Zoek naar overeenkomsten met de reguliere expressie in de tekst
          firstNumber = match ? parseInt(match[0]) : null; // Converteer de gevonden overeenkomst naar een getal
        
          // Gebruik het nummer zoals nodig in je test
          if (firstNumber !== null) {
            cy.log('Het gevonden nummer is:', firstNumber);
            // Voer hier acties uit met het gevonden nummer
          } else {
            cy.log('Geen nummer gevonden in de tekst:', text);
          }
        });
        
        cy.log('2. Click on \'ADD\' button')
        cy.get('.svx-button > .telerik-blazor').click()

        cy.log('3. Fill all required fields in a way that will allow for a new record to be created.')
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

        cy.log('4. Click on the Role dropdown.')
        cy.log('5. Pick a specific value in Role dropdown')
        cy.wait(3000)
        cy.get('input[type="text"][role="combobox"]').eq(5).type('Formal Role')
        cy.wait(3000)
        cy.get('input[type="text"][role="combobox"]').eq(5).type('{enter}') 

        cy.log('6. Click \'SAVE\' button')
        cy.get(':nth-child(2) > .telerik-blazor > .k-button-text').click();

         //Deze actie is een workaround voor nu:
         cy.get('.dismiss').click()
         cy.contains('Requirements').click()
         cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()

        //Compare first nummer with nieuw number
        cy.wait(10000)
        cy.get('.grid-pagination-information > label').invoke('text').then((text) => {
            const regex = /(\d+)/;
            const match = text.match(regex);
            const newNumber = match ? parseInt(match[0]) : null;
        
            // Vergelijk het nieuwe nummer met het eerste nummer
            if (firstNumber !== null && newNumber !== null) {
            expect(newNumber).not.to.equal(firstNumber); // Vergelijk de twee nummers
            } else {
            throw new Error('Kan het eerste of nieuwe nummer niet vinden');
            }
        });

      }) 
      
      it('Add Personnel Type Requirement', () => {
        cy.log('1. Observe the grid')
        cy.get('#tree-item-8 > :nth-child(1) > .k-item-text').click()
        cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()
        cy.get('[data-text="Grade Level"] > .k-cell-inner > .k-link > .k-column-title').should('be.visible')
        
        cy.wait(10000)
        let firstNumber;
        cy.get('.grid-pagination-information > label').invoke('text').then((text) => {
          const regex = /(\d+)/; // Reguliere expressie om het cijfer te vinden
          const match = text.match(regex); // Zoek naar overeenkomsten met de reguliere expressie in de tekst
          firstNumber = match ? parseInt(match[0]) : null; // Converteer de gevonden overeenkomst naar een getal
        
          // Gebruik het nummer zoals nodig in je test
          if (firstNumber !== null) {
            cy.log('Het gevonden nummer is:', firstNumber);
            // Voer hier acties uit met het gevonden nummer
          } else {
            cy.log('Geen nummer gevonden in de tekst:', text);
          }
        });
        
        cy.log('2. Click on \'ADD\' button')
        cy.get('.svx-button > .telerik-blazor').click()

        cy.log('3. Fill all required fields in a way that will allow for a new record to be created.')
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

        cy.log('4. Click on the Personnel Type dropdown.')
        cy.log('5. Pick a specific value in Personnel Type dropdown')
        cy.wait(3000)
        cy.get('input[type="text"][role="combobox"]').eq(3).type('PB test personnel type1')
        cy.wait(3000)
        cy.get('input[type="text"][role="combobox"]').eq(3).type('{enter}') 

        cy.log('6. Click \'SAVE\' button')
        cy.get(':nth-child(2) > .telerik-blazor > .k-button-text').click();

         //Deze actie is een workaround voor nu:
         cy.get('.dismiss').click()
         cy.contains('Requirements').click()
         cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()

        //Compare first nummer with nieuw number
        cy.wait(10000)
        cy.get('.grid-pagination-information > label').invoke('text').then((text) => {
            const regex = /(\d+)/;
            const match = text.match(regex);
            const newNumber = match ? parseInt(match[0]) : null;
        
            // Vergelijk het nieuwe nummer met het eerste nummer
            if (firstNumber !== null && newNumber !== null) {
            expect(newNumber).not.to.equal(firstNumber); // Vergelijk de twee nummers
            } else {
            throw new Error('Kan het eerste of nieuwe nummer niet vinden');
            }
        });

      })

      //This testcase will fail because the Yes en No button are now Cancel and OK. Bug is logged on 13 feb 2024
      it('Delete Requirements', () => {
        cy.get('#tree-item-8 > :nth-child(1) > .k-item-text').click()
        cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()

        cy.log('1. Click on bin icon of any Requirement item')

        cy.wait(10000)
        let firstNumber;
        cy.get('.grid-pagination-information > label').invoke('text').then((text) => {
          const regex = /(\d+)/; // Reguliere expressie om het cijfer te vinden
          const match = text.match(regex); // Zoek naar overeenkomsten met de reguliere expressie in de tekst
          firstNumber = match ? parseInt(match[0]) : null; // Converteer de gevonden overeenkomst naar een getal
        
          // Gebruik het nummer zoals nodig in je test
          if (firstNumber !== null) {
            cy.log('Het gevonden nummer is:', firstNumber);
            // Voer hier acties uit met het gevonden nummer
          } else {
            cy.log('Geen nummer gevonden in de tekst:', text);
          }
        });

        cy.get('[data-render-row-index="2"] > [data-col-index="0"] > .k-button > .telerik-blazor').click() //delete 

        cy.contains('Are you sure you want to delete the selected item?').should('be.visible')
        cy.contains('NO') //Should be 'No'
        cy.contains('YES') //Shoul be 'YES'

        cy.log('Click \'NO\' button')
        cy.contains('NO').click()
        
        //Compare first nummer with nieuw number
  
        cy.get('.grid-pagination-information > label').invoke('text').then((text) => {
            const regex = /(\d+)/;
            const match = text.match(regex);
            const newNumber = match ? parseInt(match[0]) : null;
        
            // Vergelijk het nieuwe nummer met het eerste nummer
            if (firstNumber !== null && newNumber !== null) {
            expect(newNumber).to.equal(firstNumber); // Vergelijk de twee nummers
            } else {
            throw new Error('Kan het eerste of nieuwe nummer niet vinden');
            }
        });

        cy.log('3. Repeat step 1 and click \'YES\' button')
        cy.wait(5000)
        cy.get('[data-render-row-index="2"] > [data-col-index="0"] > .k-button > .telerik-blazor').click() //delete 
        cy.contains('YES').click()

       //Compare first nummer with nieuw number
       cy.wait(10000)
       cy.get('.grid-pagination-information > label').invoke('text').then((text) => {
        const regex = /(\d+)/;
        const match = text.match(regex);
        const newNumber = match ? parseInt(match[0]) : null;


        // Vergelijk het nieuwe nummer met het eerste nummer
        if (firstNumber !== null && newNumber !== null) {
          expect(newNumber).not.to.equal(firstNumber); // Vergelijk de twee nummers
        } else {
          throw new Error('Kan het eerste of nieuwe nummer niet vinden');
        }
      });



      }) 

      it.only('Validation on Add/Edit Requirements', () => {
        cy.log('1. Do not fill any field in and click \'SAVE\' button ')
        cy.get('#tree-item-8 > :nth-child(1) > .k-item-text').click()
        cy.get('#tree-item-8_0 > .k-link > .k-item-text').click()
        cy.get('.svx-button > .telerik-blazor').click()

      }) 

  })