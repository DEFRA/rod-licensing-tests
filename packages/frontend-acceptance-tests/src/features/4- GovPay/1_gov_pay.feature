@browser
Feature: I want to buy a 1 or 8 day licence adult fishing licence

  Scenario Outline: Scenario Govpay - Declined, Cancelled and Error payments
    Given  I am at the start of the purchase journey
    And I am buying a licence for myself
    And I enter "<firstName>" "<lastName>" as the name
    *   I am 1 day over my 17th birthday
    *   I enter "<concession>" concession
    And  I select <startFrom> as a start time
    And I select a "<licenceType>" fishing licence
    Then I select a <LicenceLength> licence
    And I am on the licence summary page and I click continue
    And I enter "<houseNo>" and "<postCode>" as my house number and postcode
    And I select "<selectAddress>" as an address
    And I enter email as "<email>" and number as "<number>"
    And I receive a newsletter and enter no email "<newsEmail>"
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    Then I enter payment details as "<cardNo>"
    And I am on the payment declined and exit the service
    Examples:
      | LicenceLength  |concession| firstName | lastName |  houseNo | postCode| selectAddress| startFrom|licenceType| email                  | number      | cardNo   | newsEmail   |
      | 8dayLicence    | No         | Adult     | Licence  | 3       | SN153PG  | 100121002711 | Now      | coarse2  |email@example.com         |             |4000000000000002 |     |
      | 8dayLicence    | No         |Adult     | Licence  | 3       | SN153PG  | 100121002711 | Now      | salmon    |                        | 07000900900 |4000000000000119 | email@example.com|

