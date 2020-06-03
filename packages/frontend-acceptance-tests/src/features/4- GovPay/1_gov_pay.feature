@browser
Feature: I want to buy a 1 or 8 day licence adult fishing licence

  Scenario Outline: Scenario Govpay - Declined, Cancelled and Error payments
    Given  I select a <LicenceLength> licence
    And I select a <licenceType> fishing licence
    And I select <startFrom> as a start time
    *   I am 1 day over my 17th birthday
    And I am on the licence summary page and I click continue
    And I enter "<firstName>" "<lastName>" as the name
    And I enter "<houseNo>" and "<postCode>" as my house number and postcode
    And I select "<selectAddress>" as an address
    And I enter email as "<email>" and number as "<number>"
    And I do not want a newsletter
    And I am on the contact summary page and I click continue
    And I select I agree and I click continue
    And I enter payment details as "<cardNo>"
    And I am on the payment declined and exit the service
    Examples:
      | LicenceLength  | firstName | lastName |  houseNo | postCode| selectAddress| startFrom|licenceType| email                  | number      | newsEmail               | cardNo          |
      | 8dayLicence    | Adult     | Licence  | 3       | SN153PG  | 100121002711 | Now      | coarse    |howardjdavis@yahoo.co.uk| 07845066407 | howardjdavis@yahoo.co.uk|4000000000000002 |
      | 8dayLicence    | Adult     | Licence  | 3       | SN153PG  | 100121002711 | Now      | salmon    |                        | 07845066407 |howardjdavis@yahoo.co.uk |4000000000000119 |

