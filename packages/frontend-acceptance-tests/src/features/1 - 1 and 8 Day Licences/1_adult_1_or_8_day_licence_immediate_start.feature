@browser
Feature: I want to buy a 1 or 8 day licence adult fishing licence

  Scenario Outline: Scenario 1 - Purchase Fishing Adult Licence 1 and 8 days - Immediate start
    Given  I am at the start of the purchase journey
    And I am buying a licence for myself
    And I enter "<firstName>" "<lastName>" as the name
    *   I am 1 day over my 17th birthday
    *   I enter "<concession>" concession
    And  I select <startTime> as a start time
    And I select a "<licenceType>" fishing licence
    Then I select a <licenceLength> licence
    And I am on the licence summary page and I click continue
    And I enter "<houseNo>" and "<postCode>" as my house number and postcode
    And I select "<selectAddress>" as an address
    And I enter email as "<email>" and number as "<number>"
    And I receive a newsletter and enter no email "<newsEmail>"
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I enter payment details
    And I confirm payment details
#    Then I expect to receive a confirmation via GOV.UK Notify
    Then I am on the order confirmation page and exit the service
    Examples:
      | licenceLength  |concession| firstName | lastName |  houseNo | postCode | selectAddress | startTime | licenceType | email           | number      | newsEmail       |
      | 8dayLicence    | No       | Adult     | Licence  | 3        | SN153PG  | 100121002711  | Now       | coarse2     | email@gmail.com |             |                 |
      | 8dayLicence    | No       | Adult     | Licence  | 3        | SN153PG  | 100121002711  | Now       | salmon      |                 | 07000900900 | email@gmail.com |
      | 1dayLicence    | No       | Adult     | Licence  | 3        | SN153PG  | 100121002711  | Now       | salmon      | email@gmail.com |             |                 |
      | 1dayLicence    | No       | Adult     | Licence  | 3        | SN153PG  | 100121002711  | Now       | coarse2     | email@gmail.com |             |                 |

  Scenario Outline: Scenario 1 - Purchase Fishing Adult Licence for someone else 1 and 8 days - Immediate start
    Given  I am at the start of the purchase journey
    And I am buying a licence for someone else
    And I enter "<firstName>" "<lastName>" as the name
    And I am 1 day over my 17th birthday
    And I enter "<concession>" concession
    And I select <startTime> as a start time
    And I select a "<licenceType>" fishing licence
    And I select a <licenceLength> licence
    And I am on the licence summary page and I click continue
    And I enter "<houseNo>" and "<postCode>" as my house number and postcode
    And I select "<selectAddress>" as an address
    And I enter email as "<email>" and number as "<number>"
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I enter payment and address details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service
    Examples:
      | licenceLength  |concession| firstName | lastName |  houseNo | postCode | selectAddress | startTime | licenceType | email           | number      |
      | 8dayLicence    | No       | Adult     | Licence  | 3        | SN153PG  | 100121002711  | Now       | coarse2     | email@gmail.com |             |
      | 1dayLicence    | No       | Adult     | Licence  | 3        | SN153PG  | 100121002711  | Now       | salmon      | email@gmail.com |             |

  Scenario Outline: Scenario 2 - Purchase Fishing Adult Licence 1 and 8 days - Future start date
    Given  I am at the start of the purchase journey
    And I am buying a licence for myself
    And I enter "<firstName>" "<lastName>" as the name
    *   I am 1 day over my 17th birthday
    *   I enter "<concession>" concession
    And I select <startFrom> as a start time
    And I enter date two days from today and click continue
    And I select a "<licenceType>" fishing licence
    Then I select a <LicenceLength> licence
    And I enter a start time of "<startTime>"
    And I am on the licence summary page and I click continue
    And I enter "<houseNo>" and "<postCode>" as my house number and postcode
    And I select "<selectAddress>" as an address
    And I enter email as "<email>" and number as "<number>"
    And I receive a newsletter and enter no email "<newsEmail>"
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service
    Examples:
      | LicenceLength  | concession | firstName | lastName |  houseNo | postCode| selectAddress| startFrom       | startTime    |licenceType| email                  | number     | newsEmail     |
      | 8dayLicence    | No           |Adult     | Licence  | 3       | SN153PG  | 100121002711 | AnotherTime     | midnight     | coarse2    |email@gmail.com        |            |             |
      | 1dayLicence    | No           |Adult     | Licence  | 3       | SN153PG  | 100121002711 | AnotherTime     | midday       | salmon    |                        | 07000900900| email@gmail.com            |
      | 1dayLicence    | No           |Adult     | Licence  | 3       | SN153PG  | 100121002711 | AnotherTime     | midday       | salmon     |email@gmail.com         |           |            |
