@browser
Feature: Buy a Fishing Licence - Error messages
  As a User
  I want to see the correct error meesage appear on each page
  So that I understand the issue that ha occurred

  Scenario: Scenario 1 - Licence Length Errors
#  Scenario 1.1: Test Errors on Licence Length page -  Error messages relate to not selecting a licence length
    Given  I am at the start of the purchase journey
    And I am on the licence length page and I click continue
 #   And I perform accessibility testing for the current page
 #   Example:
 #     |pages|
  #    |/licence-length|
    Then I expect the licence length page to show the following errors
      | ErrorMessage                              |
      | You did not tell us which licence you want     |
    And I select a 12MonthLicence licence

  Scenario: Scenario 2 - Type of Fish Errors
# Scenario 2.1: Test Errors on Choose a Licence Type page -  Error messages - No date entered
    When I am on the type of fish page and I click continue
  #  And I perform accessibility testing for the current page
  #  Example:
  #    |pages|
  #    |/licence-type|
    Then I expect the type of fish page to show the following errors
      | ErrorMessage                                        |
      | You did not tell us which type of licence you want  |
    *   I select a coarse fishing licence

  Scenario: Scenario 3 - Number of Rods Errors
# Scenario 3.1: Test Errors on Number of Rods page -  Error messages - No date entered
    When I am on the number of rods page and I click continue
 #   And I perform accessibility testing for the current page
 #   Example:
  #    |pages|
  #    |/numbe-of-rods|
    Then I expect the number of rods page to show the following errors
      | ErrorMessage                |
      | You did not tell us how many rods would you like to licence?   |
    *   I select up to 2 trout rod licence

  Scenario: Scenario 4 - Start Kind Errors
# Scenario 4.1: Test Errors on Start Kind page -  Error messages - No date entered
    When I am on the start kind page and I click continue
 #   And I perform accessibility testing for the current page
  #  Example:
  #    |pages|
  #    |/start-kind|
    Then I expect the start kind page to show the following errors
      | ErrorMessage                                        |
      | Tell us when would you like your licence to start?        |
    And I select AnotherTime as a start time

  Scenario: Scenario 5 - Start Date Errors
# Scenario 5.1: Test Errors on Start Date page -  Error messages - No date entered
    When I am on the start date page and I click continue
  #  And I perform accessibility testing for the current page
  #  Example:
  #    |pages|
  #    |/start-date|
    Then I expect the start date page to show the following errors
      | ErrorMessage                                                                                             |
      | Not a valid date. Enter the date you want the licence to start on and include a day, month and year      |

  Scenario: Scenario 5 - Start Date Errors
# Scenario 5.2: Test Errors on Start Date page -  Error messages - No date entered
    When I enter date two days in the past and click continue
    And I enter date two days from today and click continue

  Scenario: Scenario 6 - DOB Name Errors
#  Scenario 6.1: Test Errors on DOB page -  Error messages - No date entered
    When I am on the dob page and I click continue
  #  And I perform accessibility testing for the current page
  #  Example:
   #   |pages|
   #   |/date-of-birth|
    Then I expect the dob page to show the following errors
      | ErrorMessage              |
      | Enter your date of birth and include a day, month and year  |

#  Scenario 6.2: Test Errors on DOB page -  Error messages - Invalid date
    When I enter "2" "" "" as an invalid date of birth
    Then I expect the dob page to show the following errors
      | ErrorMessage                                               |
      | Enter your date of birth and include a day, month and year |

#  Scenario 6.3: Test Errors on DOB page -  Error messages - Date in future
    When I enter "2" "2" "2022" as an invalid date of birth
    Then I expect the dob page to show the following errors
      | ErrorMessage                       |
      | Your date of birth must be in the past  |
    *   I am 7 days over my 17th birthday

  Scenario: Scenario 7 - Benefits Errors
# Scenario 7.1: Test Errors on Benefits page -  Error messages - No date entered
    When I am on the benefits page and I click continue
  #  And I perform accessibility testing for the current page
  #  Example:
  #    |pages|
  #    |/benefit-check|
    Then I expect the benefits page to show the following errors
      | ErrorMessage         |
      | You have not told us if you claim Disability Living Allowance or Personal Independence Payment?   |
    *   I select no for the benefits

  Scenario:  Scenario 8 - Blue Badge Errors
# Scenario 8.1: Test Errors on Blue Badge page -  Error messages - No date entered
    When I am on the blue badge page and I click continue
  #  And I perform accessibility testing for the current page
  #  Example:
  #    |pages|
   #   |/blue-badge-check|
    Then I expect the blue badge page to show the following errors
      | ErrorMessage                           |
      | You have not told us if you hold a blue badge?       |
    *   I select no for the blue badge
    And I am on the licence summary page and I click continue
  #  And I perform accessibility testing for the current page
  #  Example:
  #    |pages|
   #   |/licence-summary|

  Scenario: Scenario 9 - Contact Name Errors
