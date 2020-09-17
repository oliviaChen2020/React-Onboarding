// cypress test code here
describe("my app" , function (){
    beforeEach(function(){
        cy.visit("http://localhost:3000")
    })


    it ("sanity check to make sure tests work", ()=> {
        expect(1+2).to.equal(3)
    })


    const firstNameInput =() => cy.get('input[name=first_name]')
    const lastNameInput =() => cy.get('input[name=last_name]')
    const emailInput =() => cy.get('input[name=email]')
    const passwordInput =() => cy.get('input[name=password]')
    const termsCheckBox =() => cy.get('input[name=termsofservice]')
    const submitButton =() => cy.get('button')


    it ("can type in the name", () => {
        firstNameInput()
            .should('have.value', '')
            .type ('Olivia')
            // check if the text inputted contains the name provided
            .should('have.value', 'Olivia')

        lastNameInput()
            .should('have.value', '')
            .type ('Chen')
            // check if the text inputted contains the name provided
            .should('have.value', 'Chen')
        
    })
    it ("can type in the email", () => {
        emailInput()
            .should('have.value', '')
            .type ('oliviachen@gmail.com')
            .should('have.value', 'oliviachen@gmail.com')   
    })
    it ("can type in the password", () => {
        passwordInput()
            .should('have.value', '')
            .type ('123456')
            .should('have.value', '123456')     
    })
    it ("a user can check the terms of service", () => {
        termsCheckBox()
            .check()
            .should('be.checked')
                 
    })

    it("Check for form validation if an input is left empty", ()=>{
        firstNameInput()
            .type ('Olivia')
            .should('have.value', 'Olivia' )

        lastNameInput()
            .type ('Chen')
            .should('have.value', 'Chen')

        emailInput()
            .type ('oliviachen')
        cy.contains("Must be a valid email address.").should('exist')

        passwordInput()
            .should('have.value', '')

        termsCheckBox()
            .check()
            .should('be.checked')      
    } )

    it ("a user can submit the form data after everything is filled out", () => {
        submitButton().should('be.disabled')
        firstNameInput().type('Olivia')
        submitButton().should('be.disabled')
        lastNameInput().type('Chen')
        submitButton().should('be.disabled')
        emailInput().type ('oliviachen@gmail.com')
        submitButton().should('be.disabled')
        passwordInput().type ('123456')
        submitButton().should('be.disabled')
        termsCheckBox().check().should('be.checked')   
        submitButton().should('not.be.disabled')
        
               
    })
    

})