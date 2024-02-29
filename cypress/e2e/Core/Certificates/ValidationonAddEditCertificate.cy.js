describe('Evidences > Certificates', () => {
    beforeEach(() => {
    cy.log('Login')
     // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
      cy.get('#Username').type('Richard')
      cy.get('#Password').type('Test123')
      cy.get('#Login').click()
     // 'Certificate 1' is created.
      cy.get('#tree-item-10 > .k-link').click()
      cy.get('#tree-item-10_0 > .k-link').click()
      cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
      cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').type('Certificate 1').wait(1000)
      cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
      cy.wait(2000)
    })
     //  Navigation path: Evidence -> Certificates > ADD
     it('Validation on Add/Edit Certificate', () => {
cy.log('1. ADD & Do not fill any field in and click \'SAVE\' button ')
     cy.get('#tree-item-10_0 > .k-link').click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The screen remains opened.
     cy.get('.svx-page-header').contains('Certificate')
     cy.get('.svx-column-block-left > .svx-block > .svx-block-header > div').contains('General info')
     // 'Name' text field is highlighted.
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox.k-input.k-invalid').should('exist')
     // On hover, the following message is shown: 'Name is a required field'
cy.log('BUG: expected message is not the same as shown')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox.k-input.k-invalid').click()
     cy.contains('The Name field is required.')

cy.log('2. Enter \'Certificate 1\' into \'Name\' field and click \'SAVE\' button ')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox.k-input.k-invalid').type('Certificate 1')
     cy.get(':nth-child(2) > .telerik-blazor > .k-button-text').click()
     //  The screen remains open. 'Name' field is highlighted.
     cy.get('.svx-page-header').contains('Certificate')
     cy.get('.svx-column-block-left > .svx-block > .svx-block-header > div').contains('General info')
     // 'Name' text field is highlighted.
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox.k-input.k-invalid').should('exist')
     // On hover, the following message is shown: An item with this name already exists.'
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox.k-input.k-invalid').click()
     cy.contains('An item with this name already exists.')

cy.log('3. Enter a name that contains 256 or more characters and click \'SAVE\'')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada augue non leo faucibus, id interdum eros rutrum. Nulla nec nisi ultricies, faucibus purus eu, fermentum odio. Nam lobortis augue sed pretium fermentum. Aenean id lacinia arcu. Phasellus accumsan ullamcorper luctus. Morbi quis dictum elit. Curabitur ac ipsum non mi placerat auctor nec non justo. Nulla facilisi. Vestibulum vel gravida arcu. Proin sollicitudin quam at enim lobortis convallis. Etiam dictum ante vel ligula dapibus tincidunt. Nam vehicula euismod sapien, non feugiat purus matt')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The screen remains opened.
     cy.get('.svx-page-header').contains('Certificate')
     cy.get('.svx-column-block-left > .svx-block > .svx-block-header > div').contains('General info')
     // 'Name' text field is highlighted.
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox.k-input.k-invalid').should('exist')
     //  The validation message on hover shows 'Name has a maximum of 255 characters.'
cy.log('BUG: expected message is not the same as shown')
      cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox.k-input.k-invalid').click()
      cy.contains('Name has a maximum of 255 characters.')
     cy.wait(2000)

cy.log('4. Provide valid name (255 or less characters and not yet existing) and click \'SAVE\' button ')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC2418step4').wait(2000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The user is redirected to the Certificates overview screen.
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link').contains('Name')
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link').contains('Code')
     //  New item is available on the list.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('TC2418step4').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2418step4')

cy.log('5. Re-open the item and add a code with more than 255 characters and click \'SAVE\'')
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('TC2418step4').wait(2000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2418step4').dblclick()
     cy.get(':nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada augue non leo faucibus, id interdum eros rutrum. Nulla nec nisi ultricies, faucibus purus eu, fermentum odio. Nam lobortis augue sed pretium fermentum. Aenean id lacinia arcu. Phasellus accumsan ullamcorper luctus. Morbi quis dictum elit. Curabitur ac ipsum non mi placerat auctor nec non justo. Nulla facilisi. Vestibulum vel gravida arcu. Proin sollicitudin quam at enim lobortis convallis. Etiam dictum ante vel ligula dapibus tincidunt. Nam vehicula euismod sapien, non feugiat purus matt')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The screen remains open. 'Code' field is highlighted.
     cy.get('.svx-page-header').contains('TC2418step4')
     cy.get('.svx-column-block-left > .svx-block > .svx-block-header > div').contains('General info')
     // 'Code' text field is highlighted.
     cy.get(':nth-child(3) > .svx-formfield-content > .input-group > .k-textbox.k-input.k-invalid').should('exist')
     //  The validation message on hover shows 'Code has a maximum of 255 characters.'
cy.log('BUG: expected message is not the same as shown')
     cy.get(':nth-child(3) > .svx-formfield-content > .input-group > .k-textbox.k-input.k-invalid').click()
     cy.contains('Code has a maximum of 255 characters.')

cy.log('6. Adjust the code to have no more than 255 characters and click \'SAVE\'')
     // Adjust the code to have no more than 255 characters and click 'SAVE'
     cy.get(':nth-child(3) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').wait(3000).clear().type('codecode').wait(3000)
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  The user is redirected to the Certificates overview screen.
     cy.get('[data-text="Name"] > .k-cell-inner > .k-link').contains('Name')
     cy.get('[data-text="Code"] > .k-cell-inner > .k-link').contains('Code')
     //  Updated item is available on the list.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('TC2418step4').wait(3000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2418step4')  
cy.log('Clean Up Certificate 1 & TC2418step4')
     cy.get('#tree-item-10_0 > .k-link').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Certificate 1')
     cy.get('.k-master-row > [data-col-index="1"]').contains('Certificate 1')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('TC2418step4')
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC2418step4')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
    })
    })