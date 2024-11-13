import React from 'react'
import About from '../pages/About';
import { BrowserRouter } from 'react-router-dom';

describe('<About />', () => {
  beforeEach(() => {
    cy.mount(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  });


  it('renders About component', () => {
    cy.get('header').should('exist')
    cy.get('main').should('exist')
  })

  it('contains Header and Main components', () => {
    cy.get('header').should('be.visible')
    cy.get('main').should('be.visible')
  })
  it('renders the About photo', () => {
    cy.get('img[alt="photo of dog and his owner"]').should('exist');
    cy.get('img[alt="photo of dog and his owner"]').should('be.visible');
});
})