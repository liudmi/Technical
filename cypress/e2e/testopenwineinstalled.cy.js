/// <reference types="cypress" />

const appInstalled = 'http://localhost:3000/'
const collectionItem = 'a[class="collection-item "]'

let regionsName = ['Bordeaux', 'Bourgogne', 'Champagne', 'Languedoc', 'Loire', 'Normandie']

describe("Test suite open wine database installed", ()=>{

    beforeEach(() => {
      cy.visit(appInstalled)
      cy.get('h1.center-align').should('have.text', 'Open Wine Database')
      cy.get('div.center-align').should('have.text', 'You can read the Wines API documentation at https://wines-api.herokuapp.com and try it here')
            
    })

    it("Home page validation", ()=> {
        cy.get(':nth-child(3) > :nth-child(1) > .center-align').should('have.text', 'Regions')
        cy.get(collectionItem).should('have.length', 6)
        //cy.log("There are "+ regionsName + " elemnts")


    })

    it("End-to-end testing on the regions and button Home", ()=> {

        for (var i = 0; i < regionsName.length; i++) {
          cy.get(collectionItem).contains(regionsName[i])
          
          cy.log('CLICK ON THE '+ regionsName[i] +' REGION')      
          
          cy.get('.collection > :nth-child('+[i+1]+')').click({force: true})
          cy.get('.col > .center-align')
            .should('exist')
            .and('have.text', 'Wines')
          cy.get('button[class="btn waves-effect waves-light"]').should('have.length', 2)
          cy.get('button[class="btn waves-effect waves-light"]').eq(0)
            .should('exist')
            .and('have.text', 'fast_rewindBack')
          cy.get('button[class="btn waves-effect waves-light"]').eq(1)
            .should('exist')
            .and('have.text', 'homeHome')
          cy.get('button[class="btn waves-effect waves-light"]').eq(1).click({force: true})
          cy.log('So far validation '+ regionsName[i] +' region') 

        }

    })

    it("End-to-end testing on the Bordeaux wines", ()=> {

      cy.get(collectionItem).eq(0).click({force: true})
      cy.get('.col > .center-align')
        .should('exist')
        .and('have.text', 'Wines')
      cy.get('button[class="btn waves-effect waves-light"]').should('have.length', 2)
      cy.get('button[class="btn waves-effect waves-light"]').eq(0)
        .should('exist')
        .and('have.text', 'fast_rewindBack')
      cy.get('button[class="btn waves-effect waves-light"]').eq(1)
        .should('exist')
        .and('have.text', 'homeHome')
      
      cy.log('Beginning validation Bordeaux Château wine')
      cy.get(collectionItem).eq(0).should('exist')
      cy.get(collectionItem).eq(0).contains('Château Chevrol Bel Air')
      cy.get(collectionItem).eq(0).click({force: true})
      cy.get('.responsive-img').should('be.visible')
      cy.get('.m12 > .center-align').should('have.text', 'Wine details')
      cy.get('h3').contains('Château Chevrol Bel Air')
      cy.get('h5').should('have.text', 'Comments')
      cy.get('.comment').should('have.text', 'The 2009 vintage was perfect! Great moment with awesome friends!')
      cy.get('.card-action > :nth-child(1)')
        .should('exist')
      cy.get('.card-action > :nth-child(2)')
        .should('exist')
        .and('have.text', 'Comment comment')
      cy.get('button[class="btn waves-effect waves-light"]').eq(0).click({force: true})
      cy.log('End validation Bordeaux Château wine')

      cy.log('Beginning validation Bordeaux Clarendelle wine')
      cy.get(collectionItem).eq(1).contains('Clarendelle \"Inspiré par Haut Brion\"')
      cy.get(collectionItem).eq(1).click({force: true})
      cy.get('.responsive-img').should('be.visible')
      cy.get('.m12 > .center-align').should('have.text', 'Wine details')
      cy.get('h3').contains('Clarendelle \"Inspiré par Haut Brion\"')
      cy.get('.card-action > :nth-child(1)')
        .should('exist')
      cy.get('.card-action > :nth-child(2)')
        .should('exist')
        .and('have.text', 'Comment comment')
      cy.get('button[class="btn waves-effect waves-light"]').eq(0).click({force: true})
      cy.log('End validation Bordeaux Clarendelle wine')

      cy.log('Beginning validation Bordeaux Cheval Noir wine')
      cy.get(collectionItem).eq(2).contains('Cheval Noir')
      cy.get(collectionItem).eq(2).click({force: true})
      cy.get('.responsive-img').should('be.visible')
      cy.get('.m12 > .center-align').should('have.text', 'Wine details')
      cy.get('h3').contains('Cheval Noir')
      cy.get('.card-action > :nth-child(1)')
        .should('exist')
      cy.get('.card-action > :nth-child(2)')
        .should('exist')
        .and('have.text', 'Comment comment')
      cy.get('button[class="btn waves-effect waves-light"]').eq(0).click({force: true})
      cy.log('End validation Bordeaux Cheval Noir wine')

      cy.log('Beginning validation Bordeaux Les Hauts de Tour Prignac wine')
      cy.get(collectionItem).eq(3).contains('Les Hauts de Tour Prignac')
      cy.get(collectionItem).eq(3).click({force: true})
      cy.get('.responsive-img').should('be.visible')
      cy.get('.m12 > .center-align').should('have.text', 'Wine details')
      cy.get('h3').contains('Les Hauts de Tour Prignac')
      cy.get('.card-action > :nth-child(1)')
        .should('exist')
      cy.get('.card-action > :nth-child(2)')
        .should('exist')
        .and('have.text', 'Comment comment')
      cy.get('button[class="btn waves-effect waves-light"]').eq(0).click({force: true})
      cy.log('End validation Bordeaux Les Hauts de Tour Prignac wine')

      cy.log('REPEAT THESE STEPS FOR ALL THE WINES OF THE BOREAUX REGION AND THE FOLLOWING REGIONS')

             
    })

    it("End-to-end testing on the Bourgogne wines", ()=> {

      cy.get(collectionItem).eq(1).click({force: true})
      cy.get('.col > .center-align')
        .should('exist')
        .and('have.text', 'Wines')
      cy.get('button[class="btn waves-effect waves-light"]').should('have.length', 2)
      cy.get('button[class="btn waves-effect waves-light"]').eq(0)
        .should('exist')
        .and('have.text', 'fast_rewindBack')
      cy.get('button[class="btn waves-effect waves-light"]').eq(1)
        .should('exist')
        .and('have.text', 'homeHome')
      
      cy.log('Beginning validation Bourgogne wines')
      cy.get(collectionItem).eq(0).should('exist')
      cy.log('REPEAT THE SAME STEPS LIKE BORDEAUX WINES')

      cy.log('End validation Bourgogne wines')
      cy.get('button[class="btn waves-effect waves-light"]').eq(0).click({force: true})

             
    })

    it("End-to-end testing on the Champagne wines", ()=> {

      cy.get(collectionItem).eq(2).click({force: true})
      cy.get('.col > .center-align')
        .should('exist')
        .and('have.text', 'Wines')
      cy.get('button[class="btn waves-effect waves-light"]').should('have.length', 2)
      cy.get('button[class="btn waves-effect waves-light"]').eq(0)
        .should('exist')
        .and('have.text', 'fast_rewindBack')
      cy.get('button[class="btn waves-effect waves-light"]').eq(1)
        .should('exist')
        .and('have.text', 'homeHome')
      
      cy.log('Beginning validation Champagne wines')
      cy.get(collectionItem).eq(0).should('exist')
      cy.log('REPEAT THE SAME STEPS LIKE BORDEAUX WINES')
  
      cy.log('End validation Champagne wines')
      cy.get('button[class="btn waves-effect waves-light"]').eq(0).click({force: true})
             
    })

    it("End-to-end testing on the Languedoc wines", ()=> {

      cy.get(collectionItem).eq(3).click({force: true})
      cy.get('.col > .center-align')
        .should('exist')
        .and('have.text', 'Wines')
      cy.get('button[class="btn waves-effect waves-light"]').should('have.length', 2)
      cy.get('button[class="btn waves-effect waves-light"]').eq(0)
        .should('exist')
        .and('have.text', 'fast_rewindBack')
      cy.get('button[class="btn waves-effect waves-light"]').eq(1)
        .should('exist')
        .and('have.text', 'homeHome')
      
      cy.log('Beginning validation Languedoc wines')
      cy.get(collectionItem).eq(0).should('exist')
      cy.log('REPEAT THE SAME STEPS LIKE BORDEAUX WINES')
    
      cy.log('End validation Languedoc wines')

      cy.get('button[class="btn waves-effect waves-light"]').eq(0).click({force: true})

             
    })

    it("End-to-end testing on the Loire wines", ()=> {

      cy.get(collectionItem).eq(4).click({force: true})
      cy.get('.col > .center-align')
        .should('exist')
        .and('have.text', 'Wines')
      cy.get('button[class="btn waves-effect waves-light"]').should('have.length', 2)
      cy.get('button[class="btn waves-effect waves-light"]').eq(0)
        .should('exist')
        .and('have.text', 'fast_rewindBack')
      cy.get('button[class="btn waves-effect waves-light"]').eq(1)
        .should('exist')
        .and('have.text', 'homeHome')

      cy.log('Beginning validation Loire wines')
      cy.get(collectionItem).eq(0).should('exist')
      cy.log('REPEAT THE SAME STEPS LIKE BORDEAUX WINES')
      
      cy.log('End validation Loire wines')
        
      cy.get('button[class="btn waves-effect waves-light"]').eq(0).click({force: true})

             
    })

    it("End-to-end testing on the Normandie wines", ()=> {

      cy.get(collectionItem).eq(5).click({force: true})
      cy.get('.col > .center-align')
        .should('exist')
        .and('have.text', 'Wines')
      cy.get('button[class="btn waves-effect waves-light"]').should('have.length', 2)
      cy.get('button[class="btn waves-effect waves-light"]').eq(0)
        .should('exist')
        .and('have.text', 'fast_rewindBack')
      cy.get('button[class="btn waves-effect waves-light"]').eq(1)
        .should('exist')
        .and('have.text', 'homeHome')
      
      cy.log('Beginning validation Normandie wines')
      cy.get(collectionItem).eq(0).should('exist')
      cy.log('REPEAT THE SAME STEPS LIKE BORDEAUX WINES')
        
      cy.log('End validation Normandie wines')

      cy.get('button[class="btn waves-effect waves-light"]').eq(0).click({force: true})

    })

    it("Testing on the LIKE and UNLIKE", ()=> {

      cy.get(collectionItem).eq(5).click({force: true})
      cy.get(collectionItem).eq(0).click({force: true})
      cy.get('.card-action > :nth-child(1)').click({force: true})
        
      //falta comprobar like y unlike

    })

    it("Testing on the Comment", ()=> {

      const buttonsComment = 'a[class="modal-action waves-effect waves-green btn-flat "]'

      cy.get(collectionItem).eq(5).click({force: true})
      cy.get(collectionItem).eq(0).click({force: true})
      cy.get('.card-action > :nth-child(2)').click({force: true})
     
      cy.get('#inputComment').type('Liudmia2: It is one of the best white wines I have tasted. I recommend it')
      cy.get(buttonsComment).eq(1).click({force: true})

      //falta insertar comentario y comprobar que se ha insertado correctamente.

    })



})