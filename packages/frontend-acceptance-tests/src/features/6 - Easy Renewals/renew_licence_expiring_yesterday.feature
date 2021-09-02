Feature: I want to renew my fishing licence

  Scenario: Renew my licence that expired yesterday
    And I am at the start of the renewal journey with a "Coarse 12 month 2 Rod Licence (Full)" licence, that expires in 2 days and I am 7 days over my 17th birthday 
    And I enter "SN153PG" as the postcode and click continue
    Then I am on the licence summary page and I click continue

