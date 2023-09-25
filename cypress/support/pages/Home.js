export class Home {
  clickSignin = () => {
    cy.get('#signinlink').should('be.visible').click() // Click sign in button
    cy.contains('Sign in to Newspapers.com').should('be.visible') // Assert if the login modal appears
  }
}
