describe('Requirements > Organizational unit groups', () => {
    beforeEach(() => {
     cy.log('Login')
     cy.get('#Username').type('Richard')
     cy.get('#Password').type('Test123')
     cy.get('#Login').click()
    // There are several items created. One of them has Name = 'Organisational unit group 1'.
      cy.get('#tree-item-8 > .k-link').click()
      cy.get('#tree-item-8_4 > .k-link').click()
      cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
      cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Organisational unit group 1').wait(3000)
      cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
    })

it('Validation on Add/Edit Requirement Type', () => {
cy.log('1. Do not fill any field in and click \'SAVE\' button ')
     // Manage section - Requirements - Organizational unit groups -> ADD button
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The pop-up remains opened.
     cy.get('.svx-modal-header > div').should('exist').contains('Organizational unit group')
     // 'Name' text field is highlighted.
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     //  On hover, the following message is shown: 'Name' is a required field'
cy.log('BUG: different message is shown')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').click()
     cy.get('.k-child-animation-container > .telerik-blazor').contains('\'Name\' is a required field')

cy.log('2. Enter name that contains more than 255characters (256 or more)  and click \'SAVE\'')
     const longName = 'a'.repeat(256)
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type(longName)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     // The pop-up remains opened.
     cy.get('.svx-modal-header > div').should('exist').contains('Organizational unit group')
     // 'Name' field is highlighted.
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     //  On hover the following validation message is shown in the tooltip:
cy.log('BUG: different message is shown')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').click()
     cy.get('.k-child-animation-container > .telerik-blazor').contains('Name has a maximum of 255 allowed characters.')

cy.log('3. Enter \'Organisational unit group 1\' into \'Name\' field and click \'SAVE\' button ')
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type('Organisational unit group 1')
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     //  An error pop-up with the following message is shown:
     //  'An error has occurred while saving: An item with this name already exists.'
     cy.contains('An error has occurred while saving: An item with this name already exists.')
     //  A 'CLOSE' button is available.
     cy.contains('CLOSE')
cy.log('BUG: message not shown, saves duplicate!!!')
    
cy.log('4. Click \'CLOSE\' button, provide valid \'Name\' and \'Description\', add \'Organisational units\' and Requirement groups, and click \'SAVE\' button')
     cy.get('.svx-modal-buttons > :nth-child(1) > .telerik-blazor').click()
     cy.get('.svx-grid-footer-buttons > .svx-button > .telerik-blazor').click()
     cy.get('.svx-modal-body > :nth-child(1) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('OrganizationalUGTC1088')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').type('Description')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').type('NM Organisational Unit Spain').wait(3000).type('{enter}')
     cy.get(':nth-child(3) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click()
     cy.get(':nth-child(5) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').wait(3000).type('Americas').wait(3000).type('{enter}')
     cy.get(':nth-child(5) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click()
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     //  The pop-up is closed. The user is redirected to the Organizational unit groups overview screen.
     cy.get('.svx-page-header-title').contains('Organizational unit groups')
     //  Newly created item is available.
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).clear().type('OrganizationalUGTC1088').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('OrganizationalUGTC1088')

cy.log('5. Double-click on this new Organizational unit group record')
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('OrganizationalUGTC1088').dblclick()
     // The dialog with previously provided data is opened.
     cy.contains('OrganizationalUGTC1088')
     cy.get('.svx-modal-body > :nth-child(2)').contains('Description')
     cy.get('.svx-modal-body > :nth-child(3)').contains('NM Organisational Unit Spain')
     cy.get('.svx-modal-body > :nth-child(5)').contains('Americas')

cy.log('6. Type in the description a text that contains 5001 or more characters, click \'SAVE\' button')
     const veryLongName = 'a'.repeat(1250) + 'b'.repeat(1250) + 'c'.repeat(1250) + 'd'.repeat(1250) + 'e'.repeat(1);
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().type(veryLongName).wait(3000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click().wait(3000)
     // The pop-up remains opened.
     cy.get('.svx-modal-header > div').should('exist').contains('Organizational unit group')
     // 'Description' field is highlighted.
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').should('have.css', 'border-color', 'rgb(213, 25, 35)')
     //  On hover the following validation message is shown in the tooltip:
cy.log('BUG: different message is shown')
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').click()
     cy.get('.k-child-animation-container > .telerik-blazor').contains('Description has a maximum of 5000 allowed characters')

     cy.log('cleanup')
     cy.get(':nth-child(5) > .svx-formfield-content > .k-multiselect').find('.k-input-inner').click().wait(3000).type('{backspace}').click()
     cy.get(':nth-child(2) > .svx-formfield-content > .input-group > .k-textbox').find('.k-input-inner').clear().wait(3000)
     cy.get('.svx-modal-buttons > :nth-child(2) > .telerik-blazor').click()
     cy.get('[data-col-index="1"] > .k-filtercell > .k-filtercell-wrapper > .k-textbox').find('.k-input-inner').wait(3000).clear().type('OrganizationalUGTC1088').wait(3000)
     cy.get('[data-render-row-index="2"] > [data-col-index="1"]').contains('OrganizationalUGTC1088')
     cy.get('.k-master-row > [data-col-index="0"] > .k-button > .telerik-blazor').click()
     cy.get('.k-button-solid-primary').click()
    })
    })