describe('login and logout', () => {
  beforeEach(() => {
      cy.visit('/login');
  });

  it('display the logout button after successful login', () => {
      cy.login();
      cy.visit('/'); 

      cy.get('[data-testid="logout"]').should('exist'); 
  });

  it('should log out and show success message', () => {
      cy.login(); 
      cy.get('[data-testid="logout"]').click(); 
      cy.get('.successMessage').should('be.visible'); 
  });
});
