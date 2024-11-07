import React from 'react';
import Main from '../../components/Catalog/Main';

describe('<Main />', () => {
    it('renders', () => {
        cy.mount(<Main searchTerm="" likedAnimals={[]} toggleLiked={() => {}} />);
        cy.get('main').should('exist');
    });

    it('displays animal cards', () => {
        cy.mount(<Main searchTerm="" likedAnimals={[]} toggleLiked={() => {}} />);

        cy.get('[data-testid="animalCard"]').should('be.visible');
    });
    it('checks if images load properly', () => {
        cy.mount(<Main searchTerm="" likedAnimals={[]} toggleLiked={() => {}} />);

        cy.get('[data-testid="animal-image"]').each(($img) => {
            cy.wrap($img).should('be.visible');
        });
    });
});
