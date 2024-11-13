import React from 'react';
import Catalog from '../pages/Catalog';
import { BrowserRouter } from 'react-router-dom';
import {AuthContext} from '../AuthWrapper';

describe('<Catalog /> Component', () => {
  beforeEach(() => {
    const mockCurrentUser = { name: 'Test User' };
    cy.mount(
      <AuthContext.Provider value={{ currentUser: mockCurrentUser, dispatch: () => {} }}>
        <BrowserRouter>
          <Catalog likedAnimals={[]} toggleLiked={() => {}} />
        </BrowserRouter>
      </AuthContext.Provider>
    );
  });

  it('renders the Catalog component', () => {
    cy.get('header').should('exist');
    cy.get('main').should('exist');
  });

  it('passes searchTerm and setSearchTerm props to Header', () => {
    cy.get('header').within(() => {
      cy.get('input').should('have.value', '');
    });
  });

  it('passes props to Main', () => {
    cy.get('main').within(() => {
      cy.get('[data-testid="animalCard"]').should('be.visible');
    });
  });

  it('calls toggleLiked when clicking on like button', () => {
    const toggleLikedSpy = cy.spy();
    cy.mount(
      <AuthContext.Provider value={{ currentUser: { name: 'Test User' }, dispatch: () => {} }}>
        <BrowserRouter>
          <Catalog likedAnimals={[]} toggleLiked={toggleLikedSpy} />
        </BrowserRouter>
      </AuthContext.Provider>
    );
    cy.get('[data-testid="heart-button"]').first().click();
    cy.wrap(toggleLikedSpy).should('have.been.called');
  });
});
