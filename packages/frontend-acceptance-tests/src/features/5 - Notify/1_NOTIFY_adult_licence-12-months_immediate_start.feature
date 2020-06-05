@browser
Feature: I want to buy an adult annual fishing

  Background: Buy an adult fishing licence
    Given I select a 12MonthLicence licence
    And I enter "Adult" "Test" as the name
    *   I am 7 days over my 17th birthday
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address

    Scenario: Scenario 1 - 12 Month Adult licence selecting 2 rod sea trout licence - Immediate start - Enter contact email
    Given I select Now as a start time
    *   I select no for the benefits
    *   I select no for the blue badge
    *   I select a coarse fishing licence
    *   I select up to 2 trout rod licence
    And I enter email as "howard@gmail.com" and number as "07885066406"
    And I receive a newsletter and enter ""
    And I am on the summary page and and I click continue
    And I select I agree and and I click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service
    And I send an API request to check notify status

  Scenario: Scenario 2 - 12 Month Adult licence selecting 2 rod sea trout licence - Immediate start - Enter contact number
    Given I select Now as a start time
    *   I select no for the benefits
    *   I select no for the blue badge
    *   I select a coarse fishing licence
    *   I select up to 2 trout rod licence
    And I enter email as "" and number as "07885066406"
    And I receive a newsletter and enter "howard@gmail.com"
    And I am on the summary page and and I click continue
    And I select I agree and and I click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service
    And I send an API request to check notify status

