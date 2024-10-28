describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://localhost:4000/');

        cy.get('[data-testid="cypress-text"]').should('exist');
    });
});
