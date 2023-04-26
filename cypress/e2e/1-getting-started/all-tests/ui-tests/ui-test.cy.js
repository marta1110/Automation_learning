import {AccessoriesPage} from "../../page-objects/accessoriesPage.js"
import {SearchResultsPage} from "../../page-objects/searchResultsPage.js"
describe('ui-test', () => {
const page = new AccessoriesPage()
  // it('Positive: create user', () => {
  //   cy.visit("https://store.google.com/us/collection/accessories_wall?hl=en-US")
  //   cy.get('div[data-test="header-search"]').click()
  //   cy.get('input[aria-label="Search the Google Store"]').type(`Google Pixel Buds{enter}`)
  //   cy.get('a[href="/product/google_pixel_buds"]').should('exist')
  //     })



  it('Positive: create user', () => {
      cy.log("GIVEN User is at Accessories Page")
    page.openUrl()

      cy.log("WHEN User performs search product by name")
    page.performSearch("Google Pixel Buds")
      new SearchResultsPage().getProductByDocId("google_pixel_buds")
          .should('exist')
  })
})