#  Scenario 9.1: Test Errors on Contact Name page -  Error messages - No text entered
    When I am on the name page and I click continue
  #  And I perform accessibility testing for the current page
  #  Example:
  #    |pages|
   #   |/name|
    Then I expect the name page to show the following errors
      | ErrorMessage           |
      | You did not enter your first name  |
      | You did not enter your last name  |

#  Scenario 9.2: Test Errors on Contact Name page -  Error messages - 1 character entered
    When I enter "H" "D" as an invalid name
    Then I expect the name page to show the following errors
      | ErrorMessage                                      |
      | Your first name must be between 2 and 100 characters  |
      | Your last name must be between 2 and 100 characters    |

#  Scenario 9.3: Test Errors on Contact Name page -  Error messages - Invalid characters entered
    When I enter "$$" "$$" as invalid characters
    Then I expect the name page to show the following errors
      | ErrorMessage                                      |
      | Your first name must only contain letters         |
      | Your last name must only contain letters          |
    And I enter "NegativeTwelve" "Test" as the name


  Scenario: Scenario 10 - Find Address Errors
#  Scenario 10.1: Test Errors on Find Address page -  Error messages - No date entered
    When I am on the find address page and I click continue
 #   And I perform accessibility testing for the current page
  #  Example:
  #    |pages|
  #    |/find-address|
    Then I expect the find address page to show the following errors
      | ErrorMessage                            |
      | You did not enter your building number or name         |
      | You did not enter your postcode                      |
#  Scenario 10.2: Test Errors on Find Address page -  Error messages - No date entered
    When I enter "" and "6767676767" as an invalid house number and postcode
    Then I expect the find address page to show the following errors
      | ErrorMessage                                      |
      | Enter a valid UK postcode. If you live outside the UK, enter your address manually.  |
    And I enter "3" and "SN153PG" as my house number and postcode

  Scenario: Scenario 11 - Select Address Errors
# Scenario 11.1: Test Errors on Select Address page -  Error messages - No date entered
   When I am on the select address page and I click continue
   # And I perform accessibility testing for the current page
   # Example:
    #  |pages|
    #  |/select-address|
    Then I expect the select address page to show the following errors
      | ErrorMessage                            |
      | You did not select an address       |
    And I select "100121002711" as an address

  Scenario: Scenario 12 - Contact Details Errors
# Scenario 12.1: Test Errors on Contact Details page -  Error messages - No date entered
    When I am on the contact details page and I click continue
   # And I perform accessibility testing for the current page
   # Example:
   #   |pages|
    #  |/contact|
    Then I expect the contact details page to show the following errors
      | ErrorMessage                                                |
      | You have not told us how you would like to receive your licence details and expiry reminders   |
    And I click email radio button and click continue
    Then I expect the contact details page to show the following errors
      | ErrorMessage                                                                           |
      | You did not enter your email address                                                           |
    And I click mobile radio button and click continue
    Then I expect the contact details page to show the following errors
      | ErrorMessage                                                                           |
      | You did not enter your mobile phone number  |
    And I enter email as "" and number as "07885066467"

  Scenario: Scenario 13 - Newsletter Errors
# Scenario 10.1: Test Errors on Newsletter page -  Error messages - No date entered - Not currently working as newsletter defaults to 'No'
    When I am on the newsletter page and I click continue
   # And I perform accessibility testing for the current page
   # Example:
    #  |pages|
    #  |/newsletter|
   # Then I expect the newsletter page to show the following errors
    #  | ErrorMessage                                        |
     # | Select if you would like to receive our newsletter  |
    #And I receive a newsletter and enter no email ""
    #Then I expect the newsletter page to show the following errors
    #  | ErrorMessage                     |
    #  | Enter a valid email address      |
    #And I receive a newsletter and enter "howard@gmail.com"
    And I am on the contact summary page and I click continue
   # And I perform accessibility testing for the current page
   # Example:
    #  |pages|
    # |/contact-summary|

  Scenario: Scenario 14 - Licence Conditions Errors
# Scenario 10.1: Test Errors on Terms and Conditions page -  Error messages - No date entered
    When I dont agree to the terms and conditions and I click continue
   # And I perform accessibility testing for the current page
   # Example:
    #  |pages|
     # |/terms-conditions|
    Then I expect the terms and conditions page to show the following errors
      | ErrorMessage                |
      | You have not agreed to the terms and conditions     |
    And I agree to the terms and conditions and click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service
