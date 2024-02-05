const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 60000,
  projectId: 'mihnzn',
  e2e: {
    //baseUrl: "https://testing.skillsv10.com/",
    //chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
