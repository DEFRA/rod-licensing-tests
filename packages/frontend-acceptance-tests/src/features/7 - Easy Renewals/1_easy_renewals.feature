@browser
@axe
Feature: I want to renew my licence

  Scenario Outline: Scenario 1 - renew licence
    # Licence Journey
  Given I am on the renewal login page with "<Permission>" as the permission
  *   I enter "<Day>" "<Month>" "<Year>" as renewal date of birth
  And I enter "<Postcode>" as the postcode and click continue
  And I am on the licence summary page and I click the change type link
  And I select a coarse fishing licence
  *   I select up to 2 trout rod licence
  And I am on the licence summary page and I click the change no of rods link
  *   I select up to 2 trout rod licence
  And I am on the licence summary page and I click the change disability support link
  *   I select no for the benefits
  *   I select no for the blue badge
  And I am on the licence summary page and I click continue
    # Contact Journey
  And I am on the contact summary page and I click change name
  And I enter "Adult" "Test" as the name
  And I am on the contact summary page and I click change email
  And I enter email as "howard@gmail.com" and number as ""
  And I am on the contact summary page and I click change address
  And I enter "3" and "SN153PG" as my house number and postcode
  And I select "100121002711" as an address
  And I am on the contact summary page and I click change newsletter
  And I do not want a newsletter
  And I am on the contact summary page and I click continue
  And I select I agree and I click continue
  And I enter payment details
  And I confirm payment details
  Then I am on the order confirmation page and exit the service
    Examples:
      | Permission | Day | Month | Year | Postcode |
      | S8DPH7     |  01  | 01   | 1970 | BS9 1HJ  |


