///<reference types = "cypress"/>

import {Utility} from '../support/utility'
let url = new Utility().getBaseUrl();
describe('verify the login function', function () {

    it.only('3rd method with utility method ENV Variables',()=>{
            cy.visit(url)
    })
    
    it('2nd method verify with cypress config files', function () {
        let baseurlF = Cypress.config().baseUrl
        cy.visit(baseurlF)

    })
    
    it('1st method verify with using baseurl with cypress.json', () => {
        let baseurlF = Cypress.config().baseUrl
        cy.visit(baseurlF)
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('p[class="oxd-userdropdown-name"]').should('have.text','Paul Collings')
    })
     



})