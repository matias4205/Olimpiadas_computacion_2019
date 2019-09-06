const joi = require('joi');

const sectionIdSchema = joi.string().max(3).min(1);
const descriptionSchema = joi.string().max(50).allow('').optional();

const createSectionSchema = joi.object({
    sectionName: sectionIdSchema.required(),
    description: descriptionSchema
});

const updateSectionSchema = joi.object({
    description: descriptionSchema
});

const createUnitSchema = joi.object({
    sectionName: sectionIdSchema.required(),
    unit: joi.object({ unitName: joi.string().max(5).required(), description: descriptionSchema }).required()
});

const updateUnitSchema = joi.object({
    sectionName: sectionIdSchema.required(),
    unit: joi.object({ unitName: joi.string().max(5).required(), description: descriptionSchema }).required()
})

const deleteUnitSchema = joi.object({
    sectionName: sectionIdSchema.required(),
    unitName: joi.string().max(5).required()
});

module.exports = {
    sectionIdSchema,
    createSectionSchema,
    updateSectionSchema,
    createUnitSchema,
    updateUnitSchema,
    deleteUnitSchema
}