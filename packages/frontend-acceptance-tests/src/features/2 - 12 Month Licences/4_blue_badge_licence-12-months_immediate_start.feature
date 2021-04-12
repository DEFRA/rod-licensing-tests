Feature: I want to buy an adult blue badge annual fishing

  Background: Buy an adult blue badge fishing licence
    Given  I am at the start of the purchase journey
    *   I am 7 days over my 17th birthday
    And  I select Now as a start time
    *   I enter "BlueBadge" as the bb concession and I enter "BlueBadge01" as the concesssion id

  Scenario: Scenario 1 - 12 Month Adult blue badge licence selecting 2 rod sea trout licence - Immediate start - Enter contact details
    # Licence details journey starts
    Given I select a "salmon" fishing licence
    And I select a 12MonthLicence licence
    Then I am on the licence summary page and I click continue
     # Contact Journey starts
    And I enter "Adult" "Salmon" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I select digital license
    And I enter email as "email@gmail.com" and number as "" for confirmation method
    And I click email radio button and click continue
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I enter payment details
    And I confirm payment details
      #    Then I expect to receive a confirmation via GOV.UK Notify
  Then I am on the order confirmation page and exit the service

 Scenario: Scenario 2 - 12 Month Adult Blue Badge licence selecting salmon licence - Immediate start - Enter contact
   # Licence details journey starts
    Given I select a "coarse2" fishing licence
    And I select a 12MonthLicence licence
    Then I am on the licence summary page and I click continue
   # Contact Journey starts
    And I enter "Adult" "CoarseTwo" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I select digital license
    And I enter email as "email@gmail.com" and number as "" for confirmation method
    And I click email radio button and click continue
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I enter payment details
    And I confirm payment details
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 3 - 12 Month Adult Blue Badge licence selecting salmon licence - Immediate start - Enter contact
 # Licence details journey starts
    Given I select a "coarse3" fishing licence
    Then I am on the licence summary page and I click continue
  # Contact Journey starts
    And I enter "Adult" "CoarseThree" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I select digital license
    And I enter email as "email@gmail.com" and number as "" for confirmation method
    And I click email radio button and click continue
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I enter payment details
    And I confirm payment details
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 4 - 12 Month Adult Blue Badge licence selecting salmon licence - Immediate start - By Post - NO contact
 # Licence details journey starts
    Given I select a "coarse3" fishing licence
    Then I am on the licence summary page and I click continue
  # Contact Journey starts
    And I enter "Adult" "CoarseThree" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I select paper license
    And I select make a note of the license 
    And I do not have either of these
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I enter payment details
    And I confirm payment details
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 5 - 12 Month Adult Blue Badge licence selecting salmon licence - Immediate start - By Post - Enter contact
 # Licence details journey starts
    Given I select a "coarse3" fishing licence
    Then I am on the licence summary page and I click continue
  # Contact Journey starts
    And I enter "Adult" "CoarseThree" as the name
    And I enter "3" and "SN153PG" as my house number and postcode
    And I select "100121002711" as an address
    And I select paper license
    And I select make a note of the license 
    And I enter email as "email@gmail.com" and number as ""
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I enter payment details
    And I confirm payment details
    #    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service