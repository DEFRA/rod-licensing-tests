@browser
Feature: I want to buy a junior annual fishing

  Background: Buy an Junior fishing licence
    Given I select a 12MonthLicence licence

  Scenario: Scenario 1 - 12 Month Junior licence selecting 2 rod sea trout licence - Immediate start - Enter contact details
    Given I select a salmon fishing licence
    And  I select Now as a start time
    *   I am 7 days under my 17th birthday
    And I am on the junior page and I click continue
    And I am on the summary page and and I click continue
    And I enter "Junior" "Test" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I enter email as "howard@gmail.com" and number as ""
    And I do not want a newsletter
    And I am on the contact summary page and and I click continue
    And I select I agree and and I click continue
    Then I am on the order confirmation page and exit the service


  Scenario: Scenario 2 - 12 Month Junior licence selecting salmon licence - Immediate start - Enter contact
    Given I select a coarse fishing licence
    *   I select up to 2 trout rod licence
    And  I select Now as a start time
    *   I am 7 days under my 17th birthday
    And I am on the junior page and I click continue
    And I am on the summary page and and I click continue
    And I enter "Junior" "Test" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I enter email as "howard@gmail.com" and number as ""
    And I do not want a newsletter
    And I am on the contact summary page and and I click continue
    And I select I agree and and I click continue
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 3 - 12 Month Junior licence selecting salmon licence - Immediate start - NO contact
    Given I select a coarse fishing licence
    *   I select up to 2 trout rod licence
    And  I select Now as a start time
    *   I am 7 days under my 17th birthday
    And I am on the junior page and I click continue
    And I am on the summary page and and I click continue
    And I enter "Junior" "Test" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I do not have either of these
    And I am on the contact summary page and and I click continue
    And I select I agree and and I click continue
    Then I am on the order confirmation page and exit the service
