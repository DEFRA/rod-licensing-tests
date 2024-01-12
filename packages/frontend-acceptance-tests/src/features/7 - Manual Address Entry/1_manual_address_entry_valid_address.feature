@browser
Feature: I want enter my address manually when buying a fishing licence

  Background: Buy an adult fishing licence
    Given  I am at the start of the purchase journey
    And I am buying a licence for myself

    Scenario Outline: Scenario 1 - English Address
      And I enter "English" "Manual Address" as the name
      *   I am 7 days over my 17th birthday
      *   I enter "No" concession
      And  I select Now as a start time
      And I select a "coarse2" fishing licence
      Then I select a 8dayLicence licence
      And I am on the licence summary page and I click continue
      And I am on the find address page and I click the manual address entry link
      And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
      And I enter email as "<email>" and number as ""
      And I do not want a newsletter
      And I am on the contact summary page and I click continue
      And I agree to the terms and conditions and click continue
      And I enter payment details
      And I confirm payment details
      Then I am on the order confirmation page and exit the service
      Examples:
        | buildingNo | street         | city   | postcode | country | email
        | 10         | Downing Street | London | SW1A 2AA | GB-ENG  | email@gmail.com

    Scenario Outline: Scenario 2 - International Address
      And I enter "International" "Manual Address" as the name
      *   I am 7 days over my 17th birthday
      *   I enter "No" concession
      And  I select Now as a start time
      And I select a "coarse2" fishing licence
      Then I select a 8dayLicence licence
      And I am on the licence summary page and I click continue
      And I am on the find address page and I click the manual address entry link
      And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
      And I enter email as "<email>" and number as ""
      And I do not want a newsletter
      And I am on the contact summary page and I click continue
      And I agree to the terms and conditions and click continue
      And I enter payment details
      And I confirm payment details
      Then I am on the order confirmation page and exit the service
      Examples:
        | buildingNo | street         | city   | postcode | country | email
        | 22         | Buntspechtweg  | Bonn   | 53123    | DE      | email@gmail.com

