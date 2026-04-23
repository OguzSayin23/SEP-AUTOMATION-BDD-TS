@sep25
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed.

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.


    #TODO: Create scenarios that cover all the acceptance criteria
    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        When user selects "upfront" payment plan
        And user clicks on the next button

    @sep25-1
    Scenario: Verify that an error message is thrown when the card number is too short
        When user enters "424242424242" in the card number field
        And user clicks on Terms and Conditions checkbox
        Then an error message "Your card number is incomplete." should be displayed

    @sep25-2
    Scenario: Verify that an error message is thrown when the card number is wrong
        When user enters "1234567890123456" in the card number field
        And user clicks on Terms and Conditions checkbox
        Then an error message "Your card number is invalid." should be displayed

