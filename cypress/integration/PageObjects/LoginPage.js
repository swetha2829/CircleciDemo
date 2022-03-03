/// <reference types="cypress" />


class LoginPage {

visit(){
    cy.visit("https://www.saucedemo.com/")
}

fillEmail(value) {
   const field = cy.get('[id=user-name]')
   field.clear()
    field.type(value)
    return this
   
}

fillPassword(value) {
    const field = cy.get('[id=password]')
    field.clear()
     field.type(value)
     return this
    
 }

 submit(){
     const button  = cy.get('[id=login-button]')
     button.click()
 }
}
 export default LoginPage