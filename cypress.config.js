const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  env: {
    CYPRESS_LANG: "en" // Zet de omgevingsvariabele binnen een object
  },
  projectId: 'mihnzn',
  e2e: {
    //baseUrl: "https://testing.skillsv10.com/",
    //chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implementeer hier eventuele node event listeners
    },
  },
});
