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
    unit: joi.object({ _id: joi.string().max(5).required(), description: descriptionSchema }).required()
});

const updateUnitSchema = joi.object({
    sectionId: sectionIdSchema.required(),
    unit: joi.object({ _id: joi.string().max(5).required(), description: descriptionSchema }).required()
})

const deleteUnitSchema = joi.object({
    sectionId: sectionIdSchema.required(),
    unitId: joi.string().max(5).required()
})

module.exports = {
    sectionIdSchema,
    createSectionSchema,
    updateSectionSchema,
    createUnitSchema,
    updateUnitSchema,
    deleteUnitSchema
}