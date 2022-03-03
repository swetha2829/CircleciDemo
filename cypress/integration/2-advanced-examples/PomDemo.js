/// <reference types = "cypress"/>
import LoginPage from '../PageObjects/LoginPage'

describe(' Test Suite ',function() {
    const lp=new LoginPage()
    it('Valid Login TestCase ',function(){

       
       lp.visit()
       lp.fillEmail('standard_user')
       lp.fillPassword('secret_sauce')
       lp.submit()
       cy.log(cy.title())
    })

    it('InValid Login Testcase',function(){
        lp.visit()
        lp.fillEmail('locked_out_user')
        lp.fillPassword('secret_sauce')
        lp.submit()
        const m =cy.get('[data-test=error]')
        cy.log(m)

    })

    it('Order Product Testcase',function(){
         
       lp.visit()
       lp.fillEmail('standard_user')
       lp.fillPassword('secret_sauce')
       lp.submit()
       

    })

})