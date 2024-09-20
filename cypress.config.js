require('dotenv').config()
const { defineConfig } = require('cypress')
const { allureCypress } = require("allure-cypress/reporter")
const os = require('os')
const path = require('path')
const fs = require('fs-extra')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  e2e: {
    env: {
      email: process.env.EMAIL || 'rateste@qa.com.br',
      password: process.env.PASSWORD || '741852',
    },
    video: false,
    specPattern: "cypress/**/*.spec*",
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      allureCypress(on, config, {
        environmentInfo: {
          OS: os.platform,
          OsVersion: os.version,
          Architecture: os.arch,
          NodeVersion: process.version,
        }
      })
      const file = config.env.environment || 'dev'
      return config, getConfigurationByFile(file)
    }
  }
})