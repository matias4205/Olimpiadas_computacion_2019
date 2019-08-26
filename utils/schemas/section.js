const joi = require('joi');
const { mongoIdSchema } = require('./general');

const createSectionSchema = joi.object({
    sectionName: joi.string().max(3).min(1).required(),
    description: joi.string().max(50).min(1).required(),
});

module.exports = {
    createSectionSchema
}