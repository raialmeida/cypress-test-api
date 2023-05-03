Cypress.Commands.add('autenticar', () => {
    cy.request({
        log: false,
        method: 'POST',
        url: 'login',
        body: {
            email: 'rateste@qa.com.br',
            password: '741852'
        },
        failOnStatusCode: false,
    }).then((response) => {
        cy.wrap(response.body.authorization, { log: false }).as('token')
    })
})