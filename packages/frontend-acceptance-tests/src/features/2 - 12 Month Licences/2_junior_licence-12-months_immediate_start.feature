@browser
Feature: I want to buy a junior annual fishing

  Background: Buy a Junior fishing licence
    Given  I am at the start of the purchase journey
    *   I am 7 days under my 17th birthday
    And  I select Now as a start time
    *   I enter "No" concession

  Scenario: Scenario 1 - 12 Month Junior licence selecting salmon licence - Immediate start - Enter contact details email
    # Licence details journey starts
    Given I select a "salmon" fishing licence
    Then I am on the licence summary page and I click continue
  # Contact Journey starts
    And I enter "Junior" "Salmon" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I enter email as "email@gmail.com" and number as ""
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
  #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 3 - 12 Month Junior licence selecting coarse 2 rod licence - Immediate start - NO contact
# Licence details journey starts
    Given I select a "coarse2" fishing licence
    Then I am on the licence summary page and I click continue
  # Contact Journey starts
    And I enter "Junior" "CoarseTwo" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I enter email as "email@gmail.com" and number as ""
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 3 - 12 Month Junior licence selecting salmon licence - Immediate start - NO contact
 # Licence details journey starts
    Given I select a "coarse3" fishing licence
    Then I am on the licence summary page and I click continue
  # Contact Journey starts
    And I enter "Junior" "CoarseThree" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I do not have either of these
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service

