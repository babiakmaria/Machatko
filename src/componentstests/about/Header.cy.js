import React from 'react';
import Header from '../../components/About/Header';
import { BrowserRouter } from 'react-router-dom';

describe('<Header /> component', () => {
  beforeEach(() => {
    cy.mount(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
});

    it('renders the Header component and its structure', () => {
      cy.get('[data-testid="existingNav"]').should('exist');
      cy.get('img[alt="Logo"]').should('be.visible');
      cy.get('a[href="/"]').should('have.attr', 'href', '/');
      cy.get('a[href="/catalog"]').should('have.attr', 'href', '/catalog');
      cy.get('img[alt="login"]').should('be.visible');
      cy.get('a[href="/signup"]').should('have.attr', 'href', '/signup');
    });

    it('checks the catalog link functionality', () => {
      cy.get('a[href="/catalog"]').click();
      cy.url().should('include', '/catalog');
    });

    it('checks the login icon functionality', () => {
      cy.get('a[href="/signup"]').click();
      cy.url().should('include', '/signup');
    });

    it('header has the correct image sources', () => {
      cy.get('img[alt="Logo"]').should('have.attr', 'src').and('include', 'cat.png');
      cy.get('img[alt="login"]').should('have.attr', 'src').and('include', 'user.png');
    });
});
