Feature: I want to renew my fishing licence

  Scenario: Scenario 1 - Renew my adult licence that expires in 2 days
    Given I am at the start of the renewal journey with a "Coarse 12 month 2 Rod Licence (Full)" licence, that expires in 2 days and I am 7 days over my 40th birthday and my name is "Homer" "SimpsonRenewal"
    And I enter "SN153PG" as the postcode and click continue
    And I am on the licence summary page and I click continue
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select single licence only and click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 2 - Renew my adult licence that expires in 2 days, with postal fulfilment as true
    Given I am at the start of the renewal journey with a "Coarse 12 month 2 Rod Licence (Full)" licence, that expires in 2 days and I am 7 days over my 35th birthday and my name is "HomerPostal" "SimpsonRenewal" and postal fulfilment is true
    And I enter "SN153PG" as the postcode and click continue
    And I am on the licence summary page and I click continue
    And I select digital license
    And I click email radio button and click continue on confirmation method page
    And I am on the confirm contact details page and it asks me to confirm my email address and I click correct
    And I click email radio button and click continue
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select single licence only and click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 3 - Renew my senior licence that expires in 2 days
    Given I am at the start of the renewal journey with a "Coarse 12 month 2 Rod Licence (Senior)" licence, that expires in 2 days and I am 7 days over my 70th birthday and my name is "Grandpa" "SimpsonRenewal"
    And I enter "SN153PG" as the postcode and click continue
    And I am on the licence summary page and I click continue
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select single licence only and click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 4 - Renew my adult licence that expires in 2 days, but I now need a senior licence
    Given I am at the start of the renewal journey with a "Coarse 12 month 2 Rod Licence (Full)" licence, that expires in 2 days and I am 7 days over my 66th birthday and my name is "GrandpaAdult" "SimpsonRenewal"
    And I enter "SN153PG" as the postcode and click continue
    And I am on the licence summary page and I click continue
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select single licence only and click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 5 - Renew my early stage junior licence that expires in 2 days
    Given I am at the start of the renewal journey with a "Coarse 12 month 2 Rod Licence (Junior)" licence, that expires in 2 days and I am 0 days over my 14th birthday and my name is "Bart" "SimpsonRenewal"
    And I enter "SN153PG" as the postcode and click continue
    And I am on the licence summary page and I click continue
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select single licence only and click continue
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 6 - Renew my late stage junior licence that expires in 2 days
    Given I am at the start of the renewal journey with a "Coarse 12 month 2 Rod Licence (Junior)" licence, that expires in 2 days and I am 0 days over my 16th birthday and my name is "Bart" "SimpsonRenewal"
    And I enter "SN153PG" as the postcode and click continue
    And I am on the licence summary page and I click continue
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select single licence only and click continue
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 7 - Renew my junior licence that expires in 2 days, but I now need an adult licence
    Given I am at the start of the renewal journey with a "Coarse 12 month 2 Rod Licence (Junior)" licence, that expires in 2 days and I am 0 days over my 17th birthday and my name is "Bart" "SimpsonRenewal"
    And I enter "SN153PG" as the postcode and click continue
    And I am on the licence summary page and I click continue
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select single licence only and click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service

  Scenario: Scenario 7 - Renew my junior licence that expires in 2 days, but I now need an adult licence (slightly older)
    Given I am at the start of the renewal journey with a "Coarse 12 month 2 Rod Licence (Junior)" licence, that expires in 2 days and I am 1 days over my 17th birthday and my name is "Bart" "SimpsonRenewal"
    And I enter "SN153PG" as the postcode and click continue
    And I am on the licence summary page and I click continue
    And I am on the contact summary page and I click continue
    And I agree to the terms and conditions and click continue
    And I select single licence only and click continue
    And I enter payment details
    And I confirm payment details
    Then I am on the order confirmation page and exit the service