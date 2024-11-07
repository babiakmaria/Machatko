import React from 'react';
import Header from '../../components/Catalog/Header';
import { AuthContext } from '../../AuthWrapper';
import { BrowserRouter } from 'react-router-dom';

describe('<Header />', () => {
    beforeEach(() => {
        cy.mount(
            <AuthContext.Provider value={{ currentUser: { name: 'Test User' } }}>
                <BrowserRouter>
                    <Header searchTerm="" setSearchTerm={() => {}} />
                </BrowserRouter>
            </AuthContext.Provider>,
        );
    });

    it('renders the header and logo icons', () => {
        cy.get('header').should('exist');
        cy.get('img[src="/circle.png"]').should('be.visible');
        cy.get('img[src="/cat.png"]').should('be.visible').and('have.attr', 'alt', 'Logo');
    });

    it('displays the search bar', () => {
        cy.get('form').should('be.visible');
        cy.get('input[type="search"]').should('have.attr', 'placeholder', 'шукати...');
    });

    it('signup/login icon and link', () => {
        cy.get('a[href="/signup"]').should('exist');
        cy.get('img[src="/userPink.png"]').should('be.visible').and('have.attr', 'alt', 'login');
    });
});
