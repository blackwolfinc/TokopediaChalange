
import React, { Component } from 'react'

//  Massage 
  // cy.url().should('incelude', 'url yang ada ingin di tuju ') 
    // cy.hash().should('incelude', 'url yang ada ingin di tuju ') 
    // cy.go('back') / cy.go(-1) untuk kembali 
    // cy.go('') /  untuk kehalman berikutnya 
    // .eq() index file yang akan di tuju 
    // .within(()=>{}) select satu nest elemen 
    // cy.reload() reload page


 class TCV01_Varible  {
    
    visit(){
        cy.visit('')
    }

    reload(){
        return  cy.reload()
    }

    getClick(get , contain ){
        return  cy.get(get).contains(contain , {timeout:10000}).should('be.visible').click();

    }


    pressKey(body){
        return (
            cy.get(body).trigger('keydown', { keyCode: 27}) 
        
        );
  

    }

    
    getClickEasy(get ){
        return  cy.get(get).scrollIntoView().click();

    }

    check(get){
        return    cy.contains(get, {timeout:10000}).should('be.visible')
    }
    checkWithScroll(get){
        return    cy.contains(get, {timeout:10000}).scrollIntoView().should('be.visible')
    }
    checkProtocol(get  ){
        return    cy.location('protocol').should('eq',get)
    }
    
    checkbox(get){
        return   cy.get(get).check()
    }
    wait(time){
        return  cy.wait(time)
    }

    input(element , inputan ){

        return cy.get(element).type(inputan)

    }
    inputClear (element){
        return cy.get(element).clear()
    }

    back (){
        return  cy.go('back')
    }

    hash(value){

       return  cy.url().should('include',value )
    }

    // apiServer(){
    //     cy.server();
    // }

    CheckApiHeader(metodh,url,as){
      cy.server();
        cy.route(metodh, url).as(as);

    }

    CheckApiResult(props){
  
        cy.wait("@"+props).then((xhr) => {
            console.log("Url Api Check", xhr.url ,"Status : " , xhr.status);
            return expect(xhr.status).to.equal(200)
          });

         
    }


}

export default TCV01_Varible