/// <reference types="cypress" />

const appDemo = 'https://react-bootcamp.github.io/react-wines-101/'
const collectionItem = 'a[class="collection-item "]'

let regionsName = ['Bordeaux', 'Bourgogne', 'Champagne', 'Languedoc', 'Loire', 'Normandie']

describe("Test suite open wine database demo", ()=>{

    beforeEach(() => {
      cy.visit(appDemo)
      cy.get('h1.center-align').contains('Open Wine Database')
      cy.get('div.center-align').should('have.text', 'You can read the Wines API documentation at https://wines-api.herokuapp.com and try it here')
      cy.get(':nth-child(3) > :nth-child(1) > .center-align').should('have.text', 'Regions')
      cy.get(':nth-child(2) > .center-align').should('have.text', 'Wines')
      cy.get('.m12 > .center-align').should('have.text', 'Wine details')
        
    })

    it("Home page validation", ()=> {
        cy.get('a[class="collection-item "]').should('have.length', 29)
        cy.get(':nth-child(1) > .collection > :nth-child(1)').should('have.class', 'active')

        cy.get(':nth-child(2) > .collection > :nth-child(1)').should('have.class', 'active')
        cy.get('.responsive-img').should('be.visible')
        cy.get('h3').should('exist')

    })

    it("End-to-end testing on Regions", ()=> {
      for (var i = 0; i < regionsName.length; i++) {
        cy.get(':nth-child(1) > .collection > :nth-child('+[i+1]+')').contains(regionsName[i])
        
        cy.log('CLICK ON THE '+ regionsName[i] +' REGION')    
                
        cy.get('.collection > :nth-child('+[i+1]+')').click({multiple: true})
        cy.get('.col > .center-align')
          .should('exist')
          .and('have.text', 'RegionsWinesWine details')             
        cy.log('End validation '+ regionsName[i] +' region') 

      }

    })

      it("End-to-end testing on the Bordeaux wines", ()=> {

        cy.get(collectionItem).eq(0).click({force: true})
                       
        cy.log('Beginning validation Bordeaux wines')
        cy.get(collectionItem).eq(0).should('exist')
  
        cy.log('End validation Bordeaux wines')
  
               
      })

      it("End-to-end testing on the Bourgogne wines", ()=> {

        cy.get(collectionItem).eq(1).click({force: true})
        cy.log('Beginning validation Bourgogne wines')
        cy.get(collectionItem).eq(0).should('exist')
  
        cy.log('End validation Bourgogne wines')
  
               
      })
  
      it("End-to-end testing on the Champagne wines", ()=> {
  
        cy.get(collectionItem).eq(2).click({force: true})
        cy.log('Beginning validation Champagne wines')
        cy.get(collectionItem).eq(0).should('exist')
  
        cy.log('End validation Champagne wines')
               
      })
  
      it("End-to-end testing on the Languedoc wines", ()=> {
  
        cy.get(collectionItem).eq(3).click({force: true})
        cy.log('Beginning validation Languedoc wines')
        cy.get(collectionItem).eq(0).should('exist')
      
        cy.log('End validation Languedoc wines')  
               
      })
  
      it("End-to-end testing on the Loire wines", ()=> {
  
        cy.get(collectionItem).eq(4).click({force: true})
        cy.log('Beginning validation Loire wines')
        cy.get(collectionItem).eq(0).should('exist')
  
        cy.log('End validation Loire wines')
          
               
      })
  
      it("End-to-end testing on the Normandie wines", ()=> {
  
        cy.get(collectionItem).eq(5).click({force: true})
        cy.log('Beginning validation Normandie wines')
        cy.get(collectionItem).eq(0).should('exist')
          
        cy.log('End validation Normandie wines')
    
      })
  
      it("Testing on the LIKE and UNLIKE", ()=> {
  
        cy.get(collectionItem).eq(5).click({force: true})
        cy.get(collectionItem).eq(0).click({force: true})
        cy.get('.card-action > :nth-child(1)').click({force: true})
          
        //falta comprobar like y unlike
  
      })
  
      it("Testing on the Comment", ()=> {
  
        cy.get(collectionItem).eq(5).click({force: true})
        cy.get(collectionItem).eq(0).click({force: true})
        cy.get('.card-action > :nth-child(2)').click({force: true})
        cy.get('.modal').should('exist')
        cy.get('h4').should('have.text', 'Tell us something about this wine')
        cy.get('button[class="btn waves-effect waves-light"]').should('have.length', 2)
        cy.get('button[class="btn waves-effect waves-light"]').eq(0)
          .should('exist')
          .and('have.text', 'Cancel')
        cy.get('button[class="btn waves-effect waves-light"]').eq(1)
          .should('exist')
          .and('have.text', 'Submit')

          
        //falta insertar comentario y comprobar que se ha insertado correctamente.
  
      })
  
})