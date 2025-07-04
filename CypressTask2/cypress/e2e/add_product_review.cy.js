/// <reference types="cypress" />

describe('Verify submitting a product review', () => {
    it('verify that user can submit a review for a product successfully', () => {
        cy.visit("/");
        cy.get('.product-item').first().click();
        cy.get('#tab-label-reviews').should('be.visible');
        cy.get('#tab-label-reviews').click();
        cy.get("#Rating_5_label").click({force: true}); // Selecting 5 stars rating
        cy.get("#nickname_field").type("niveen");
        cy.get("#summary_field").type("This is a great product");
        cy.get("#review_field").type("I really like this product, it is very useful and of high quality.");
        cy.contains('button', 'Submit Review').click();
        cy.wait(2000); // Wait for the review to be submitted
        cy.get('.messages').should('contain', 'You submitted your review for moderation.');
        cy.get("#tab-label-reviews").click();
        cy.get('[itemprop="author"]').should('contain', 'niveen'); // fail, the review not added 

    });
    
});