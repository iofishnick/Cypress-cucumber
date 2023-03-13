import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import Base_PO from '../page_objects/Base_PO';
import Homepage_PO from '../page_objects/Homepage_PO';

//const url = 'https://webdriveruniversity.com/';
const basePage = new Base_PO();
const homePage = new Homepage_PO();

Given('I navigate to the WebdriverUniversity homepage', () => {
  //basePage.navigate()
  //basePage.getPageTitle()
  homePage.navigate()
  cy.log(homePage.getPageTitle())
})

When('I click on the contact us button', () => {
  //cy.get('#contact-us').invoke('removeAttr', 'target').click();
  homePage.clickOnContactUs()
})

When('I click on the login portal button', () => {
  //cy.get('#login-portal').invoke('removeAttr', 'target').click();
  //cy.clickAndOpenLink_InSameTab('#login-portal')
  homePage.clickOnLoginBtn()
})
