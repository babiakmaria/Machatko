import React from 'react';
import Popup from '../../components/Liked/Popup';
import { BrowserRouter } from 'react-router-dom';

describe('<Popup />', () => {
    let togglePopup;
    let navigate;
    beforeEach(() => {
        togglePopup = cy.stub();
        navigate = cy.stub();
        cy.stub(require('react-router-dom'), 'useNavigate').returns(navigate);
        cy.mount(
            <BrowserRouter>
                <Popup togglePopup={togglePopup} />
            </BrowserRouter>,
        );
    });

    it('renders correctly', () => {
        cy.get('[data-testid="popup"]').should('have.text', 'Oops');
    });

    it('closes the popup when the close button is clicked', () => {
        cy.get('a').click();
        cy.wrap(togglePopup).should('have.been.called');
    });

    it('redirects to signup page when the "клік" button is clicked', () => {
        cy.get('button').contains('клік').click();
        cy.wrap(togglePopup).should('have.been.called');
        cy.url().should('include', '/signup');
    });
});
