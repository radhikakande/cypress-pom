import MetroPage from "../pageObjects/metroPage";
import FinderPage from "../pageObjects/finderPage";
import ReviewsPage from "../pageObjects/reviewsPage";
import GuidesPage from "../pageObjects/guidesPage";


const metro = new MetroPage ()
const finder = new FinderPage ()
const reviews = new ReviewsPage ()
const guides = new GuidesPage ()

describe('infatuation test spec', () => {

    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })
      metro.visit()        
    })
    context ( "Validations on the home page", () => {
      it('navgate to infatuation site and verify title and url', () => {
        cy.url().should('include', metro.pageUrl)
        cy.title().should('include', metro.title)
      })
  
      it('assert top menu or navigation links', () => {
        metro.getCities().should('be.visible')
        metro.getSubsections().should('have.length', 5)
        metro.getFindaPlace().should('be.visible')
        metro.getSignup().should('be.visible')
      })
  
      it('assert cities or major metros list shows up', () => {  
        metro.getCitiesListButton().click()
        metro.getCitiesPopup().should('be.visible')
      })
  
      it('assert neighborhoods ', () => {
        metro.getNeighborhoods().click()
        metro.getPopup().should('be.visible')
      })
  
      it('assert perfect fors ', () => {
        metro.getPerfectFors().click()
        metro.getPerfectForPopup().should('be.visible')
      })
  
      it('assert cuisines ', () => {
        metro.getCuisines().click()
        metro.getCuisinesPopup().should('be.visible')
      })
  
      it('assert guides ', () => {
        metro.getGuides().click()
        cy.url().should('include', guides.pageUrl)
      })
  
      it('assert reviews ', () => {
        metro.getReviews().click()
        cy.url().should('include', reviews.pageUrl)
      })
  
      it('navgate to infatuation Find a Place', () => {
        metro.getFindaPlace().click()
        cy.url().should('include', finder.pageUrl)
      })
    })
}) 