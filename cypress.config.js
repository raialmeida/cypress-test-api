require('dotenv').config()
const { defineConfig } = require('cypress')
const { allureCypress } = require("allure-cypress/reporter")
const os = require('os');

module.exports = defineConfig({
  e2e: {
    env: {
      email: process.env.EMAIL || 'rateste@qa.com.br',
      password: process.env.PASSWORD || '741852',
    },
    baseUrl: 'https://serverest.dev/',
    video: false,
    specPattern: "cypress/**/*.spec*",
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      allureCypress(on, {
        environmentInfo: {
          OS: os.platform,
          OsVersion: os.version,
          Architecture: os.arch,
          NodeVersion: process.version,
          UrlAPI: config.baseUrl,
        }
      })
      return config
    }
  }
})