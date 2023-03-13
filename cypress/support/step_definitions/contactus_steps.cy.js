import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import contactUs_po from '../page_objects/contactUs_po'

const contactUs = new contactUs_po();

// Scenario: Valid contact us form submission
When('I type a first name', () => {
  contactUs.typeFirstName('io')
  //cy.get('[name='first_name']').type('io');
})

When('I type a last name', () => {
  contactUs.typeLastName('Fish')
  //cy.get('[name="last_name"]').type('Fish');
})

When('I enter an email', () => {
  contactUs.typeEmail('yiannispsaros@gmail.com')
  //cy.get('[name="email"]').type('yiannispsaros@gmail.com');
})

When('I type a comment', () => {
  contactUs.typeComment('This is a comment')
  //cy.get('textarea[name="message"]').type('This is a test comment');
})

When('I click on the submit button', () => {
  contactUs.submitBtn();
  //cy.get('[type='submit']').click();
})

Then('I should be presented with a successful contact us submission message', () => {
  contactUs.validateSubHeader('Thank You for your Message!')
  //cy.get('h1').should('contain', 'Thank You for your Message!')
})

// Scenario: Invalid contact us form submission
Then('I should be presented with a unsuccessful contact us submission message', () => {
  contactUs.validateSubHeader('Error: Invalid email address')
  //cy.get('body').should('contain', 'Error: Invalid email address')
})

// Scenario: Valid contact us form submission - Using specific data
When('I type a specific first name {string}', (firstName) => {
  contactUs.typeFirstName(firstName)
  //cy.get('[name='first_name']').type(firstName);
})

When('I type a specific last name {string}', (lastName) => {
  contactUs.typeLastName(lastName)
  //cy.get('[name='last_name']').type(lastName);
})

When('I type a specific email address {string}', (email) => {
  contactUs.typeEmail(email)
  //cy.get('[name='email']').type(email);
})

When('I type a specific word {string} and number {int} within the comment input field', (comment, number) => {
  cy.get('textarea[name="message"]').type(comment + ' ' + number)
})

// Scenario Outline: Validate contact us page
When('I type a first name {word} and a last name {string}', (firstName, lastName) => {
  contactUs.typeFirstName(firstName)
  contactUs.typeLastName(lastName)
  //cy.get('[name='first_name']').type(firstName);
  //cy.get('[name='last_name']').type(lastName);
})

When('I type a {string} and a comment {string}', (email, comment) => {
  contactUs.typeEmail(email)
  contactUs.typeComment(comment)
  //cy.get('[name='email']').type(email);
  //cy.get('textarea[name='message']').type(comment);
})

Then('I should be presented with header text {string}', (message) => {
  contactUs.validateSubHeader(message)
  //cy.xpath('//h1|//body').contains(message);
})
