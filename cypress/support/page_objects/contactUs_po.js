import Base_PO from "./Base_PO";

class contactUs_po extends Base_PO{
    elements = {
        commentText: ()=> cy.get('textarea[name="message"]'),
        submitBtn: ()=> cy.get('[type="submit"]'),
        submissionHeaderTxt: ()=>cy.xpath("//h1|//body")
    }

    typeFirstName(firstName){
        cy.get('[name="first_name"]').type(firstName);
    }

    typeLastName(lastName){
        cy.get('[name="last_name"]').type(lastName);
    }

    typeEmail(email){
        cy.get('[name="email"]').type(email);
    }

    typeComment(comment){
        this.elements.commentText().type(comment);
    }

    submitBtn(){
        this.elements.submitBtn().click();
    }

    validateSubHeader(expectedText){
        this.elements.submissionHeaderTxt().should('contain', expectedText)
    }
}

export default contactUs_po;