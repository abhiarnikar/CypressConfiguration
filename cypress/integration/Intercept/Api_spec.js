///<reference types = "cypress"/>

describe('verify the functionality of intercept', () => {


    it('verify the simple intercept', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts"
        }).as('posts')
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
        cy.wait('@posts').then(function (res) {
            cy.log(res)
            expect(res.response.body).have.length('100')
        })
    })

    it.only('mocking with the intercept with static response',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/posts",
             
        },{
            body:{
                
                    "DOB": 25,
                    "AGE": 30,
                    "firstName": "Abhijit",
                    "lastName": "Arnikar"
                  
            }
        }).as('posts')
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
        cy.wait('@posts').then(function(res){
            cy.log(res)
            cy.log(Request)
            expect(res.response.statusCode).to.eq(200)
            expect(res.response.body).to.have.keys('DOB','AGE','firstName','lastName')
        })

    })
    it.only('mocking with the intercept with dynamic fixture file',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/posts",
        },{
            fixture:'example.json'
        }).as('posts')
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
        cy.wait('@posts').then(function(res){
            cy.log(res)
            cy.log(Request)
            expect(res.response.statusCode).to.eq(200)
            expect(res.response.body).to.have.keys('name','body','email')
        })

    })
})