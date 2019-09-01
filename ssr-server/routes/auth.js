const router = require('express').Router();
const passport = require('passport');
const axios = require('axios');

const { srvConfig } = require('../config');

require('../utils/strategies/basic')

router.post('/sign-in', (req, res, next) => {
    passport.authenticate("basic", function(error, data) {
        try {
          if (error || !data) {
            next(boom.unauthorized());
          }
    
          req.login(data, { session: false }, async function(error) {
            if (error) {
              next(error);
            }
    
            const { token, user } = data;

            res.cookie("token", token, {
              httpOnly: !srvConfig.dev,
              secure: !srvConfig.dev
            });
    
            res.status(200).json(user);
          });
        } catch (error) {
          next(error);
        }
    })(req, res, next);
});

router.post('/sign-up', async (req, res, next) => {
  const { body: userAndProductor } = req;

  try {
    const { data, status } = await axios({
      url: `${srvConfig.apiUrl}/api/auth/sign-up`,
      method: "post",
      data: userAndProductor
    });

    res.status(status).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;