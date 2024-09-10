const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()
import 'allure-cypress'
import './commands'

before(() => {
    cy.cadastrarUsuario()
})