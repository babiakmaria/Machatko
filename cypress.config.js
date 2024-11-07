const { defineConfig } = require('cypress');
const webpackConfig = require('./config/webpack.cypress.config');

module.exports = defineConfig({
    viewportWidth: 1440,
    viewportHeight: 800,
    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
            webpackConfig,
        },
        specPattern: ['src/**/*.cy.{js,jsx}'],
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config);

            on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

            return config;
        },
    },

    e2e: {
        baseUrl: 'http://localhost:4000',
        setupNodeEvents(on, config) {
            // implement node event listeners here
            return config;
        },
    },
});
