import TCV01_Varible from '../Class/TCV01_Varible'

describe('Test Login ', () => {

    const test = new TCV01_Varible()

    // cy.url().should('incelude', 'url yang ada ingin di tuju ') 
    // cy.hash().should('incelude', 'url yang ada ingin di tuju ') 
    // cy.go('back') / cy.go(-1) untuk kembali 
    // cy.go('') /  untuk kehalman berikutnya 
    // .eq() index file yang akan di tuju 
    // .within(()=>{}) select satu nest elemen 
    // cy.reload() reload page

    it('Sign in  fail no email  ', () => {
        test.visit()
        test.checkProtocol('https:')
        test.hash('/Sign-in')
        test.input('input[id="password"]' ,"Abc123456!" )
        test.getClick('button' ,"SIGN IN" )
        test.check("Please enter your email address.")
        test.reload()

    });

    it('Sign in  fail no password  ', () => {
        test.input('input[id="email"] ',"bagas@logisfleet.com" )
        test.getClick('button' ,"SIGN IN" )
        test.check("Please enter your password.")
        test.reload()
    });

    it('Sign in fail Because forgot password and do action forgot pass ', () => {
        
       test.input('input[id="email"] ',"bagas@logisfleet.com" )
       test.input('input[id="password"]' ,"ssss!" )
       test.getClick('button' ,"SIGN IN" )
       test.check("Password is incorrect.")
       test.getClick('.forgot-password' ,"Forgot password?" )
       test.check("Reset your password")
       test.check("Your E-mail")
       test.hash('/Reset-password')
       test.input('input[id="email"] ',"bagas@logisfleet.com" )
       test.getClick('button' ,"Reset Password" )
       test.check("Password reset link has been sent to your email!")
       test.back()
     

    });

    // it('After forgot pass try to sign up ', () => {
    //     test.getClick('a' ," Sign Up" )
    //     test.check("Create your WastePorter account")
    //     test.hash('/sign-up')
    //     test.input('#Sign-Up-First-Name',"tes" )
    //     test.input('#Sign-Up-Last-Name',"tes" )
    //     test.input('#email-form > :nth-child(5)',"tes" )
    //     test.input('.messagebox', "tes" )
    //     test.getClick('.sign-up-button', "Sign Up" )
    //     test.check("Thank you! Your submission has been received!")
    //     test.back()
    //     test.reload()
  
    // });

    it('Sign in   ', () => {
 
        test.checkProtocol('https:')
        // test.input('input[id="email"] ',"bagas@logisfleet.com" )
        test.input('input[id="password"]' ,"Abc123456!!" )
        test.getClick('button' ,"SIGN IN" )
        test.check("DASHBOARD")
        test.hash('/Dashboard')
    

    });

    it('LogOut', () => {
        test.check("DASHBOARD")
        test.getClick('.MuiButton-label > .material-icons' ,"arrow_drop_down" )
        test.getClick('.MuiList-root > [tabindex="-1"]' ,"Logout" )
        test.check("Log in to your account")
        test.check("Log in to your account")
    });
  

});

