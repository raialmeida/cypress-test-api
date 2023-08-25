/// <reference types="cypress" />
/**
 * @param {object} payload body produtos obrigatório
 */
export function postProdutos(payload) {
    cy.autenticar()
    return cy.get('@token').then((token) => {
        cy.request({
            method: 'POST',
            url: 'produtos',
            body: payload,
            headers: {
                'Authorization': token,
            },
            failOnStatusCode: false,
        })
    })
}