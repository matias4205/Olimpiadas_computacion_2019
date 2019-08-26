const joi = require('joi');

const registerProductorSchema = joi.object({
    comercialDenomination: joi.string().max(15).min(2).required(),
    ownerCompany: joi.string().max(15).min(2).required(),
    fiscalCode: joi.string().required(),
    address: joi.string().required()
})

module.exports = {
    registerProductorSchema
}