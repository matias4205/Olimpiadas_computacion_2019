const joi = require('joi');

const descriptionSchema = joi.string().max(50).allow('').optional();

const createSectionSchema = joi.object({
    sectionName: joi.string().max(3).min(1).required(),
    description: descriptionSchema
});

const updateSectionSchema = joi.object({
    sectionName: joi.string().max(3).min(1),
    description: descriptionSchema,
    units: joi.array().items(joi.object({
        unitName: joi.string(),
        description: descriptionSchema
    }))
});

module.exports = {
    createSectionSchema,
    updateSectionSchema
}