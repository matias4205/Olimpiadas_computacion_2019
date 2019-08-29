const router = require('express').Router();
const passport = require('passport');
const boom = require('boom');
const jwt = require('jsonwebtoken');

const { adminConfig } = require('../../config');
const { createUserSchema } = require('../../utils/schemas/user');
const validationHandler = require('../../utils/middlewares/validationHandler');
const UserService = require('../../services/user');
const userService = new UserService();
//Basic strategy
require('../../utils/strategies/basic');

router.post('/sign-in', (req, res, next) => {
    passport.authenticate('basic', (err, user) => {
        if (err || !user){
            next(boom.unauthorized());
        }

        req.logIn(user, { session: false }, (error) => { //Inicia sesion con el usuario dado, si hay error lo reporta sin el boom
            if (error) {
                next(error);
            }
            
            const payload = { email: user.email, role: user.role }; // Si no hay error el payload se crea con el user recien creado recibido en el callback
            const token = jwt.sign(payload, adminConfig.authJwtSecret, { // Firma de json web tokens
                expiresIn: '15m'
            });
            
            return res.status(200).json({ token: token });
        });
    })(req, res, next);
});

router.post('/sign-up', validationHandler(createUserSchema), async (req, res, next) => {
    const { body: user } = req;

    try {
        const createUserId = await userService.createUser({ user });
        
        res.status(201).json({
            data: createUserId,
            message: 'User created succesfully'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;