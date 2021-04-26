@browser
Feature: I want enter my address manually when buying a fishing licence

  Background: Buy an adult fishing licence
    Given  I am at the start of the purchase journey
    *   I am 7 days over my 17th birthday
    And  I select Now as a start time
    *   I enter "No" concession
    And I select a "coarse2" fishing licence
    Then I select a 8dayLicence licence
    And I am on the licence summary page and I click continue

    Scenario Outline: Scenario 1 - English Address
      And I enter "English" "Manual Address" as the name
      And I am on the find address page and I click the manual address entry link
      And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
      And I do not have either of these
      And I do not want a newsletter
      And I am on the contact summary page and I click continue
      And I agree to the terms and conditions and click continue
      And I enter payment details
      And I confirm payment details
      Then I am on the order confirmation page and exit the service
      Examples:
        | buildingNo | street         | city   | postcode | country |
        | 10         | Downing Street | London | SW1A 2AA | GB-ENG  |

    Scenario Outline: Scenario 2 - International Address
      And I enter "International" "Manual Address" as the name
      And I am on the find address page and I click the manual address entry link
      And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
      And I do not have either of these
      And I do not want a newsletter
      And I am on the contact summary page and I click continue
      And I agree to the terms and conditions and click continue
      And I enter payment details
      And I confirm payment details
      Then I am on the order confirmation page and exit the service
      Examples:
        | buildingNo | street         | city   | postcode | country |
        | 22         | Buntspechtweg  | Bonn   | 53123    | DE      |

