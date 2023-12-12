const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mihnzn',
  e2e: {
    baseUrl: "https://testing.skillsv10.com/",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
