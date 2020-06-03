@browser
Feature: I want to buy an adult annual fishing

  Background: Buy an adult fishing licence
    Given I select a 12MonthLicence licence

  Scenario: Scenario 1 - 12 Month Adult licence selecting 2 rod sea trout licence - Immediate start - Enter contact details
    Given I select a coarse fishing licence
    *   I select up to 2 trout rod licence
    And I select Now as a start time
    *   I am 7 days over my 65th birthday
    And I am on the licence summary page and I click continue
    And I enter "Adult" "Test" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I enter email as "howard@gmail.com" and number as "07885066406"
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I select I agree and I click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service


  Scenario: Scenario 2 - 12 Month Adult licence selecting salmon licence - Immediate start - Enter contact
    Given I select a salmon fishing licence
    And  I select Now as a start time
    *   I am 7 days over my 65th birthday
    And I am on the licence summary page and I click continue
    And I enter "Adult" "Test" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I enter email as "howard@gmail.com" and number as "07885066406"
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I select I agree and I click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service



  Scenario: Scenario 3 - 12 Month Adult licence selecting salmon licence - Immediate start - NO contact
    Given I select a salmon fishing licence
    And  I select Now as a start time
    *   I am 7 days over my 65th birthday
    And I am on the licence summary page and I click continue
    And I enter "Adult" "Test" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I do not have either of these
    And I am on the contact summary page and I click continue
    And I select I agree and I click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service
