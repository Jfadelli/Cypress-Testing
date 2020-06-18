describe('Navigation', () => {
    it('Can navigate to the site', () => {
        cy.visit('http://localhost:3000')
    })
})

describe('Initial State', () => {
    it('empty initial state first & last name', () => {
        cy.get('input[name=first_name]')
            .should('have.value', '')
        cy.get('input[name=last_name]')
            .should('have.value', '')
    })
    it('empty initial state email', () => {
        cy.get('input[name=email]')
            .should('have.value', '')
    })
    it('empty initial state password', () => {
        cy.get('input[name=password]')
            .should('have.value', '')
    })
    // it('unchecked initial TOS', () => {
    //     cy.get('input[name=tos]')
    //         .should('have.value', 'false')
    // })
    it('disabled submit button', () => {
        cy.get('button')
            .should('be.disabled')
    })
})

describe('Inputs', () => {

    it('Can locate and input names into first & last name', () => {
        cy.get('input[name=first_name]')
            .type('Jim')
            .should('have.value', 'Jim')
        cy.get('input[name=last_name]')
            .type('Beam')
            .should('have.value', 'Beam')
    })
    it('Can locate and input email', () => {
        cy.get('input[name=email]')
            .type('jb@fakmail.com')
            .should('have.value', 'jb@fakmail.com')
    })
    it('Can locate and input password', () => {
        cy.get('input[name=password]')
            .type('test123')
            .should('have.value', 'test123')
    })
    it('Can agree to TOS', () => {
        cy.get('input[name=tos]')
            .check()
            .should('have.value', 'on')
    })

})

describe('Submit button', () => {
    it('enabled submit button', () => {
        cy.get('button')
            .should('be.enabled')
    })
})

describe('Post friends', () => {
    it('Submits test friend', () => {
        cy.get('button')
            .click()
    })
    it('Test friend added succesfully', () => {
        cy.get('div#jb@fakemail.com')
            .should('have.string', 'Jim Beam')
        cy.get('div#jb@fakemail.com')
            .should('have.value', 'jb@fakemail.com')

    })
})