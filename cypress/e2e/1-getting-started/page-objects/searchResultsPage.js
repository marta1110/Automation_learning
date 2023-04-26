export class SearchResultsPage{
    get searchIcon() {
        return cy.get('div[data-test="header-search"]');
    }

    getProductByDocId(docId){
        return cy.get(`a[href="/product/${docId}"]`);
    }
}