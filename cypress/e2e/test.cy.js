describe('test', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it('users are able to register, login and visit the liked animals page', () => {
    cy.visit('/signup');
    cy.get('input[placeholder="Введіть свій email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.visit('/liked'); 

    // login
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('not.include', '/login');
    cy.visit('/liked');  
 
    cy.visit('/');
    cy.get('header [data-testid="logout"]').click();
  });
  it('toggle heart on click to like/unlike animals', () => {
      cy.visit('/catalog');
      cy.get('[data-testid="animalCard"]').first().find('[data-testid="heart-button"]').should('have.attr', 'src', '/heartWhite.png'); 
  
      cy.get('[data-testid="animalCard"]').first().find('[data-testid="heart-button"]').click();
  
      cy.get('[data-testid="animalCard"]').first().find('[data-testid="heart-button"]').should('have.attr', 'src', '/filledHeart.png'); 
  
      cy.get('[data-testid="animalCard"]').first().find('[data-testid="heart-button"]').click();
  
      cy.get('[data-testid="animalCard"]').first().find('[data-testid="heart-button"]').should('have.attr', 'src', '/heartWhite.png');
    });

    it('show popup and then redirect to signup when they want to access liked page', () => {
      cy.visit('/');
      cy.get('header [data-testid="heartButton"').click(); 
      cy.get('[data-testid="popup"]').should('be.visible');
      cy.get('[data-testid="popup-button"]').should('be.visible');
      cy.get('[data-testid="popup-button"]').click();
      cy.url().should('include', '/signup');
    });

  it('show an error message for invalid login', () => {
    cy.visit('/login');
    
    cy.get('input[name="email"]').type('wronguser@example.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    
    cy.contains('Wrong email or password').should('be.visible');
  });
});
