@browser
Feature: I want to buy a junior annual fishing

  Background: Buy an Junior fishing licence
    Given I select a 12MonthLicence licence

  Scenario: Scenario 1 - 12 Month Junior licence selecting 2 rod sea trout licence - Immediate start - Enter contact details
    Given I select a coarse fishing licence
    *   I select up to 2 trout rod licence
    And  I select Now as a start time
    *   I am 7 days under my 17th birthday
    And I am on the junior page and I click continue
    And I enter "Adult" "Test" as the name

  Scenario: Scenario 2 - 12 Month Junior licence selecting salmon licence - Immediate start - Enter contact
    Given I select a coarse fishing licence
    *   I select up to 2 trout rod licence
    And  I select Now as a start time
    *   I am 7 days under my 17th birthday
    And I am on the junior page and I click continue
    And I enter "Adult" "Test" as the name

  Scenario: Scenario 3 - 12 Month Junior licence selecting salmon licence - Immediate start - NO contact
    Given I select a coarse fishing licence
    *   I select up to 2 trout rod licence
    And  I select Now as a start time
    *   I am 7 days under my 17th birthday
    And I am on the junior page and I click continue
    And I enter "Adult" "Test" as the name
