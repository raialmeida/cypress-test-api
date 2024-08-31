require('dotenv').config()
const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    env: {
      email: process.env.EMAIL || 'rateste@qa.com.br',
      password: process.env.PASSWORD || '741852',
      allureAttachRequests: true,
      allureClearSkippedTests: true
    },
    baseUrl: 'https://serverest.dev/',
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