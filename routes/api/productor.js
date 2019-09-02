const router = require('express').Router();
const passport = require('passport');

const validation = require('../../utils/middlewares/validationHandler');
const { createProductorSchema } = require('../../utils/schemas/productor');
const ProdutorService = require('../../services/productor');

//Services
const productorService = new ProdutorService();

//Stragegies
require('../../utils/strategies/jwt');

//Get a data of the user productor
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

//Create a productor
router.post('/', validation(createProductorSchema), async (req, res, next) => {
    const { body: productor } = req;

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