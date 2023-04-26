export class AccessoriesPage{
    get searchIcon() {
        return cy.get('div[data-test="header-search"]');
    }

    get searchInput() {
        return cy.get('input[aria-label="Search the Google Store"]')
    }

    performSearch(productToSearch){
        this.searchIcon.click();
        this.searchInput.type(`${productToSearch}{enter}`);
    }

    openUrl() {
        cy.visit(`${Cypress.env('googleUrl')}/collection/accessories_wall?hl=en-US`)
    }
}