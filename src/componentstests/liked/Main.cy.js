import React from 'react';
import Main from '../../components/Liked/Main';

describe('<Main />', () => {
    const mockAnimals = [
        { id: '1', name: 'Buddy', type: 'Dog', image: 'dog.jpg' },
        { id: '2', name: 'Whiskers', type: 'Cat', image: 'cat.jpg' },
    ];

    it('renders', () => {
      const mockToggleLiked = cy.stub().as('toggleLiked');
        cy.mount(<Main animals={mockAnimals} likedAnimals={['1', '2']} toggleLiked={mockToggleLiked} />);

        cy.get('[data-testid="likedList"]').should('exist');
        cy.get('[data-testid="animalCard"]')
            .first()
            .within(() => {
                cy.get('h3').should('contain.text', 'Buddy');
                cy.get('p').should('contain.text', 'Dog');
                cy.get('img[data-testid="animal-image"]').should('have.attr', 'src', 'images/dog.jpg');
            });

        cy.get('[data-testid="animalCard"]')
            .last()
            .within(() => {
                cy.get('h3').should('contain.text', 'Whiskers');
                cy.get('p').should('contain.text', 'Cat');
                cy.get('img[data-testid="animal-image"]').should('have.attr', 'src', 'images/cat.jpg');
            });
    });

    it('doesn`t render AnimalCard when likedAnimals is empty', () => {
      const mockToggleLiked = cy.stub().as('toggleLiked');
        cy.mount(<Main animals={mockAnimals} likedAnimals={[]} toggleLiked={mockToggleLiked} />);
        cy.get('[data-testid="likedList"]').should('exist');
        cy.get('[data-testid="animalCard"]').should('not.exist');
    });
});
