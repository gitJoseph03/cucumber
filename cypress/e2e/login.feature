Feature: Login
    Scenario: Login with invalid username
        Given User is in the home page
        When User navigate to the login page
        Then User enters an invalid username "invalid username"
        Then User enters a valid password "Test123!"
        Then User clicks the login button
        Then Error message is displayed

    Scenario: Login with invalid password
        Given User is in the home page
        When User navigate to the login page
        Then User enters an invalid username "lourdes100@test.com"
        Then User enters a valid password "invalidPassword"
        Then User clicks the login button
        Then Error message is displayed

    Scenario: Login with valid credentials
        Given User is in the home page
        When User navigate to the login page
        Then User enters an invalid username "lourdes100@test.com"
        Then User enters a valid password "Test123!"
        Then User clicks the login button
        Then Error message is displayed
