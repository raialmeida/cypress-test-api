Cypress.Commands.add('autenticar', () => {
    cy.request({
        log: false,
        method: 'POST',
        url: 'login',
        body: {
            email: Cypress.env('email'),
            password: Cypress.env('password')
        },
        failOnStatusCode: false,
    }).then((response) => {
        cy.wrap(response.body.authorization, { log: false }).as('token')
    })
})

Cypress.Commands.add('excluirProduto', () => {
    cy.get('@idProduto', { log: false }).then((idProduto) => {
        cy.get('@token', { log: false }).then((token) => {
            cy.request({
                log: false,
                method: 'DELETE',
                url: `produtos/${idProduto}`,
                headers: {
                    'Authorization': token,
                },
                failOnStatusCode: false
            })
        })
    })
})