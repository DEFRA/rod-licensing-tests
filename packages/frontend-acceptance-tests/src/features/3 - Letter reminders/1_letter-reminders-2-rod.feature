@browser
Feature: I want to buy a posted recurring 2-rod adult annual fishing

  Background: Buy an adult fishing licence
    Given  I am at the start of the purchase journey

  Scenario: Scenario 1 - Letter Two Trout Full Adult
    And I am buying a licence for myself
    And I enter "Letter Two Trout Full Adult" "Remindertest" as the name
    And I am 7 days over my 65th birthday
    And I enter "No" concession
    And I select Now as a start time
    Given I select a "coarse2" fishing licence
    And I select a 12MonthLicence licence
    Then I am on the licence summary page and I click continue
    And I am on the find address page and I click the manual address entry link
    And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
    And I select paper license
    And I select make a note of the license
    And I do not have either of these
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select recurring payment and click continue
    And I agree to set up a recurring payment and click continue
    And I enter payment details and email
    And I confirm payment details
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service
    Examples:
        | buildingNo | street  | city      | postcode | country |
        | 2 Trout    | Full 65 | Testville | TE1 1ST  | GB-ENG  |

  Scenario: Scenario 2 - Letter Two Trout Full Senior
    And I am buying a licence for myself
    And I enter "Letter Two Trout Full Senior" "Remindertest" as the name
    And I am 7 days over my 65th birthday
    And I enter "No" concession
    And I select Now as a start time
    Given I select a "coarse2" fishing licence
    And I select a 12MonthLicence licence
    Then I am on the licence summary page and I click continue
    And I am on the find address page and I click the manual address entry link
    And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
    And I select paper license
    And I select make a note of the license
    And I do not have either of these
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select recurring payment and click continue
    And I agree to set up a recurring payment and click continue
    And I enter payment details and email
    And I confirm payment details
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service
    Examples:
        | buildingNo | street  | city      | postcode | country |
        | 2 Trout    | Full 65 | Testville | TE1 1ST  | GB-ENG  |

  Scenario: Scenario 3 - Letter Two Trout Disabled Adult
    And I am buying a licence for myself
    And I enter "Letter Two Trout Disabled Adult" "Remindertest" as the name
    And I am 7 days over my 65th birthday
    And I select "BlueBadge" as the concession
    And I select Now as a start time
    Given I select a "coarse2" fishing licence
    And I select a 12MonthLicence licence
    Then I am on the licence summary page and I click continue
    And I am on the find address page and I click the manual address entry link
    And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
    And I select paper license
    And I select make a note of the license
    And I do not have either of these
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select recurring payment and click continue
    And I agree to set up a recurring payment and click continue
    And I enter payment details and email
    And I confirm payment details
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service
    Examples:
        | buildingNo | street      | city      | postcode | country |
        | 2 Trout    | Disabled 65 | Testville | TE1 1ST  | GB-ENG  |

  Scenario: Scenario 4 - Letter Two Trout Disabled Senior
    And I am buying a licence for myself
    And I enter "Letter Two Trout Disabled Senior" "Remindertest" as the name
    And I am 7 days over my 65th birthday
    And I select "BlueBadge" as the concession
    And I select Now as a start time
    Given I select a "coarse2" fishing licence
    And I select a 12MonthLicence licence
    Then I am on the licence summary page and I click continue
    And I am on the find address page and I click the manual address entry link
    And I enter "<buildingNo>" "<street>" "<city>" "<postcode>" "<country>" as the address
    And I select paper license
    And I select make a note of the license
    And I do not have either of these
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select recurring payment and click continue
    And I agree to set up a recurring payment and click continue
    And I enter payment details and email
    And I confirm payment details
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service
    Examples:
        | buildingNo | street      | city      | postcode | country |
        | 2 Trout    | Disabled 66 | Testville | TE1 1ST  | GB-ENG  |
