@browser
Feature: I want to buy an emailed recurring 2-rod adult annual fishing

  Background: Buy an adult fishing licence
    Given  I am at the start of the purchase journey

  Scenario: Scenario 1 - Email Two Trout Full Adult
    And I am buying a licence for myself
    And I enter "Email Two Trout Full Adult" "Remindertest" as the name
    And I am 7 days over my 65th birthday
    And I enter "No" concession
    And I select Now as a start time
    Given I select a "coarse2" fishing licence
    And I select a 12MonthLicence licence
    Then I am on the licence summary page and I click continue
    And I am on the find address page and I click the manual address entry link
    And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
    And I select digital license
    And I enter email as "<email>" and number as "" for confirmation method
    And I am on the confirm contact details page and it asks me to confirm my email address and I click correct
    And I click email radio button and click continue
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
        | buildingNo | street         | city   | postcode | country | email                       |
        | 10         | Downing Street | London | SW1A 2AA | GB-ENG  | 2-trout-full-65@example.com |

  Scenario: Scenario 2 - Email Two Trout Full Senior
    And I am buying a licence for myself
    And I enter "Email Two Trout Full Senior" "Remindertest" as the name
    And I am 7 days over my 65th birthday
    And I enter "No" concession
    And I select Now as a start time
    Given I select a "coarse2" fishing licence
    And I select a 12MonthLicence licence
    Then I am on the licence summary page and I click continue
    And I am on the find address page and I click the manual address entry link
    And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
    And I select digital license
    And I enter email as "<email>" and number as "" for confirmation method
    And I am on the confirm contact details page and it asks me to confirm my email address and I click correct
    And I click email radio button and click continue
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
        | buildingNo | street         | city   | postcode | country | email                       |
        | 10         | Downing Street | London | SW1A 2AA | GB-ENG  | 2-trout-full-66@example.com |

  Scenario: Scenario 3 - Email Two Trout Disabled Adult
    And I am buying a licence for myself
    And I enter "Email Two Trout Disabled Adult" "Remindertest" as the name
    And I am 7 days over my 65th birthday
    And I select "BlueBadge" as the concession
    And I select Now as a start time
    Given I select a "coarse2" fishing licence
    And I select a 12MonthLicence licence
    Then I am on the licence summary page and I click continue
    And I am on the find address page and I click the manual address entry link
    And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
    And I select digital license
    And I enter email as "<email>" and number as "" for confirmation method
    And I am on the confirm contact details page and it asks me to confirm my email address and I click correct
    And I click email radio button and click continue
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
        | buildingNo | street         | city   | postcode | country | email                           |
        | 10         | Downing Street | London | SW1A 2AA | GB-ENG  | 2-trout-disabled-65@example.com |

  Scenario: Scenario 4 - Email Two Trout Disabled Senior
    And I am buying a licence for myself
    And I enter "Email Two Trout Disabled Senior" "Remindertest" as the name
    And I am 7 days over my 65th birthday
    And I select "BlueBadge" as the concession
    And I select Now as a start time
    Given I select a "coarse2" fishing licence
    And I select a 12MonthLicence licence
    Then I am on the licence summary page and I click continue
    And I am on the find address page and I click the manual address entry link
    And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
    And I select digital license
    And I enter email as "<email>" and number as "" for confirmation method
    And I am on the confirm contact details page and it asks me to confirm my email address and I click correct
    And I click email radio button and click continue
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
        | buildingNo | street         | city   | postcode | country | email                           |
        | 10         | Downing Street | London | SW1A 2AA | GB-ENG  | 2-trout-disabled-66@example.com |
