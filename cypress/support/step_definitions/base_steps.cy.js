import { When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(()=>{
    cy.log('Executes test scenarios')
    cy.clearAllLocalStorage()
})

Before({tags: '@smoke'},()=>{
    cy.log('Executing smoke pack')
})

After(()=>{
    cy.log('Finished executing the test scenario')
})

When('I wait for {int} seconds', (seconds)=>{
    cy.wait(seconds * 1000)
})