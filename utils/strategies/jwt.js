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

    //TODO RECORDAR BORRAR ESTO
<<<<<<< HEAD
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGlhc3BlcmV6cGNAaG90bWFpbC5jb20iLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTU3MDA0OTU3MywiZXhwIjoxNTcwMDUzMTEzfQ.7rlu5v8T2G60C5EaTi9tfTl_ZDCX7uvpJH3A2SsO2ag';
=======
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGlhc3BlcmV6cGNAaG90bWFpbC5jb20iLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTU2OTk0MzEwNiwiZXhwIjoxNTY5OTQ2NjQ2fQ.wF_Q7BHW7dxaCfFnzA81vrqSbzvt4VmY2729Vewd4aI';
>>>>>>> c36bf2d0574896caaa42b847e461c996fde20412

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