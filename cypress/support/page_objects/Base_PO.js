
class Base_PO {
    
    navigate(){
        cy.fixture("config.json").then((data)=>{
            cy.visit(data.baseUrl)
        })
    }

    getPageTitle(){
        return cy.title()
    }
}

export default Base_PO;