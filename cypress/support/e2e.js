import registerCypressGrep from '@cypress/grep'
registerCypressGrep()
import '@shelex/cypress-allure-plugin'
import './commands'

before(() => {
    cy.cadastrarUsuario()
})