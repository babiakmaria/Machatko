import React from 'react';
import Liked from '../pages/Liked';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../AuthWrapper';

describe('<Liked />', () => {
    const animals = [
        { id: '1', name: 'Bella', species: 'Dog' },
        { id: '2', name: 'Milo', species: 'Cat' },
    ];
    const likedAnimals = ['1'];
    let toggleLiked;

    const likedComponent = (isAuthenticated, currentUser) => {
        cy.stub(require('../hooks/useAuthStatus'), 'default').returns(isAuthenticated);

        cy.mount(
            <BrowserRouter>
                <AuthContext.Provider value={{ currentUser, isAuthenticated }}>
                    <Liked animals={animals} likedAnimals={likedAnimals} toggleLiked={toggleLiked} />
                </AuthContext.Provider>
            </BrowserRouter>,
        );
    };
    beforeEach(() => {
        toggleLiked = cy.stub();
    });
    it('renders content when the user is authenticated', () => {
        const currentUser = { id: '123', name: 'Test User' };
        likedComponent(true, currentUser);

        cy.get('header').should('exist');
        cy.get('[data-testid="likedList"]').should('exist');
    });
});
