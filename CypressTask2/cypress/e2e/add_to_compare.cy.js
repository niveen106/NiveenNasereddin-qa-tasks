/// <reference types="cypress" />

describe('Add to Compare', () => {
    it('verify that user can add a product to compare', () => {
        cy.visit("/");
        cy.get('.product-item').first().click();
        cy.get('.product-social-links').contains('Add to Compare').click();
        cy.get('.messages').should('contain', 'You added product Radiant Tee to the comparison list.');
        cy.get('.messages').contains("comparison list").click();
        cy.url().should('include', 'catalog/product_compare/');
        cy.get('.page-title').should('contain', 'Compare Products');
        cy.get('td .product-item-name').should('contain', 'Radiant Tee');
    });
});