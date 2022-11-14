///<reference types = "cypress"/>

describe('verify the switchTab option',()=>{
    
    it('Invoke child tab',function(){
        
        cy.visit("https://codenboxautomationlab.com/practice/")

        cy.get('#opentab').invoke('removeAttr','target').click()
        
    })
})