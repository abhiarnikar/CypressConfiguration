///<reference types = "cypress"/>

//import cypress = require("cypress")

describe('checking the env variable',()=>{

    it('TC_01',()=>{
        cy.visit(Cypress.env('baseUrl'))
    })
})