import React from 'react';
import Main from '../../components/MainPage/Main';
import { BrowserRouter } from 'react-router-dom';


describe('<Main />', () => {
  beforeEach(() => {
    cy.mount(
    <BrowserRouter>
      <Main />
    </BrowserRouter>);
  
    cy.get('[data-testid="main-container"]').should('exist');
  });

  it('displays the logo text', () => {
    cy.get('h1').should('contain.text', 'MA');
    cy.get('h1').should('contain.text', 'CHAT');
    cy.get('h1').should('contain.text', 'K');
  });

  it('displays the main logo image', () => {
    cy.get('img[alt="Logo"]').should('be.visible');
  });

  it('renders the description text', () => {
    cy.get('[data-testid="cypress-text"]')
      .should('contain.text', 'ще з дитинства мрієте про тваринку')
      .and('be.visible');
  });

  it('renders the "START NOW" button with correct link', () => {
    cy.contains('START NOW').should('have.attr', 'href', '/catalog');
  });

  it('displays all paw images', () => {
    cy.get('img[alt="paw"]').should('have.attr', 'src', '/pawPink.png').and('be.visible');
    cy.get('img[alt="paw"]').should('have.attr', 'src', '/pawPink.png').and('be.visible');
    cy.get('img[alt="paw"]').should('have.attr', 'src', '/pawPink.png').and('be.visible');
    cy.get('img[alt="paw"]').should('have.attr', 'src', '/pawPink.png').and('be.visible');
    cy.get('img[alt="paw"]').should('have.attr', 'src', '/pawPink.png').and('be.visible');
    cy.get('img[alt="paw"]').should('have.attr', 'src', '/pawPink.png').and('be.visible');
  });
})