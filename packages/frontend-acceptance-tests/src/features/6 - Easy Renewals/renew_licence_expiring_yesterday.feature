Feature: I want to renew my fishing licence

  Scenario: Renew my licence that expired yesterday
    Given I have a licence that expired yesterday
    And I am at the start of the renewal journey
    And I complete the easy renewals login
    Then I am on the licence summary page and I click continue
