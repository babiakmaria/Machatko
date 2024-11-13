describe('Liked Animals Page', () => {
    beforeEach(() => {
        cy.visit('/catalog');
        cy.get('[data-testid="animalCard"]').first().find('[data-testid="heart-button"]').click();
    });

    it('should display liked animals for authenticated users', () => {
        cy.login();
        cy.get('[data-testid="animalCard"]').first().find('[data-testid="heart-button"]').click();
        cy.visit('/liked');
        cy.get('[data-testid="likedList"]').should('be.visible');
        cy.get('[data-testid="animalCard"]').should('have.length.greaterThan', 0);
    });
    it('should redirect to sign up for unauthenticated users', () => {
      cy.visit('/liked'); 
      cy.url().should('include', '/signup');
  });
});
