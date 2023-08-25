import Joi from 'joi'
/**
 * Schema POST do endpoint produtos
 */
export const postProdutos = Joi.object().keys({
    message: Joi.string().required(),
    _id: Joi.string().required()
})