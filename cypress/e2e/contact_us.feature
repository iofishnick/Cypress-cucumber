@contact-us @regression
Feature: WebdriverUniversity - Contact us page

    Background: Pre conditions
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button

    Scenario: Valid contact us form submission
        And I type a first name
        And I type a last name
        And I enter an email
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid contact us form submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid contact us form submission - Using specific data
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I type a specific email address "sarah_woods101@mail.com"
        And I type a specific word "Hello 1!" and number 6788 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    # Referring to the <firstName> and '<lastName>', when we use regular expressions
    # in step definition we use {word} for a single word and {string} when we use
    # more than one (let's say adding two last names). So in our feature file we
    # need '' for the {string} expression and for the single word just <>

    Scenario Outline: Validate contact us page
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress      | comment      | message                      |
            | John      | Jones    | testJohn@test.com | Hello John!  | Thank You for your Message!  |
            | Mia       | Carter   | testMia@test.com  | This is Mia! | Thank You for your Message!  |
            | Grace     | Hudson   | testGrace         | How are you? | Error: Invalid email address |