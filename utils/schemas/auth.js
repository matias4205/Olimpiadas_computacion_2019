const joi = require('joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const userEmailSchema = joi.string().regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/im).required();
const userPasswordSchema = joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/).required();

const registerUserSchema = joi.object({
    firstName: joi.string().max(15).min(2).required(),
    lastName: joi.string().max(15).min(2).required(),
    role: joi.string().valid('administrator', 'operator').required(),
    email: userEmailSchema,
    password: userPasswordSchema
})

module.exports = {
    userIdSchema,
    userEmailSchema,
    userPasswordSchema,
    registerUserSchema
}