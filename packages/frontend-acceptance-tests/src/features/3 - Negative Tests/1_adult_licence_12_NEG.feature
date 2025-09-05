Feature: Buy a Fishing Licence - Error messages - 12 month journey
  As a User
  I want to see the correct error meesage appear on each page
  So that I understand the issue that has occurred
  Background: Buy an adult fishing licence

# Start of Licence journey -------------------------------

Scenario: Scenario 1 - Licence For, Name and DOB Errors
#  Scenario 1.1: Test Errors on Licence For page -  Error messages - No option selected
    Given I am at the start of the purchase journey
    When I am on the licence for page and I click continue
    Then I expect the licence for page to show the following errors
      | ErrorMessage  |
      | Tell us who the licence is for  |
    When I am buying a licence for myself

#  Scenario 1.2: Test Errors on Contact Name page -  Error messages - No text entered
    When I am on the name page and I click continue
    Then I expect the name page to show the following errors
      | ErrorMessage  |
      | Enter the licence holder’s first name  |
      | Enter the licence holder’s last name  |

#  Scenario 1.3: Test Errors on Contact Name page -  Error messages - 1 character entered
    When I enter "H" "D" as an invalid name
    Then I expect the name page to show the following errors
      | ErrorMessage  |
      | The first name must contain at least 2 letters  |
      | The last name must contain at least 2 letters  |

#  Scenario 1.4: Test Errors on Contact Name page -  Error messages - Invalid characters entered
    When I enter "$$" "$$" as invalid characters
    Then I expect the name page to show the following errors
      | ErrorMessage  |
      | The first name must contain at least 2 letters  |
      | The last name must contain at least 2 letters |
    And I enter "NegativeTwelve" "Test" as the name

#  Scenario 1.5: Test Errors on DOB page -  Error messages - No date entered
    When I am on the dob page and I click continue
    #  And I perform accessibility testing for the current page
    #  Example:
    #   |pages|
    #   |/date-of-birth|
    Then I expect the dob page to show the following errors
      | ErrorMessage  |
      | Enter a date of birth  |

#  Scenario 1.6: Test Errors on DOB page -  Error messages - Invalid date
    When I enter "2" "" "" as an invalid date of birth
    Then I expect the dob page to show the following errors
      | ErrorMessage  |
      | Date of birth must include a month and year  |

#  Scenario 1.7: Test Errors on DOB page -  Error messages - Date in future
    When I enter "2" "2" "2055" as an invalid date of birth
    Then I expect the dob page to show the following errors
      | ErrorMessage  |
      | The date of birth must be in the past  |
    *   I am 7 days over my 17th birthday


Scenario: Scenario 2 - Concession Errors
    When I am on the concession page and I click continue
    Then I expect the concession page to show the following errors
      | ErrorMessage  |
      | Choose one of the options.  |

    When I enter "Benefit" as the ni concession and I enter "" as the concesssion id
    Then I expect the concession page to show the following errors
      | ErrorMessage                           |
      | Enter the licence holder’s National Insurance number  |
    *   I enter "No" concession


Scenario: Scenario 3 - Start Kind Errors
    When I am on the start kind page and I click continue
    Then I expect the start kind page to show the following errors
      | ErrorMessage  |
      | Choose when the licence should start  |

    And I select AnotherTime as a start time
    And I am on the start kind page and I click continue
    Then I expect the start kind page to show the following errors
      | ErrorMessage  |
      | Enter a licence start date  |

    When I enter date two days in the past and click continue
    Then I expect the start kind page to show the following errors
      | ErrorMessage  |
      | Enter a date within the next 30 days  |
    And I enter date two days from today and click continue


Scenario: Scenario 4 - Type of Fish Errors
    When I am on the type of fish page and I click continue
    Then I expect the type of fish page to show the following errors
      | ErrorMessage  |
      | Choose one of the fishing licence types  |
    *   I select a "salmon" fishing licence


Scenario: Scenario 5 - Licence Length Errors
    Given I am on the licence length page and I click continue
    Then I expect the licence length page to show the following errors
      | ErrorMessage  |
      | Choose the length of this licence  |
    And I select a 12MonthLicence licence
    Then I am on the licence summary page and I click continue


Scenario: Scenario 6 - Find Address Errors
    When I am on the find address page and I click continue
    Then I expect the find address page to show the following errors
      | ErrorMessage  |
      | Enter a building number or name  |
      | Enter a postcode  |
    When I enter "" and "6767676767" as an invalid house number and postcode
    Then I expect the find address page to show the following errors
      | ErrorMessage  |
      | Enter a building number or name  |
      | Enter a UK postcode. If the address is outside the UK, enter the address manually.  |
    And I enter "3" and "SN153PG" as my house number and postcode


Scenario: Scenario 7 - Select Address Errors
    When I am on the select address page and I click continue
    Then I expect the select address page to show the following errors
      | ErrorMessage  |
      | Choose an address  |
    And I select "100121002711" as an address


Scenario: Scenario 8 - Confirmation Method Errors - Digital license
    And I select digital license
    When I am on the confirmation method page and I click continue
    Then I expect the confirmation method page to show the following errors
      | ErrorMessage  |
      | Choose how we should send the licence  |

    And I click email radio button and click continue on confirmation method page
    Then I expect the confirmation method page to show the following errors
      | ErrorMessage  |
      | Enter an email address in the correct format  |

    And I click mobile radio button and click continue on confirmation method page
    Then I expect the confirmation method page to show the following errors
      | ErrorMessage  |
      | Enter a UK mobile number  |
    And I enter email as "email@example.com" and number as "" for confirmation method
    And I am on the confirm contact details page and it asks me to confirm my email address and I click correct


Scenario: Scenario 9 - Contact Details Errors
    When I am on the contact details page and I click continue
    Then I expect the contact details page to show the following errors
      | ErrorMessage  |
      | Choose how we should contact the licence holder  |
    And I click email radio button and click continue


Scenario: Scenario 10 - Newsletter Errors
    When I am on the newsletter page and I click continue
    Then I expect the newsletter page to show the following errors
      | ErrorMessage  |
      | Choose one of the options  |
    And I receive a newsletter and enter no email "<newsEmail>"
    And I am on the contact summary page and I click continue
  Examples:
      | newsEmail          |
      | email@example.com  |


Scenario: Scenario 11 - Licence Conditions Errors
    When I dont agree to the terms and conditions and I click continue
    Then I expect the terms and conditions page to show the following errors
      | ErrorMessage  |
      | You have not agreed to the licence conditions  |
    And I agree to the terms and conditions and click continue
    And I select single licence only and click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service
