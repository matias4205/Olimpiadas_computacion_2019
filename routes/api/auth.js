const router = require('express').Router();
const passport = require('passport');
const boom = require('boom');
const jwt = require('jsonwebtoken');

const { adminConfig } = require('../../config');
const { signUpSchema } = require('../../utils/schemas/auth');
const validationHandler = require('../../utils/middlewares/validationHandler');
const UserService = require('../../services/user');
const ProductorService = require('../../services/productor');

const userService = new UserService();
const productorService = new ProductorService();

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

router.post('/sign-up', validationHandler(signUpSchema), async (req, res, next) => {
    const { user, productor } = req.body;

    try {
        const createdProductorId = await productorService.createProductor({ productor });
        const createUserId = await userService.createUser({ user: { ...user, productorId: createdProductorId } });
        
        res.status(201).json({
            data: {
                createUserId,
                createdProductorId
            },
            message: 'User created succesfully'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;