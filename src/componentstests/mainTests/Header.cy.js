import React from 'react';
import Header from '../../components/MainPage/Header';
import { AuthContext } from '../../AuthWrapper';
import { MemoryRouter } from 'react-router-dom';

describe('<Header />', () => {
    let mockLogout;

    const renderHeaderWithAuth = (isAuthenticated) => {
        mockLogout = cy.stub();

        const contextValue = {
            currentUser: { isAuthenticated },
            logout: mockLogout,
        };
        cy.mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </AuthContext.Provider>,
        );
    };

    it('renders without crashing when user is not authenticated', () => {
        renderHeaderWithAuth(false);

        cy.get('nav').should('exist');
        cy.get('[data-testid="logout"]').should('not.exist');
    });

    it('renders with logout button when user is authenticated', () => {
        renderHeaderWithAuth(true);

        cy.get('nav').should('exist');
        cy.get('[data-testid="logout"]').should('exist');
    });
});
