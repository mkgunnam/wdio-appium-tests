Feature: Validate swaglab app login

  Scenario Outline: As a user, I can log into the app

    
    Given I enter <username> and <password>
    When I click on login button
    Then I should see the <text> label
         
         

    Examples:
      | username        | password        | text     |
      | standard_user   | secret_sauce    | PRODUCTS |
      
      
