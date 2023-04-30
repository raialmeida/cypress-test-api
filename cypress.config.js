const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    env: {
      allureAttachRequests: true,
      allureClearSkippedTests: true
    },
    video: false,
    specPattern: "cypress/**/*.spec*",
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      allureWriter(on, config)
      return config
    }
  }
})