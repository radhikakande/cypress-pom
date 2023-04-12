class MetroPage {

    constructor () {
        this.title = 'New York Restaurant Reviews - The Infatuation'
        this.pageUrl = '/new-york'
    }

    visit () {
        cy.visit('https://www.theinfatuation.com/new-york')
    }
    getCities () {
        return cy.get('[data-testid="mainNavigationDesktop-citiesButton"]')
    }

    getSubsections () {
        return cy.get('[data-testid="sectionNavigationDesktop-subsections"]')
    }

    getFindaPlace () {
        return  cy.get('[data-testid="searchButton-findPlace"]')
    }

    getSignup () {
        return cy.get('[class="chakra-button css-1jmc86b"]')
    }

    getCitiesListButton () {
        return cy.get('[data-testid="mainNavigationDesktop"]').find('button').first()
    }

    getCitiesPopup () {
        return cy.get('[data-testid="cityList-cities"]')
    }

    getNeighborhoods () {
        return cy.get('[data-testid="sectionNavigationDesktop-subsections"]').filter(':contains("Neighborhoods")')
    }

    getPopup () {
        return cy.get('[id="popover-content-5"]')
    }

    getPerfectFors() {
        return cy.get('[data-testid="sectionNavigationDesktop-subsections"]').filter(':contains("Perfect Fors")')
    }

    getPerfectForPopup () {
        return cy.get('[class="chakra-popover__popper css-ea3ywj"]')
    }

    getCuisines() {
        return cy.get('[data-testid="sectionNavigationDesktop-subsections"]').filter(':contains("Cuisines")')
    }

    getCuisinesPopup () {
        return cy.get('[class="chakra-popover__popper css-ea3ywj"]')
    }

    getGuides () {
        return cy.get('[data-testid="sectionNavigationDesktop-subsections"]').filter(':contains("Guides")')
    }

    getReviews () {
        return cy.get('[data-testid="sectionNavigationDesktop-subsections"]').filter(':contains("Reviews")')
    } 

    



}

module.exports = MetroPage