const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('boom');
const axios = require('axios');

const { srvConfig } = require('../../config');

passport.use(new BasicStrategy(async (email, password, done) => {
    try {
        const { data, status } = await axios({
            url: `${srvConfig.apiUrl}/api/auth/sign-in`,
            method: 'post',
            auth: {
                password,
                username: email
            }
        });

        if(!data || status != 200){
            done(boom.unauthorized(), false);
        }

        return done(null, data);
    } catch (err) {
        done(err, false)
    }
}));