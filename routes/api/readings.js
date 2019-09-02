const router = require('express').Router();
const passport = require('passport');

const ReadingsService = require('../../services/readings');

const readingsService = new ReadingsService();

//JWT AUTH
require('../../utils/strategies/jwt');

router.get('/', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { productorId } = req.user;

    try {
        const readings = await readingsService.getReadings({ productorId });
        
        res.status(200).json({
            data: readings,
            message: "Readings retrived succesfully"
        });
    } catch (err) {
        next(err)
    }
});

module.exports = router;