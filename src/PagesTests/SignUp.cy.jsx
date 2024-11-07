import React from 'react';
import SignUp from '../pages/SignUp';
import { BrowserRouter } from 'react-router-dom';

describe('<SignUp /> Component', () => {
  beforeEach(() => {
    cy.mount(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter> 
    );
  });

  it('renders the SignUp component', () => {
    cy.get('form').should('exist');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('accepts user input', () => {
    cy.get('input[name="name"]').type('John Doe').should('have.value', 'John Doe');
    cy.get('input[name="email"]').type('johndoe@example.com').should('have.value', 'johndoe@example.com');
    cy.get('input[name="password"]').type('password123').should('have.value', 'password123');
  });

  it('displays an error message', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('invalid-email-format');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid="errorMessage"]').should('exist').and('contain', 'auth/invalid-email');
  });
});
