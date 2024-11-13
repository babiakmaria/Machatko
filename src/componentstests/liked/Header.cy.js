import React from 'react';
import Header from '../../components/Liked/Header';
import { BrowserRouter } from 'react-router-dom';

describe('<Header />', () => {
  it('renders', () => {
    cy.mount(
      <BrowserRouter>
      <Header /> 
      </BrowserRouter>
      );
      cy.get('img[alt="Logo"]').should('exist');
    cy.contains('Каталог').should('exist');
    cy.contains('Про нас').should('exist');
    cy.get('img[alt="login"]').should('exist');
  });
  it('navigates to the correct pages', () => {
    cy.mount(
      <BrowserRouter initialEntries={['/']}>
        <Header />
      </BrowserRouter>
    );

    cy.contains('Каталог').click();
    cy.location('pathname').should('eq', '/catalog'); 

    cy.contains('Про нас').click();
    cy.location('pathname').should('eq', '/about'); 

    cy.get('img[alt="login"]').parent().click();
    cy.location('pathname').should('eq', '/signup'); 
  });
});