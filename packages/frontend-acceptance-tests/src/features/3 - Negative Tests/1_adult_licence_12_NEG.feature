Feature: Buy a Fishing Licence - Error messages - 12 month journey
  As a User
  I want to see the correct error meesage appear on each page
  So that I understand the issue that ha occurred
  Background: Buy an adult fishing licence

# Start of Licence journey -------------------------------

  Scenario: Scenario 1 - DOB Name Errors
    #  Scenario 1.1: Test Errors on DOB page -  Error messages - No date entered
    # Licence details journey starts
    Given  I am at the start of the purchase journey
    When I am on the dob page and I click continue
  #  And I perform accessibility testing for the current page
  #  Example:
   #   |pages|
   #   |/date-of-birth|
    Then I expect the dob page to show the following errors
      | ErrorMessage              |
      | Enter your date of birth and include a day, month and year  |
#  Scenario 1.2: Test Errors on DOB page -  Error messages - Invalid date
    When I enter "2" "" "" as an invalid date of birth
    Then I expect the dob page to show the following errors
      | ErrorMessage                                               |
      | Enter your date of birth and include a day, month and year |
#  Scenario 1.3: Test Errors on DOB page -  Error messages - Date in future
    When I enter "2" "2" "2022" as an invalid date of birth
    Then I expect the dob page to show the following errors
      | ErrorMessage                       |
      | Your date of birth must be in the past  |
    *   I am 7 days over my 17th birthday

  Scenario: Scenario 2 - Start Kind Errors
# Scenario 2.1: Test Errors on Start Kind page -  Error messages - No date entered
    When I am on the start kind page and I click continue
    Then I expect the start kind page to show the following errors
      | ErrorMessage |
      | Choose when you'd like your licence to start  |
# Scenario 2.1: Test Errors on Start Kind page -  Error messages - No date entered
    And I select AnotherTime as a start time
    And I am on the start kind page and I click continue
    Then I expect the start kind page to show the following errors
      | ErrorMessage                                                                                             |
      | Enter the date you want your licence to start, include a day, month and year      |
# Scenario 2.2: Test Errors on Start Date page -  Error messages - No date entered
    When I enter date two days in the past and click continue
    Then I expect the start kind page to show the following errors
      | ErrorMessage                                                                                             |
      | Enter a date within the next 30 days      |
    And I enter date two days from today and click continue



  Scenario: Scenario 3 - Concession Errors
# Scenario 3.1: Test Errors on Benefits page -  Error messages - No date entered
    When I am on the concession page and I click continue
    Then I expect the concession page to show the following errors
      | ErrorMessage         |
      | Choose Personal Independence Payment (PIP) or Disability Living Allowance (DLA), Blue Badge or No.  |
# Scenario 3.2: Test Errors on Blue Badge page -  Error messages - No date entered
    When I enter "Benefit" as the ni concession and I enter "" as the concesssion id
    Then I expect the concession page to show the following errors
      | ErrorMessage                           |
      | Enter your National Insurance number      |
# Scenario 3.2: Test Errors on Blue Badge page -  Error messages - No date entered
    When I enter "BlueBadge" as the bb concession and I enter "" as the concesssion id
    Then I expect the concession page to show the following errors
      | ErrorMessage                           |
      | Enter your Blue Badge Number     |

    *   I enter "No" concession


  Scenario: Scenario 4 - Type of Fish Errors
# Scenario 4.1: Test Errors on Choose a Licence Type page -  Error messages - No date entered
    When I am on the type of fish page and I click continue
    Then I expect the type of fish page to show the following errors
      | ErrorMessage                                        |
      | Choose which type of fishing licence you want  |
    *   I select a "salmon" fishing licence


  Scenario: Scenario 5 - Licence Length Errors
#  Scenario 5.1: Test Errors on Licence Length page -  Error messages relate to not selecting a licence length
    Given I am on the licence length page and I click continue
    Then I expect the licence length page to show the following errors
      | ErrorMessage                              |
      | Choose how long you want your licence for     |
    And I select a 12MonthLicence licence
    Then I am on the licence summary page and I click continue



