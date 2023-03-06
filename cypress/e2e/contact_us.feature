Feature: WebdriverUniversity - Contact us page

    Scenario: Valid contact us form submission
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I enter an email
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid contact us form submission
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid contact us form submission - Using specific data
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I type a specific email address "sarah_woods101@mail.com"
        And I type a specific word "Hello 1!" and number 6788 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message