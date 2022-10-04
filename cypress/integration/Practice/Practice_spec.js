///<reference types = "cypress"/>

//import { describe } from "mocha";

describe('verify the functionality',()=>{
      
    beforeEach(function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    
    
    it('TC-01 ADD to cart',()=>{
           cy.get('img[alt="Cucumber - 1 Kg"]')
    })
})