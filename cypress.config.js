const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8sbs53',
  watchForFileChanges : false,
  chromeWebSecurity : false,
  retries:{runMode:1},
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'EZContact Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl : 'https://www.ezcontacts.com',
    "defaultCommandTimeout": 20000,
  },
});
