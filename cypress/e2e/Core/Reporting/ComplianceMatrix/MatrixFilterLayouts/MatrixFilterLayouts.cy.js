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

        }
        
        )
        it('Add Compliance Matrix Filter Layout', () => {

            cy.log('step 1 - 4 is not automated because we have to delete all latout filter as a precondition. This is not workable and also the all the elements on de filter screen are not visible in cypress which makes it inmpossible to use an if and else statement')
                cy.get('div.svx-grid-settings-header').should('exist');
                cy.log('Bug')//Save as filter layaout does not exist.
                cy.contains('label', 'Save as filter layout').should('exist');

            cy.log('5. Select the filter layout from the dropdown')
                cy.get('span.telerik-blazor.k-combobox').find('input.k-input-inner').eq(1).click({force: true}).type('Ritch',{force: true}).wait(3000).type('{enter}',{force: true})
                cy.get('input[aria-disabled="true"]').should('exist');

            cy.log('6. Click on \'+ Add new\'. ')
            //Add
                cy.get(':nth-child(2) > .svx-layout-picker > .svx-layout-picker-header > :nth-child(2) > .svx-button > .k-button > .k-button-text').click({force: true})
                cy.log('Bug')//Save as filter layaout does not exist.
                cy.contains('label', 'Save as filter layout').should('exist');
                cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-check').should('exist');
                cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-x').should('exist');
                cy.contains('label', 'Add to favorites').should('exist');
                cy.get(':nth-child(2) > .svx-layout-picker > .svx-layout-picker-header > :nth-child(2) > .svx-button > .k-button > .k-button-text').should('not.exist')
            
            cy.log('7. Enter any filters (different ones from step 2). Check \'Add to favorites\' and click on the \'save\' icon.')
                cy.get('.svx-filter-content').find('.k-input-inner').eq(5).click({force: true}).type('Rich Nathoe ()', {force: true}).wait(6000).type('{enter}',{force: true})
                cy.contains('div', 'Employee filter').click({ force: true });
                cy.get('span.k-textbox input.k-input-inner').type('Rich',{force: true});
                cy.contains('label', 'Add to favorites').click({ force: true });
                //Save
                cy.get('button.telerik-blazor.k-button.svx-button-link.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base')
                .find('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-check')
                .click({ force: true });

                cy.contains('div.svx-grid-settings-header', 'Select layout').should('exist');
                cy.wait(3000)
                cy.get('span.telerik-blazor.k-button-icon.k-icon.k-svg-icon.k-svg-i-caret-alt-down').should('exist');
                cy.get('button.telerik-blazor.k-button.svx-button-link.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base').should('exist');
                cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-trash').should('exist');
                cy.get(':nth-child(2) > .svx-layout-picker > .svx-layout-picker-header > :nth-child(2) > .svx-button > .k-button > .k-button-text').should('exist')
                cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-plus-circle').should('exist');
                cy.get('input[aria-disabled="true"]').should('exist');

            cy.log('8. Navigate to Dashboard and locate \'Favorites\' widget. Observe. ')
                cy.contains('span.k-item-text', 'Dashboard').click();
                cy.log('Bug') //not seeing: Filter layout name created in step 7 is shown (link).

        })

        it('Edit Compliance Matrix Filter Layout', () => {
            cy.log('1. In the filter screen, select any filter layout from the dropdown')
                cy.get('span.telerik-blazor.k-combobox').find('input.k-input-inner').eq(1).click({force: true}).type('Ritch',{force: true}).wait(3000).type('{enter}',{force: true})
                cy.get('input[aria-disabled="true"]').should('exist');
            
            cy.log('2. Click on \'Apply\' button')
                cy.contains('span.k-button-text', 'Apply').click({ force: true });
                cy.wait(5000)
                cy.get('td[role="gridcell"]').contains('Ritchie Nathoe ()').should('exist'); 
                cy.get('td[role="gridcell"]').contains('Test Automation 1 ()').should('not.exist');

            cy.log('3. Click on the filter button. Click on the \'edit\' icon next to the filter layout name. ')
                cy.wait(3000)
                cy.contains('span.k-button-text', 'Filter').click().wait(3000);
                cy.contains('div.title', 'Employee filter').should('exist');
                cy.wait(3000)

                cy.log('Bug') //after opening filter lay out the edit button should be available but is not. 
                cy.get('span.telerik-blazor.k-combobox').find('input.k-input-inner').eq(1).click({force: true}).type('Ritch',{force: true}).wait(3000).type('{enter}',{force: true})
                //Edit button
                cy.get('.svx-layout-picker-form-right > :nth-child(1) > .k-button > .telerik-blazor').click({force: true})
                cy.contains('label', 'Add to favorites').should('exist');
            
            cy.log('4. Change the name of the layout filter, change the filters and click the \'save\' icon ')
                cy.get('span.telerik-blazor.k-combobox').find('input.k-input-inner').eq(1).click({force: true}).clear({force: true}).type('ritch',{force: true}).wait(3000).type('{enter}',{force: true})
                cy.get('button.telerik-blazor.k-button.svx-button-link.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base')
                .find('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-check')
                .click({ force: true });

            cy.log('5. Click on \'Apply\' button ')
                cy.get('input[aria-disabled="true"]').should('exist');
                cy.contains('span.k-button-text', 'Apply').click({ force: true });
                cy.wait(5000)
                cy.get('td[role="gridcell"]').contains('Ritchie Nathoe ()').should('exist'); 
                cy.get('td[role="gridcell"]').contains('Test Automation 1 ()').should('not.exist');

        }) 

        it('Delete Compliance Matrix Filter Layout', () => {
            cy.log('1. On filter layout dropdown, select one and click on bin icon')
                cy.get('span.telerik-blazor.k-combobox').find('input.k-input-inner').eq(1).click({force: true}).type('Rich',{force: true}).wait(3000).type('{enter}',{force: true})
                //delete
                cy.get('.svx-layout-picker-form-right > :nth-child(2) > .k-button > .telerik-blazor').click({force: true})
                cy.log('Bug') //this dailog is not shown: A pop-up dialog is displayed: 'Are you sure you want to delete the selected item?'NO' and 'YES' (preselected) buttons are available.
            
            cy.log('2. Click \'NO\' button')
                cy.contain('NO').click({force: true})
                cy.get('div.k-chip[k-chip-md][k-rounded-md][k-chip-solid][k-chip-solid-base][aria-label="Rich Nathoe ()"]').should('exist');

            cy.log('3. Repeat step 1 and click \'YES\' button')
                cy.get('span.telerik-blazor.k-combobox').find('input.k-input-inner').eq(1).click({force: true}).type('Rich',{force: true}).wait(3000).type('{enter}',{force: true})
                //delete
                cy.get('.svx-layout-picker-form-right > :nth-child(2) > .k-button > .telerik-blazor').click({force: true})
                cy.contain('YES').click({force: true})
                cy.get('div.k-chip[k-chip-md][k-rounded-md][k-chip-solid][k-chip-solid-base][aria-label="Rich Nathoe ()"]').should('not.exist');
                cy.contains('label', 'Add to favorites').should('exist');

            cy.log('4. Click on the \'+ Add new\' button, re-enter the previously deleted item (same Name), select any data on the filters and click the \'save\' icon')
                //Add
                cy.get(':nth-child(2) > .svx-layout-picker > .svx-layout-picker-header > :nth-child(2) > .svx-button > .k-button > .k-button-text').click({force: true})
                cy.get('.svx-filter-content').find('.k-input-inner').eq(5).click({force: true}).type('Rich Nathoe ()', {force: true}).wait(6000).type('{enter}',{force: true})
                cy.contains('div', 'Employee filter').click({ force: true });
                cy.get('span.k-textbox input.k-input-inner').type('Rich',{force: true});
                cy.contains('label', 'Add to favorites').click({ force: true });
                cy.get('button.telerik-blazor.k-button.svx-button-link.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base')
                .find('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-check')
                .click({ force: true });

                cy.contains('div.svx-grid-settings-header', 'Select layout').should('exist');
                cy.wait(3000)
                cy.get('span.telerik-blazor.k-button-icon.k-icon.k-svg-icon.k-svg-i-caret-alt-down').should('exist');
                cy.get('button.telerik-blazor.k-button.svx-button-link.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base').should('exist');
                cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-trash').should('exist');
                cy.get(':nth-child(2) > .svx-layout-picker > .svx-layout-picker-header > :nth-child(2) > .svx-button > .k-button > .k-button-text').should('exist')
                cy.get('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-plus-circle').should('exist');
                cy.get('input[aria-disabled="true"]').should('exist');

        }) 

        it('Delete Compliance Matrix Filter Layout', () => {
            cy.log('1. Do not fill any field in and click \'SAVE\' icon')
                cy.get(':nth-child(2) > .svx-layout-picker > .svx-layout-picker-header > :nth-child(2) > .svx-button > .k-button > .k-button-text').click({force: true})
                //Save
                cy.get('button.telerik-blazor.k-button.svx-button-link.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base')
                .find('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-check')
                .click({ force: true });
                cy.log('Bug') //Expected but not seen: Name' field is highlighted. Upon hover, the following message is shown: 'Name is a required field'.

            cy.log('2. Enter a name having more than 255 characters and click \'save\' icon')
                const longName = 'a'.repeat(257)
                cy.get('.svx-filter-content').find('.k-input-inner').eq(5).click({force: true}).type(longName, {force: true}).wait(6000).type('{enter}',{force: true})
                //Save
                cy.get('button.telerik-blazor.k-button.svx-button-link.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base')
                .find('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-check')
                .click({ force: true });
                cy.log('Bug') //Expected but not seen: 'Name' field remains highlighted.The validation message on hover shows 'Name has a maximum of 255 characters.'
            
            cy.log('3. Enter \'Filter layout 1\' into \'Name\' field and click \'save\' icon')
                cy.get('.svx-filter-content').find('.k-input-inner').eq(5).click({force: true}).type('Filter layout 1', {force: true}).wait(6000).type('{enter}',{force: true})
                //Save
                cy.get('button.telerik-blazor.k-button.svx-button-link.svx-button-no-text.k-button-solid.k-rounded-md.k-button-md.k-button-solid-base')
                .find('span.telerik-blazor.k-button-icon.k-icon.k-font-icon.k-i-check')
                .click({ force: true });
                cy.log('Bug') //Expected but not seen: 'Name' field remains highlighted.On hover, the following message is shown: An item with this name already exists.'

            cy.log('4.Provide valid name (255 or less characters and not yet existing) and click \'save\' icon')
                cy.log('Adding a valid filter is already checked in other testcase')

        }) 
    })