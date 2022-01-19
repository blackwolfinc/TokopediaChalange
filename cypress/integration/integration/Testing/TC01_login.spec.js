import TCV01_Varible from '../Class/TCV01_Varible'

describe('Test All ', () => {

    const test = new TCV01_Varible()

    // cy.url().should('incelude', 'url yang ada ingin di tuju ') 
    // cy.hash().should('incelude', 'url yang ada ingin di tuju ') 
    // cy.go('back') / cy.go(-1) untuk kembali 
    // cy.go('') /  untuk kehalman berikutnya 
    // .eq() index file yang akan di tuju 
    // .within(()=>{}) select satu nest elemen 
    // cy.reload() reload page

    it('Open To Pokemon List  ', () => {
        test.visit()
        test.checkProtocol('https:')
        test.hash('/')
        test.getClickEasy('.css-1u8uju6' )
    

    });

    it('Check On Pokemon List  ', () => {
        test.check("Pokemon List")
        test.hash('/PokemonList')
    });


    
    it('Chose Pokemon  ', () => {
        test.getClickEasy(' :nth-child(1) > .css-1a2ojl' )
      
    });
  
    it('Check Pokemon ', () => {
        test.hash('/PokemonDetail?name=ivysaur')
        test.check("ivysaur")
        test.getClickEasy(".MuiAccordionSummary-content")
    
    });
    
    it('Check Pokemon Move', () => {
        test.getClickEasy("#simple-tab-1 > .MuiTab-wrapper")
        test.check("ivysaur")
     
    
    });

    it('Check Pokemon Ability', () => {
        test.getClickEasy("#simple-tab-0 > .MuiTab-wrapper")
        test.check("ivysaur")
        test.getClickEasy(".MuiAccordionSummary-content")
    
    });
 
  

});

