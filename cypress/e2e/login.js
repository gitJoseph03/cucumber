import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { Home } from '../support/pages/Home'
import { Login } from '../support/pages/Login'

const home = new Home()
const login = new Login()

Given('User is in the home page', () => {
  cy.visit('/')
})
When('User navigate to the login page', () => {
  home.clickSignin()
})
Then('User enters an invalid username {string}', (username) => {
  login.inputUsername(username)
})
Then('User enters a valid password {string}', (password) => {
  login.inputPassword(password)
})
Then('User clicks the login button', () => {
  login.clickSubmit()
})
Then('Error message is displayed', () => {
  login.validateLoginResult()
})
