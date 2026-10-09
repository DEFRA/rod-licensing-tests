@browser
Feature: I want to buy a texted recurring 3-rod adult annual fishing

  Background: Buy an adult fishing licence
    Given  I am at the start of the purchase journey

  Scenario: Scenario 1 - Text Three Trout Full Adult
    And I am buying a licence for myself
    And I enter "Text Three Trout Full Adult" "Remindertest" as the name
    And I am 7 days over my 65th birthday
    And I enter "No" concession
    And I select Now as a start time
    Given I select a "coarse3" fishing licence
    Then I am on the licence summary page and I click continue
    And I am on the find address page and I click the manual address entry link
    And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
    And I select digital license
    And I enter email as "" and number as "<number>" for confirmation method
    And I am on the confirm contact details page and it asks me to confirm my phone number and I click correct
    And I click mobile radio button and click continue
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select recurring payment and click continue
    And I agree to set up a recurring payment and click continue
    And I enter payment details
    And I confirm payment details
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service
    Examples:
        | buildingNo | street         | city   | postcode | country | number                       |
        | 10         | Downing Street | London | SW1A 2AA | GB-ENG  | 07834000005 |

  Scenario: Scenario 2 - Text Three Trout Full Senior
    And I am buying a licence for myself
    And I enter "Text Three Trout Full Senior" "Remindertest" as the name
    And I am 7 days over my 65th birthday
    And I enter "No" concession
    And I select Now as a start time
    Given I select a "coarse3" fishing licence
    Then I am on the licence summary page and I click continue
    And I am on the find address page and I click the manual address entry link
    And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
    And I select digital license
    And I enter email as "" and number as "<number>" for confirmation method
    And I am on the confirm contact details page and it asks me to confirm my phone number and I click correct
    And I click mobile radio button and click continue
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select recurring payment and click continue
    And I agree to set up a recurring payment and click continue
    And I enter payment details
    And I confirm payment details
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service
    Examples:
        | buildingNo | street         | city   | postcode | country | number                       |
        | 10         | Downing Street | London | SW1A 2AA | GB-ENG  | 07834000006 |

  Scenario: Scenario 3 - Text Three Trout Disabled Adult
    And I am buying a licence for myself
    And I enter "Text Three Trout Disabled Adult" "Remindertest" as the name
    And I am 7 days over my 65th birthday
    And I select "BlueBadge" as the concession
    And I select Now as a start time
    Given I select a "coarse3" fishing licence
    Then I am on the licence summary page and I click continue
    And I am on the find address page and I click the manual address entry link
    And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
    And I select digital license
    And I enter email as "" and number as "<number>" for confirmation method
    And I am on the confirm contact details page and it asks me to confirm my phone number and I click correct
    And I click mobile radio button and click continue
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select recurring payment and click continue
    And I agree to set up a recurring payment and click continue
    And I enter payment details
    And I confirm payment details
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service
    Examples:
        | buildingNo | street         | city   | postcode | country | number                       |
        | 10         | Downing Street | London | SW1A 2AA | GB-ENG  | 07834000007 |

  Scenario: Scenario 4 - Text Three Trout Disabled Senior
    And I am buying a licence for myself
    And I enter "Text Three Trout Disabled Senior" "Remindertest" as the name
    And I am 7 days over my 65th birthday
    And I select "BlueBadge" as the concession
    And I select Now as a start time
    Given I select a "coarse3" fishing licence
    Then I am on the licence summary page and I click continue
    And I am on the find address page and I click the manual address entry link
    And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
    And I select digital license
    And I enter email as "" and number as "<number>" for confirmation method
    And I am on the confirm contact details page and it asks me to confirm my phone number and I click correct
    And I click mobile radio button and click continue
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select recurring payment and click continue
    And I agree to set up a recurring payment and click continue
    And I enter payment details
    And I confirm payment details
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service
    Examples:
        | buildingNo | street         | city   | postcode | country | number                       |
        | 10         | Downing Street | London | SW1A 2AA | GB-ENG  | 07834000008 |
