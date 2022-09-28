///<reference types = "cypress"/>

describe('verify the login functionality',()=>{
    it('verify the login with valid credentilas',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input[id="username"]').type('student')
        cy.get('input[id="password"]').type('Password123')
        cy.get('button[id="submit"]').click()
        cy.get('.post-title').should('have.text','Logged In Successfully')
    })
    it('verify the login with valid credentilas',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input[id="username"]').type('student')
        cy.get('input[id="password"]').type('Password124')
        cy.get('button[id="submit"]').click()
        cy.get('div[id="error"]').should('have.text','Your password is invalid!')

    })
})