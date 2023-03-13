import Base_PO from './Base_PO'

class Homepage_PO extends Base_PO {
    navigateToHomepage(){
        super.navigate()
    }

    getPageTitle(){
        super.getPageTitle()
    }

    clickOnContactUs(){
        cy.clickAndOpenLink_InSameTab('#contact-us')
    }

    clickOnLoginBtn(){
        cy.clickAndOpenLink_InSameTab('#login-portal')
    }
}

export default Homepage_PO;