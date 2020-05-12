@browser
Feature: I want to buy a 1 or 8 day licence adult fishing licence

  Scenario Outline: Scenario 1 - Purchase Fishing Adult Licence 1 and 8 days - Immediate start
    Given  I select a <LicenceLength> licence
    And I select a <licenceType> fishing licence
    And I select <startTime> as a start time
    *   I am 1 day over my 17th birthday
    And I enter "<firstName>" "<lastName>" as the name
    Examples:
      | LicenceLength  | firstName | lastName | startTime|licenceType|
      | 8dayLicence    | Adult     | Licence  | Now      | coarse    |
      | 8dayLicence    | Adult     | Licence  | Now      | salmon    |
      | 1dayLicence    | Adult     | Licence  | Now      | salmon    |


  Scenario Outline: Scenario 2 - Purchase Fishing Adult Licence 1 and 8 days - Future start date
    Given  I select a <LicenceLength> licence
    And I select a <licenceType> fishing licence
    And I select <startTime> as a start time
    And I enter date two days from today and click continue
    And I enter a start time of "<startTime>"
    *   I am 1 day over my 17th birthday
    And I enter "<firstName>" "<lastName>" as the name
    Examples:
      | LicenceLength  | firstName | lastName |  houseNo | postCode| selectAddress| startFrom       | startTime    |licenceType|
      | 8dayLicence    | Adult     | Licence  | 3       | SN153PG  | 100121002711 | AnotherTime     | midnight     | coarse    |
      | 1dayLicence    | Adult     | Licence  | 3       | SN153PG  | 100121002711 | AnotherTime     | midday       | salmon    |
      | 1dayLicence    | Adult     | Licence  | 3       | SN153PG  | 100121002711 | AnotherTime     | midday       |salmon     |

