const router = require('express').Router();
const passport = require('passport');

const validation = require('../../utils/middlewares/validationHandler'); // Validator handler to use our schemas
const { createProductorSchema } = require('../../utils/schemas/productor'); // Schemas to test the received data
const ProdutorService = require('../../services/productor'); // Our productor service

//Services
const productorService = new ProdutorService();

//Stragegies
require('../../utils/strategies/jwt');

//Get a data of the user's productor
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { productorId } = req.user;

    try {
        const productor = await productorService.getProductor({ productorId });

        res.status(200).json({
            data: productor,
            message: 'Productor retrived succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

//Create a productor (Unutilized)
router.post('/', validation(createProductorSchema), async (req, res, next) => {
    const { body: productor } = req; //Getting the productor data

    try{
        const createdProductorId = await productorService.createProductor({ productor });
        
        res.status(201).json({
            data: createdProductorId,
            message: 'Productor created succesfuly'
        })
    } catch(err){
        next(err);
    }
});

module.exports = router;