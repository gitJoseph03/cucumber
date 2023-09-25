export class Login {
  inputUsername = (username) => {
    cy.get('#username').should('be.visible').type(username) // Input username
  }
  inputPassword = (password) => {
    cy.get('#password').should('be.visible').type(password) // Input password
  }
  clickSubmit = () => {
    cy.get('button').contains('Newspapers.com').should('be.visible').click() // Click login button
    // Wait for API response from login
  }
  validateLoginResult = () => {
    cy.intercept('/api/userauth/public/authenticate').as('res') // Get API response from login
    cy.wait('@res')
      .its('response.statusCode') // Check the status code
      .then((res) => {
        if (res !== 201) {
          cy.get('div')
            .contains('There is a problem with your email/password.')
            .should('be.visible') // Assert if login failed
        } else {
          cy.get('#globalMemNav').should('exist') // Assert if login success
        }
      })
  }
}
