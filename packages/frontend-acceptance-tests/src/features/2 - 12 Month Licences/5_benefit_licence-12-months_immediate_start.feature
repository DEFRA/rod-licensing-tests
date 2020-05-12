@browser
Feature: I want to buy a annual fishing

  Background: Buy an adult fishing licence
    Given I select a 12MonthLicence licence

  Scenario: Scenario 1 - 12 Month Adult licence selecting 2 rod sea trout licence - Immediate start - Enter contact details
    Given I select a coarse fishing licence
    *   I select up to 2 trout rod licence
    And  I select Now as a start time
    *   I am 7 days over my 17th birthday
    *   I select yes for the benefits
    And I enter "NP382030C" as a NI number
    And I enter "Benefit" "Test" as the name

  Scenario: Scenario 2 - 12 Month Adult licence selecting salmon licence - Immediate start - Enter contact
    Given I select a coarse fishing licence
    *   I select up to 2 trout rod licence
    And  I select Now as a start time
    *   I am 7 days over my 17th birthday
    *   I select yes for the benefits
    And I enter "NP382030C" as a NI number
    And I enter "Benefit" "Test" as the name

  Scenario: Scenario 3 - 12 Month Adult licence selecting salmon licence - Immediate start - NO contact
    Given I select a coarse fishing licence
    *   I select up to 2 trout rod licence
    And  I select Now as a start time
    *   I am 7 days over my 17th birthday
    *   I select yes for the benefits
    And I enter "NP382030C" as a NI number
    And I enter "Benefit" "Test" as the name
