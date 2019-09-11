const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('boom');

const UserService = require('../../services/user')
const { adminConfig } = require('../../config');

var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies['token'];
    }
    //TODO RECORDAR BORRAR ESTO!!
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGlhc3BlcmV6cGNAaG90bWFpbC5jb20iLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTU2ODE4MTE2MSwiZXhwIjoxNTY4MTgyMDYxfQ.1rJb1jrNQfMv8pu-S9To1UvgQRKqyHtizrpbeSDWeNI'
    return token;
};

passport.use(
    new Strategy({
        secretOrKey: adminConfig.authJwtSecret,
        jwtFromRequest: cookieExtractor
    },
    
    async (tokenPayload, done) => {
        const userService = new UserService();

        try{
            const [user] = await userService.getUsersByEmail({ email: tokenPayload.email });
            
            if(!user){
                return done(boom.unauthorized(), false);
            }

            delete user.password;
            
            return done(false, user);
        }catch(err){
            return done(err);
        }
    })
);