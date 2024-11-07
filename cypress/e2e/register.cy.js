describe('registration', () => {
  beforeEach(() => {
      cy.clearLocalStorage();
  });

  it('register a new user', () => {
      cy.visit('/signup');

      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();

      cy.url().should('include', '/');
  });

  it('log in for a user', () => {
      cy.visit('/logout'); 
      cy.visit('/login');

      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();

      cy.url().should('include', '/');
  });

  it('should show an error message for invalid login', () => {
      cy.visit('/login');

      cy.get('input[name="email"]').type('wronguser@example.com');
      cy.get('input[name="password"]').type('wrongpassword');
      cy.get('button[type="submit"]').click();

      cy.contains('Wrong email or password').should('be.visible');
  });
});
