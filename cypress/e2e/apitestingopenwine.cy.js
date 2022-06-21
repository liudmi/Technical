/// <reference types="cypress" />

const endPoint = 'https://wines-api.herokuapp.com/api/'

const winesComments = {
    "id": "les-hauts-de-tour-prignac",
    "title": "Liudmila un bon les-hauts-de-tour-prignac bordeaux!",
    "content": "Liudmila: les-hauts-de-tour-prignac parfait après une heure en carafe !"
}

const winesComments2 = {
    "date":"2022-06-21T08:34:41.563Z",
    "title":"(Liudmila Testing 3) un bon bordeaux 2!",
    "content":"(Liudmila Testin 3): parfait après une heure en carafe !"
}

const winesLike = {
    "id": "cheval-noir",
    "like": true
}

const winesLike2 = {
    "id": "cheval-noir",
    "like": false
}

var idWine = 'cheval-noir'

describe('API TESTING OPEN WINE DATABASE', () =>{

    it('Get all comments', () => {

        const responseComments = {
            "count": 3
        }
        
        cy.log('Status 200 validation')
        cy.request('GET', endPoint+'comments')
          .its('status')
          .should('equal', 200)

        cy.log('Headers JSON validation')
        cy.request('GET', endPoint+'comments')
          .its('headers')
          .its('content-type')
          .should('include', 'application/json')
          .and('include', 'charset=utf-8')

        cy.log('Loading of initial items')
        cy.request('GET', endPoint+'comments')
          .its('body')
          .should('deep.equal', responseComments)        
    

    })

    it('Get all likes', () => {

        const responseLikes = {
            "count": 2
        }
        
        cy.log('Status 200 validation')
        cy.request('GET', endPoint+'likes/')
          .its('status')
          .should('equal', 200)
  
        cy.log('Headers JSON validation')
        cy.request('GET', endPoint+'likes/')
          .its('headers')
          .its('content-type')
          .should('include', 'application/json')
          .and('include', 'charset=utf-8')
  
        cy.log('Loading of initial items')
        cy.request('GET', endPoint+'likes/')
          .its('body')
          .should('deep.equal', responseLikes) 
        

    })

    it('Get all regions', () => {

        cy.log('Status 200 validation')
        cy.request('GET', endPoint+'regions')
          .its('status')
          .should('equal', 200)
  
        cy.log('Headers JSON validation')
        cy.request('GET', endPoint+'regions')
          .its('headers')
          .its('content-type')
          .should('include', 'application/json')
          .and('include', 'charset=utf-8')

        cy.log('Returns an array with 6 regions validation')
        cy.request('GET', endPoint+'regions')
          .its('body')
          .should('have.length', 6)        

    })

    it('Get wines by id', () => {
      
        cy.log('Status 200 validation')
        cy.request('GET', endPoint+'wines/'+idWine)
          .its('status')
          .should('equal', 200)        

    })

    it('Get wines by regions, example Bordeaux', () => {
      
        cy.request('GET', endPoint+'wines?region=Bordeaux')
          .its('status')
          .should('deep.equal', 200)

        cy.log('JSON schema validation')
        cy.request('GET', endPoint+'wines?region=Bordeaux')
          .its('body')
          .each(object => {
            expect(object).to.have.all.keys('id', 'name', 'type', 'appellation', 'grapes')
          })
        

    })
    
    it('Testing Post and Get comments in any wine on the database, example cheval-noir', () => {
        const addComments = winesComments => {
            cy.request('POST', endPoint+'wines/'+idWine+'/comments', winesComments)
              .its('status')
              .should('equal', 201) 
        }

        addComments(winesComments)
          
        cy.request('GET', endPoint+'wines/'+idWine+'/comments')
          .its('status')
          .should('equal', 200) 
        
        
        

    })

    it('Testing to click like in any wine on the database, example cheval-noir', () => {

        const responseLikeWine = {
            "like": true
          }

        const addLike = winesLike => {
            cy.request('POST', endPoint+'wines/'+idWine+'/like', winesLike)
              .its('status')
              .should('equal', 200)
        }

        addLike(winesLike)
        
        cy.request('GET', endPoint+'wines/'+idWine+'/like')
          .its('body')
          .should('deep.equal', responseLikeWine) 
        

    })

    it('Get wines image by id wine, example cheval-noir', () => {
        
           
        cy.log('Status 200 validation')
        cy.request('GET', endPoint+'wines/'+idWine+'/image')
          .its('status')
          .should('equal', 200)
    
        cy.log('Headers Image validation')
        cy.request('GET', endPoint+'wines/'+idWine+'/image')
          .its('headers')
          .its('content-type')
          .should('include', 'image/png')
        

    })





})


