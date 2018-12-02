Feature: Hello World

  Scenario: Check page title
    Given I am on "/"
    Then I should see "Greeting App"

  Scenario: Check greeting correct display
    Given I am on "/"
    When I fill in "user-name" with "Maximo"
    And I press "Start"
    Then I should see "Hello Maximo"
