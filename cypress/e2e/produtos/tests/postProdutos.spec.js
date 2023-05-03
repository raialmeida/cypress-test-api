/// <reference types="cypress" />

import * as request from '../requests/postProdutos.request'
import * as schema from '../schema/postProdutosSchema'
import * as payload from '../payloads/postProdutos.payload.json'

describe('POST - Validar endpoint produtos', { tags: '@smoke' }, () => {

    it('Validar criação de produtos com sucesso', () => {
        request.postProdutos(payload.body).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).is.not.empty
        })
    })

    it('Validar schema response', () => {
        request.postProdutos(payload.body).then((response) => {
            return schema.postProdutos.validateAsync(response.body)
        })
    })
})