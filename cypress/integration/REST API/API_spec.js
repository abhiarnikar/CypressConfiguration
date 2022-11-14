///<reference types = "cypress"/>

describe('verify the REST API',()=>{

    it('verify the GET method',()=>{
        cy.request({
            method:"GET",
            url:"http://httpbin.org/get"
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq('OK')
        })
    })
    it.only('verify the POST method',()=>{
        cy.request({
            method:"POST",
            url:"http://httpbin.org/post",
            body:{
                'name':"abhijit arnikar",
                'age':30
            },
            headers:{
                "Accept": "application/json"
            }
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq('OK')
            
        })
    })
})