const router = require('express').Router();
const passport = require('passport');

const validation = require('../../utils/middlewares/validationHandler');
const { registerProductorSchema } = require('../../utils/schemas/productor');
const { mongoIdSchema } = require('../../utils/schemas/general')
const UserService = require('../../services/user');
const ProdutorService = require('../../services/productor');

//Services
const userService = new UserService();
const productorService = new ProdutorService();

//Stragegies
require('../../utils/strategies/jwt');

//Get a data of a certain productor
router.get('/:productorId', async (req, res, next) => {
    const { productorId } = req.params;

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
router.post('/', validation(registerProductorSchema), async (req, res, next) => {
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

//Get all users of a sertain productor
router.get('/:productorId/users', validation({ productorId: mongoIdSchema}, 'params'), async (req, res, next) => {
    const { productorId } = req.params;

    try {
        const productor = await userService.getUsers({ productorId });

        res.status(200).json({
            data: productor,
            message: 'Users retrived succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;