# Start of Contact journey -------------------------------


  Scenario: Scenario 6 - Contact Name Errors
#  Scenario 6.1: Test Errors on Contact Name page -  Error messages - No text entered
    When I am on the name page and I click continue
    Then I expect the name page to show the following errors
      | ErrorMessage           |
      | Enter your first name  |
      | Enter your last name  |

#  Scenario 6.2: Test Errors on Contact Name page -  Error messages - 1 character entered
    When I enter "H" "D" as an invalid name
    Then I expect the name page to show the following errors
      | ErrorMessage |
      | Your first name must contain at least 2 letters  |
      | Your last name must contain at least 2 letters  |

#  Scenario 6.3: Test Errors on Contact Name page -  Error messages - Invalid characters entered
    When I enter "$$" "$$" as invalid characters
    Then I expect the name page to show the following errors
      | ErrorMessage  |
      | Your last name must contain at least 2 letters  |
      | Your last name must contain at least 2 letters |
    And I enter "NegativeTwelve" "Test" as the name


  Scenario: Scenario 7 - Find Address Errors
#  Scenario 7.1: Test Errors on Find Address page -  Error messages - No date entered
    When I am on the find address page and I click continue
    Then I expect the find address page to show the following errors
      | ErrorMessage |
      | Enter your building number or name      |
      | Enter your postcode                     |
#  Scenario 7.2: Test Errors on Find Address page -  Error messages - No date entered
    When I enter "" and "6767676767" as an invalid house number and postcode
    Then I expect the find address page to show the following errors
      | ErrorMessage   |
      | Enter your building number or name                                                   |
      | Enter a UK postcode. If your address is outside the UK, enter your address manually. |
    And I enter "3" and "SN153PG" as my house number and postcode


  Scenario: Scenario 8 - Select Address Errors
# Scenario 8.1: Test Errors on Select Address page -  Error messages - No date entered
    When I am on the select address page and I click continue
    Then I expect the select address page to show the following errors
      | ErrorMessage  |
      | Choose your address  |
    And I select "100121002711" as an address

Scenario: Scenario 9 - Confirmation Method Errors - Digital license
   # Scenario 9.1: Test Errors on Confirmation Method page -  Error messages - Nothing selected
    And I select digital license
    When I am on the confirmation method page and I click continue
    Then I expect the confirmation method page to show the following errors
      | ErrorMessage  |
      | Choose how you would like to receive the licence |
    # Scenario 9.2: Test Errors on Confirmation Method page -  Error messages - No email entered
    And I click email radio button and click continue on confirmation method page
    Then I expect the confirmation method page to show the following errors
      | ErrorMessage   |
      | Enter an email address in the correct format |
    # Scenario 9.3: Test Errors on Confirmation Method page -  Error messages - No phone number entered
    And I click mobile radio button and click continue on confirmation method page
    Then I expect the confirmation method page to show the following errors
      | ErrorMessage |
      | Enter your UK mobile phone number |
    And I enter email as "email@gmail.com" and number as "" for confirmation method
    And I am on the confirm contact details page and it asks me to confirm my email address and I click correct

Scenario: Scenario 10 - Contact Details Errors
   # Scenario 10.1: Test Errors on Contact Details page -  Error messages - Nothing selected
    When I am on the contact details page and I click continue
    Then I expect the contact details page to show the following errors
      | ErrorMessage  |
      | Choose how you would like to be contacted  |
    And I click email radio button and click continue
    And I am on the newsletter page and I click continue
    And I am on the contact summary page and I click continue

  Scenario: Scenario 11 - Licence Conditions Errors
# Scenario 11.1: Test Errors on Terms and Conditions page -  Error messages - No date entered
    When I dont agree to the terms and conditions and I click continue
    Then I expect the terms and conditions page to show the following errors
      | ErrorMessage  |
      | You have not agreed to the terms and conditions     |
    And I agree to the terms and conditions and click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service
