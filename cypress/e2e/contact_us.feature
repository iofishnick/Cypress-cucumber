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