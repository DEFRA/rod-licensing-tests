@browser
Feature: Manual Address entry - validation errors

  Background: Buy an adult fishing licence and enter address manually
    Given  I am at the start of the purchase journey
    *   I am 7 days over my 17th birthday
    And  I select Now as a start time
    *   I enter "No" concession
    And I select a "coarse2" fishing licence
    Then I select a 8dayLicence licence
    And I am on the licence summary page and I click continue
    And I enter "Manual" "Address Validation" as the name
    And I am on the find address page and I click the manual address entry link

    Scenario: Scenario 1 - Manual Address required fields
      And I am on the address entry page and I click continue
      Then I expect the address entry page to show the following errors
        | ErrorMessage                       |
        | Enter your building number or name |
        | Enter your town or city            |
        | Enter your postcode                |

    Scenario: Scenario 2 - Country Dropdown List
      Then I expect that I can see the following countries in the country dropdown
        | country |
        | GB-ENG  |
        | GB-WLS  |
        | GB-SCT  |
        | GB-NIR  |

    Scenario: Scenario 3 - Country Dropdown List
      Then I expect that I cannot see the following countries in the country dropdown
        | country |
        | GB      |
