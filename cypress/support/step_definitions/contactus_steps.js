import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

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
