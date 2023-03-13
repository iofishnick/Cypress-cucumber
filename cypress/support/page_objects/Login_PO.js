import Base_PO from "./Base_PO";

class login_po extends Base_PO{
    typeUsername(username) {
        cy.get('#text').type(username)
    }

    typePassword(password) {
        cy.get('#password').type(password)
    }

    clickOnLoginBtn() {
        cy.get('#login-button').click()
    }
}

export default login_po;