@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.


    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information


    #TODO: Create scenarios that cover all the acceptance criteria
    @sep16-1
    Scenario Outline: Verify that clicking on upfront payment plan activates the next button
        Then the next button is disabled by default
        When user selects "<payment_option>" payment option
        Then the next button will be enabled
        Examples:
            | payment_option |
            | upfront        |
            | installments   |
    @sep16-2
    Scenario: Verify after clicking the next button, step3 stepper color is blue
        When user selects "upfront" payment plan
        And user clicks on the next button
        Then the Review step stepper should be blue
        And the Payment Plan step stepper should be green
        And the Start Application step stepper should be green
    @sep16-3
    Scenario: Verify that payment summary is displayed after a payment plan is selected
        When user selects "upfront" payment plan
        Then the upfront payment plan summary is displayed
        When user selects "installments" payment plan
        Then the installments payment plan summary is displayed

    @sep16-4
    Scenario: Verify that the back button is displayed and enabled
        Then the back button is displayed and enabled
        When user clicks on the back button
        Then user should be navigated back to start application step

