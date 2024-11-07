import React from 'react';
import AnimalCard from '../../components/Catalog/AnimalCard';

describe('<AnimalCard />', () => {
  it('renders', () => {
    const mockAnimal = {
      id: '1',
      name: 'Buddy',
      type: 'Dog',
      image: 'dog.jpg'
    };
    const mockToggleLiked = cy.stub().as('toggleLiked');
    cy.mount(<AnimalCard animal={mockAnimal} isLiked={false} toggleLiked={mockToggleLiked} />);

    cy.get('[data-testid="animalCard"]').should('exist');
    cy.get('img[data-testid="animal-image"]').should('have.attr', 'src', 'images/dog.jpg');
    cy.get('h3').should('contain.text', 'Buddy');
    cy.get('p').should('contain.text', 'Dog');
  });

  it('handles the like button click', () => {
    const mockAnimal = {
      id: '1',
      name: 'Buddy',
      type: 'Dog',
      image: 'dog.jpg'
    };
    const mockToggleLiked = cy.stub().as('toggleLiked');

    cy.mount(<AnimalCard animal={mockAnimal} isLiked={false} toggleLiked={mockToggleLiked} />);

    cy.get('[data-testid="heart-button"]').click();
    cy.get('@toggleLiked').should('have.been.calledOnceWith', '1');
  });
})