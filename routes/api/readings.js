const router = require('express').Router();
const passport = require('passport');

const ReadingsService = require('../../services/readings');

const readingsService = new ReadingsService();

//JWT AUTH
require('../../utils/strategies/jwt');

//Get section's readings endpoint
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { productorId } = req.user; //We get the user's productoId

    try {
        const readings = await readingsService.getReadings({ productorId }); //We get all the readings from a certain productor
        
        res.status(200).json({ //We answer the client sending a succesfull status and all our readins
            data: readings,
            message: "Readings retrived succesfully"
        });
    } catch (err) {
        next(err)
    }
});

router.get('/last', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { productorId } = req.user; //We get the user's productoId

    try {
        const readings = await readingsService.getLastReadings({ productorId }); //We get all the readings from a certain productor
        
        res.status(200).json({ //We answer the client sending a succesfull status and all our readins
            data: readings,
            message: "Readings retrived succesfully"
        });
    } catch (err) {
        next(err)
    }
});

module.exports = router;