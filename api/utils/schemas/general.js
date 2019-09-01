const joi = require('joi');

const mongoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

module.exports = {
    mongoIdSchema
}