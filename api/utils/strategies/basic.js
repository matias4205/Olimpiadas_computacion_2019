const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('boom');
const bcrypt = require('bcryptjs');

const MongoLib = require('../../lib/mongo');


passport.use(
    new BasicStrategy({
        usernameField: 'email'
    }, async (email, password, done)=>{
        const mongoDB = new MongoLib();

        try{
            const [user] = await mongoDB.getAll('users', { email });
            
            if(!user) {
                return done(boom.unauthorized(), false);
            }

            if(!await bcrypt.compare(password, user.password)){
                return done(boom.unauthorized(), false);
            }

            return done(null, user);
        }catch(err){
            return done(err);
        }
    })
);