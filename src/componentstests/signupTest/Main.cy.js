import React from 'react';
import Main from '../../components/SignUp/Main';
import { BrowserRouter } from 'react-router-dom';
import * as firebaseAuth from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import * as firebaseFirestore from 'firebase/firestore';

describe('<Main />', () => {

  let navigate;
  beforeEach(() => {
    navigate = cy.stub();
    cy.stub(require('react-router-dom'), 'useNavigate').returns(navigate);
    cy.stub(firebaseAuth, 'createUserWithEmailAndPassword').resolves({ user: { uid: 'test-uid', email: 'test@x.com' } });
    cy.stub(firebaseFirestore, 'setDoc').resolves();

    cy.mount(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  });

  it('renders', () => {
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').contains('зареєструватись');
  });

  it('handles input changes', () => {
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');

    cy.get('input[name="name"]').should('have.value', 'Test User');
    cy.get('input[name="email"]').should('have.value', 'test@example.com');
    cy.get('input[name="password"]').should('have.value', 'password123');
  });

  it('displays an error message on registration failure', () => {
    cy.stub(firebaseAuth, 'createUserWithEmailAndPassword').rejects(new Error('Registration failed'));

    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    cy.get('[data-testid="errorMessage"]').should('exist');
  });
})