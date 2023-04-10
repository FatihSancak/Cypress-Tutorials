const { defineConfig } = require("cypress");

module.exports = defineConfig({

  chromeWebSecurity: false,
  projectId: "mbq7a4",


  reporter: "mochawesome",
  reporterOptions: {
    "reportDir": "cypress/reports",
    "reportFilename": "report",
    "overwrite": false,
    "html": true,
    "json": true,
    "charts": true
  },
   video: false,



  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
