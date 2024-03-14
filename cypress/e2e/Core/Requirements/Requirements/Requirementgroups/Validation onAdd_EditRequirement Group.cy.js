describe('Requirements > Requirement groups', () => {
    beforeEach(() => {
     cy.log('Login')
      // Bijvoorbeeld: inloggen voordat elke test wordt uitgevoerd
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
     // There are several items created. One of them has Name = 'Requirement group 1'
     cy.get('#tree-item-8 > .k-link > .telerik-blazor').click()
     cy.get('#tree-item-8_1 > .k-link').click()
     cy.get('.svx-button > .telerik-blazor').click()
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Requirement group 1')
     cy.get(':nth-child(4) > .svx-formfield-content > .telerik-blazor').type('Europe').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(7000)
     //  Menu -> Manage section - Requirements - Requirement groups - ADD
     cy.get('.svx-button > .telerik-blazor').click()
    })
    
it('Validation on Add/Edit Requirement Group', () => {
cy.log('1. Do not fill any field in and click \'SAVE\' button ')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(2000)
     // The window remains opened.
     cy.get('.svx-block-header > div').should('exist').contains('Requirement group Info')
     // 'Name' text field and 'Organizational unit groups' multiple select field are highlighted.
     cy.get('input.k-input-inner[aria-invalid="true"]').should('exist')
     //  On hover, the following message is shown:'Name' is a required field'
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').click()
cy.log('BUG: "The Name field is required." is shown')
     //  cy.contains('\'Name\' is a required field')

     //  On hover, the following message is shown: 'Organizational unit groups' is a required field'
cy.log('BUG: "The Organizational unit groups field is required." is shown')
     //  cy.contains('\'Organizational unit groups\' is a required field')

cy.log('2. Enter \'Requirement group 1\' into \'Name\' field, add an Organizational unit group and click \'SAVE\' button ')
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').type('Requirement group 1')
     cy.get(':nth-child(4) > .svx-formfield-content > .telerik-blazor').type('Europe').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  The window remains open.
     cy.get('.svx-block-header > div').should('exist').contains('Requirement group Info')
     //  The 'Name' field is highlighted.
     cy.get('input.k-input-inner[aria-invalid="true"]').should('exist')
     //  On hover the following validation message is shown: 'An error has occurred while saving: An item with this name already exists.'
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').click()
cy.log('BUG: message not shown. req group is saved. duplicate')
    //  cy.contains('An error has occurred while saving: An item with this name already exists.')

cy.log('3. Enter requirement group Name that contains 256 or more characters, click \'SAVE\' button  ')
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada augue non leo faucibus, id interdum eros rutrum. Nulla nec nisi ultricies, faucibus purus eu, fermentum odio. Nam lobortis augue sed pretium fermentum. Aenean id lacinia arcu. Phasellus accumsan ullamcorper luctus. Morbi quis dictum elit. Curabitur ac ipsum non mi placerat auctor nec non justo. Nulla facilisi. Vestibulum vel gravida arcu. Proin sollicitudin quam at enim lobortis convallis. Etiam dictum ante vel ligula dapibus tincidunt. Nam vehicula euismod sapien, non feugiat purus matt')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  Both fields remain highlighted.
     cy.get('input.k-input-inner[aria-invalid="true"]').should('exist')
     //  The validation message on hover of the 'Name' field is changed to 'Name has a maximum of 255 allowed characters'
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').click()
cy.log('BUG: another message is shown: "The field Name must be a string with a maximum lenght of 255."')
     //  cy.contains('Name has a maximum of 255 allowed characters')

cy.log('4. Provide valid \'Name\', \'Description\', \'Category\' and \'Organizational unit group\', click \'SAVE\' button')
     cy.get(':nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('TC1076step4')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Description')
     cy.get('.k-combobox').find('.k-input-inner').type('Country requirements').wait(3000).type('{downarrow}').type('{enter}')
     cy.get(':nth-child(4) > .svx-formfield-content > .telerik-blazor').type('Europe').wait(3000).type('{enter}')
     cy.get('.modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(5000)
     //  The window is closed.
     //  The user is redirected to the Requirement groups overview screen.
     cy.get('.svx-page-header-title').contains('Requirement groups')
     //  Grid list is updated accordingly and newly created item is available on the list
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').type('TC1076step4').wait(5000)
     cy.get('.k-master-row > [data-col-index="1"]').contains('TC1076step4')
     cy.get('.k-master-row > [data-col-index="2"]').contains('Description')
     cy.get('.k-master-row > [data-col-index="3"]').contains('Country requirements')
     cy.get('.k-master-row > [data-col-index="4"]').contains('Europe')

cy.log('cleanup')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click().wait(3000)
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').clear().type('Requirement group 1').wait(5000)
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click().wait(3000)
    })
    })