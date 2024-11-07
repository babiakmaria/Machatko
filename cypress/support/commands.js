// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('getByTestId', (selector) => cy.get(`[data-testid="${selector}"]`));
Cypress.Commands.add('login', (email = 'test@example.com', password = 'yourpassword') => {
    cy.visit('/login');

    cy.get('[data-testid="email"]').type(email); 
    cy.get('[data-testid="password"]').type(password); 
    cy.get('[data-testid="submit"]').click(); 

    cy.url().should('include', '/');
    cy.get('[data-testid="logout"]').should('be.visible');
});
