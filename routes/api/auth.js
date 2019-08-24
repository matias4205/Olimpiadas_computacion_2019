const router = require('express').Router();
const passport = require('passport');
const boom = require('boom');
const jwt = require('jsonwebtoken');

const { adminConfig } = require('../../config');
const { registerUserSchema } = require('../../utils/schemas/auth');
const validation = require('../../utils/middlewares/validationHandler');

//Basic strategy
require('../../utils/strategies/jwt');

router.post('/login', (req, res, next) => {
    passport.authenticate('basic', (err, user) => {
        if (err || !user){
            next(boom.unauthorized());
        }

        req.logIn(user, { session: false }, (error) => { //Inicia sesion con el usuario dado, si hay error lo reporta sin el boom
            if (error) {
                next(error);
            }
            debugger
            const payload = { email: user.email, role: user.role }; // Si no hay error el payload se crea con el user recien creado recibido en el callback
            const token = jwt.sign(payload, adminConfig.authJwtSecret, { // Firma de json web tokens
                expiresIn: '15m'
            });
            
            return res.status(200).json({ access_token: token });
        });
    })(req, res, next);
});

router.post('/register', passport.authenticate('jwt', { session: false }), validation(registerUserSchema), (req, res, next) => {

});

module.exports = router;