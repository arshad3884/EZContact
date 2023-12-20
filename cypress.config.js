const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8sbs53',
  watchForFileChanges : false,
  chromeWebSecurity : false,
  retries:{runMode:1},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://www.ezcontacts.com',
    "defaultCommandTimeout": 20000,
  },
});
