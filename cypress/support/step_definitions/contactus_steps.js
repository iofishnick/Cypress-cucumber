import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Valid contact us form submission
When("I type a first name", () => {
  cy.get('[name="first_name"]').type("io");
});

When("I type a last name", () => {
  cy.get('[name="last_name"]').type("Fish");
});

When("I enter an email", () => {
  cy.get('[name="email"]').type("yiannispsaros@gmail.com");
});

When("I type a comment", () => {
  cy.get('textarea[name="message"]').type("This is a test comment");
});

When("I click on the submit button", () => {
  cy.get('[type="submit"]').click();
});

Then(
  "I should be presented with a successful contact us submission message",
  () => {
    cy.get("#contact_reply").should("contain", "Thank You for your Message!");
  }
);

// Scenario: Invalid contact us form submission
Then(
  "I should be presented with a unsuccessful contact us submission message",
  () => {
    cy.get("body").contains("Error: Invalid email address");
  }
);

// Scenario: Valid contact us form submission - Using specific data
When("I type a specific first name {string}", (firstName) => {
  cy.get('[name="first_name"]').type(firstName);
});

When("I type a specific last name {string}", (lastName) => {
  cy.get('[name="last_name"]').type(lastName);
});

When("I type a specific email address {string}", (email) => {
  cy.get('[name="email"]').type(email);
});

When(
  "I type a specific word {string} and number {int} within the comment input field",
  (comment, number) => {
    cy.get('textarea[name="message"]').type(comment + ' ' + number);
  }
);
