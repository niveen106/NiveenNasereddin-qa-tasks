/// <reference types="cypress" />

describe('Add to Wishlist', () => {
    before(() => {
        // login before running the tests
        cy.visit("/customer/account/login/");
        cy.get('#email').type('userniveen@gmail.com');
        cy.get('#pass').type('e##a.TAsW6PF49J');
        cy.get('#send2').click();
        cy.url().should('include', '/customer/account/');
        cy.get(".page-title").should('contain', 'My Account');
        cy.get('.logo').click();
    });
    it('verify that user can add a product to the wishlist', () => {
        cy.get('.product-item').first().click();
        cy.get('.towishlist').contains('Add to Wish List').click();
        cy.url().should('include','/wishlist/index/index/wishlist_id/');
        cy.get('.page-title').should('contain', 'My Wish List');
        cy.get('.messages').should('contain', 'Radiant Tee has been added to your Wish List. Click here to continue shopping.');
        cy.get('.product-item').should('contain', 'Radiant Tee');
        cy.screenshot({capture: 'fullPage'});
    });
});