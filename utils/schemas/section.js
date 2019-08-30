const joi = require('joi');

const sectionIdSchema = joi.string().max(3).min(1);
const descriptionSchema = joi.string().max(50).allow('').optional();

const createSectionSchema = joi.object({
    _id: sectionIdSchema.required(),
    description: descriptionSchema
});

const updateSectionSchema = joi.object({
    description: descriptionSchema
});

const createUnitSchema = joi.object({
    sectionId: sectionIdSchema.required(),
    unit: joi.object({ _id: joi.string().max(2).required(), description: descriptionSchema }).required()
});

const updateUnitSchema = joi.object({
    sectionId: sectionIdSchema.required(),
    unit: joi.object({ _id: joi.string().max(2).required(), description: descriptionSchema }).required()
})

module.exports = {
    sectionIdSchema,
    createSectionSchema,
    updateSectionSchema,
    createUnitSchema,
    updateUnitSchema
}