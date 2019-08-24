const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('boom');
const { adminConfig } = require('../../config');
const MongoLib = require('../../lib/mongo');

passport.use(
    new Strategy({
        secretOrKey: adminConfig.authJwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    
    async (tokenPayload, done) => {
        const mongoDB = new MongoLib();

        try{
            const [user] = await mongoDB.getAll('users', { email: tokenPayload.email });
            
            if(!user){
                return done(boom.unauthorized(), false);
            }

            return done(false, user);
        }catch(err){
            return done(err);
        }
    })
);