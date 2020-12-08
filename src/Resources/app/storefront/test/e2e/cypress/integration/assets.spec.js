// / <reference types="Cypress" />
describe('Plugin MastoxFontAwesome Tests', () => {
    beforeEach(() => {
        cy.loginViaApi()
            .then(() => {
                cy.visit('/');
            });
    });

    it('Check preloading fonts & check files exist', () => {
        cy.server();
        cy.route({
            url: '/',
            method: 'get'
        });

        cy.get('head ')
            .find('link')
            .should($a => {
                let hrefs = $a.map((i, el) => {
                    return Cypress.$(el).attr('href')
                })

                expect(hrefs.get()).to.contain(Cypress.config().baseUrl + '/bundles/mastoxfontawesome/assets/font/fa-brands-400.woff2')
                expect(hrefs.get()).to.contain(Cypress.config().baseUrl + '/bundles/mastoxfontawesome/assets/font/fa-solid-900.woff2')
                expect(hrefs.get()).to.contain(Cypress.config().baseUrl + '/bundles/mastoxfontawesome/assets/font/fa-regular-400.woff2')
            });

        cy.request(Cypress.config().baseUrl + '/bundles/mastoxfontawesome/assets/font/fa-brands-400.woff2').then((response) => {
            expect(response.status).to.eq(200)
        });

        cy.request(Cypress.config().baseUrl + '/bundles/mastoxfontawesome/assets/font/fa-solid-900.woff2').then((response) => {
            expect(response.status).to.eq(200)
        });

        cy.request(Cypress.config().baseUrl + '/bundles/mastoxfontawesome/assets/font/fa-regular-400.woff2').then((response) => {
            expect(response.status).to.eq(200)
        });

    });
});
