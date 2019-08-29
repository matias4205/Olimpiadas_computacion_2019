const joi = require('joi');
const { mongoIdSchema } = require('./general');

const userEmailSchema = joi.string().regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/im);
const userPasswordSchema = joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/);

const createUserSchema = joi.object({
    firstName: joi.string().max(15).min(2).required(),
    lastName: joi.string().max(15).min(2).required(),
    productorId: mongoIdSchema.required(),
    role: joi.string().valid('administrator', 'operator').required(),
    scopes: joi.array().min(1).items(joi.string().regex(/^([a-z]+):([a-z]+)$/)),
    email: userEmailSchema.required(),
    password: userPasswordSchema.required()
});

const updateUserSchema = joi.object({
    firstName: joi.string().max(15).min(2).required(),
    lastName: joi.string().max(15).min(2).required(),
    productorId: mongoIdSchema.required(),
    role: joi.string().valid('administrator', 'operator').required(),
    scopes: joi.array().min(1).items(joi.string().regex(/^([a-z]+):([a-z]+)$/)),
    email: userEmailSchema.required(),
    password: userPasswordSchema
});

module.exports = {
    userEmailSchema,
    userPasswordSchema,
    createUserSchema,
    updateUserSchema
}