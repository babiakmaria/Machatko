import React from 'react';
import Main from '../../components/About/Main';
import { BrowserRouter } from 'react-router-dom';

describe('<Main />', () => {
    beforeEach(() => {
        cy.mount(
            <BrowserRouter>
                <Main />
            </BrowserRouter>,
        );
    });

    it('confirms that text content', () => {
        cy.get('[data-testid="text1"]').contains(
            'Проєкт створюється для підтримки притулків за допомогою функції перегляду тварин та прогулянок з ними.',
        );
        cy.get('[data-testid="text2"]').contains(
            'Нашою метою є показати те, що тварини з притулку не такі страшні як їх уявляють люди і те, що вони так само потребують любові',
        );
    });
    it('image is visible', () => {
        cy.get('img[alt="photo of dog and his owner"]').should('be.visible').and('have.attr', 'src', 'aboutUs.png');
    });
});
