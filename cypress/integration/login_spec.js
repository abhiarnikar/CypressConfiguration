///<reference types = "cypress"/>
describe('verify the login function', function () {

    it('verify with valid credentials', function () {

        let baseurlF = Cypress.config().baseUrl
        //let extmout = Cypress.config()['execTimeout']
        //cy.log(baseurlF)
        //cy.log(extmout)
        cy.visit(baseurlF)

    })
    it('verify the forgot password link', function () {
        cy.visit('/auth/requestPasswordResetCode')

    })
    it('verify the recruitment candidates', () => {
        cy.visit('/recruitment/viewCandidates')
    })
    it.only('verify the login functionality', () => {
        let baseurlF = Cypress.config().baseUrl
        cy.visit(baseurlF)
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('p[class="oxd-userdropdown-name"]').should('have.text','Paul Collings')
    })

})