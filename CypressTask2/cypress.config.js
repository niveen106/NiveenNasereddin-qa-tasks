const { reporters } = require("mocha");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://magento.softwaretestingboard.com/',
    screenshotsFolder: 'My Screenshots',
    trashAssetsBeforeRuns: true,
    video: true,
    videoFolder: 'My Videos',
    reporter:"mochawesome",
    reporterOptions: {
      reportDir: 'cypress/MyReports',
      overwrite: false,
      html: true,
      json: false,
      timestamp: 'mmddyyyy_HHMMss',
    },
  },
};
