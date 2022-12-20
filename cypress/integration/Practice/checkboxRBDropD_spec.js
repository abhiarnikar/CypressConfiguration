///<reference types = "cypress"/>

describe('verify the functionality of checkbox RadioButton Dropdown',()=>{

    beforeEach(()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
    })
    
    // with click()
    it('verify the  functionality checkbox with click',()=>{
        cy.get('input[value="option2"]').click().should('be.checked')
        cy.get('input[value="option2"]').click().should('not.be.checked')
    })

    //with check and uncheck
    it('verify the functionality of checkbox with check and uncheck',()=>{
        cy.get('input[value="option3"]').check().should('be.checked')
        cy.get('input[value="option3"]').uncheck().should('not.be.checked')
    })

    it('verify the functionality of multiple checkboxes',()=>{
        cy.get('#checkbox-example').find('input[type="checkbox"]').each(function(el,index,arr){
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })

    // it.only('verify the functionality of multiple checkboxes',function(){
    //     cy.get('input[type="checkbox"]').check(['Option-1','Option-2','Option-3'])
    //     cy.get('input[type="checkbox"]').uncheck(['Option-1','Option-2','Option-3'])
    
    // })

    //Radio Button

    it('verify the functionality of Radio Button with check and uncheck',()=>{
        cy.get('input[value="radio2"]').check().should('be.checked')
        cy.get('input[value="radio1"]').should('not.be.checked')
    })

    it('verify the functionality of all radio button',()=>{
        cy.get('#radio-btn-example').find('input[type="radio"]').each(function(el,index,arr){
            cy.wrap(el).check().should('be.checked')
        })
        cy.get('#radio-btn-example').first().should('not.be.checked')
    })

    //dropdown
    //static dropdown
    it('verify the functionality of dropdown with select(static)',()=>{
         cy.get('#dropdown-class-example').select('Appium').should('have.value','option2')
    })

    //dynamic dropdown

    it.only('verify the dynamic dropdown without select',()=>{
        cy.get('input[id="autocomplete"]').click().type('India').type('{Enter}')
        
        
      
    })


})