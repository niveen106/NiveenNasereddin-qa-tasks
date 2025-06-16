/// <reference types="cypress" />
describe('Register page scenarios', () => {
  it('check header elements', () => {
    cy.visit("/register")
    cy.contains('a','conduit') // get selector for the logo
    cy.get("a.nav-link").first() // get selector for the home link
    cy.get("a.nav-link").contains('Sign up') // get selector for the sign up link
  })

  it('check register form elements', () => {
    cy.visit("/register")
    cy.contains('h1', 'Sign up') // get selector for the header in the register form
    cy.contains('Have an account') // get selector for the text "Have an account"
    cy.get("input[placeholder='Username']") // get selector for the username input
    cy.get("input[placeholder='Email']") // get selector for the email input
    cy.get("input[placeholder='Password']") // get selector for the password input
    cy.get("button[type='submit']") // get selector for the submit button
  });

  it('check footer elements', () => {
      cy.visit("/register")
      cy.get("a.logo-font") // get selector for the footer logo
      cy.get("span.attribution") // get selector for the footer text
      cy.get('a[href="https://thinkster.io"]') // get selector for the footer link
     });
})