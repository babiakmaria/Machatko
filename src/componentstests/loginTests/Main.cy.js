import React from 'react';
import Main from '../../components/Login/Main';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../AuthWrapper'; 

describe('<Main />', () => {
    let mocklogin;
    beforeEach(() => {
        mocklogin = cy.stub().as('login');
        cy.mount(
            <BrowserRouter>
                <AuthContext.Provider value={{ login: mocklogin }}>
                    <Main />
                </AuthContext.Provider>
            </BrowserRouter>,
        );
    });

    it('renders the form', () => {
        cy.get('form').should('exist');
    });
    it('contains input fields and a submit button', () => {
        cy.get('input[placeholder="Введіть свій email"]').should('exist');
        cy.get('input[placeholder="Введіть пароль"]').should('exist');
        cy.get('[data-testid="submit"]').should('exist');
    });

    it('allows the user to input email and password', () => {
        cy.get('input[placeholder="Введіть свій email"]')
            .type('test@example.com')
            .should('have.value', 'test@example.com');
        cy.get('input[placeholder="Введіть пароль"]')
            .type('password123')
            .should('have.value', 'password123');
    });
});
 