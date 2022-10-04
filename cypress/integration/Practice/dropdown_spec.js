///<reference types = "cypress"/>

//const { values } = require("cypress/types/lodash")

describe('verify the functionality of dropdown',()=>{
    // beforeEach(function(){
    //     cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    // })
    beforeEach(()=>{
        cy.visit('https://www.lonavalacab.com/')
    })

    it('verify the functionality of dropdown',()=>{
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value','testng')
        cy.get('#dropdowm-menu-3').select('CSS').should('have.value','css')
        cy.get('#dropdowm-menu-1').select('Python').should('have.value','python')

    })
    it('verify the functionality of dropdown',()=>{
        let values = ['java','maven','css']
        let textValues = ['JAVA','Maven','CSS']        
        cy.get('div[class="section-title"]').first().children().each(function(el,index){
            cy.wrap(el).select(values[index]).should('have.value',values[index])
        })
    })

    it('verify the dropdown',()=>{
          cy.get('select[name="package"]').select('Full Sightseeing').should('have.value','Full Sightseeing')
          cy.get('#car').select('4 Seater').should('have.value',1)
    })

    it.only('verify the functionality of dropdown',()=>{
        let plzSelect = ["Super Deluxe","7 Seater"]
        cy.get('.form-control tm-select').each(function(el,i){
            cy.wrap(el).select(plzSelect[i]).should('contain',[i])
        })
    })
})