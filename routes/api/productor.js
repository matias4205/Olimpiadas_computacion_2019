const router = require('express').Router();
const passport = require('passport');

const validation = require('../../utils/middlewares/validationHandler');
const { createProductorSchema } = require('../../utils/schemas/productor');
const { createSectionSchema } = require('../../utils/schemas/section')
const { mongoIdSchema } = require('../../utils/schemas/general')
const UserService = require('../../services/user');
const ProdutorService = require('../../services/productor');
const SectionService = require('../../services/section');

//Services
const userService = new UserService();
const productorService = new ProdutorService();
const sectionService = new SectionService();

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

//Get all users of a sertain productor
router.get('/:productorId/users', validation({ productorId: mongoIdSchema}, 'params'), async (req, res, next) => {
    const { productorId } = req.params;

    try {
        const users = await userService.getUsers({ productorId });

        res.status(200).json({
            data: users,
            message: 'Users retrived succesfuly'
        });
    } catch (err) {
        next(err);
    }
});


// SECTIONS
router.get('/:productorId/sections', validation({ productorId: mongoIdSchema }, 'params'), async (req, res, next) => {
    const { productorId } = req.params;

    try {
        const sections = await sectionService.getSections({ productorId });
        
        res.status(200).json({
            data: sections,
            message: 'Sections retrived succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.get('/:productorId/sections/:sectionId', validation({ productorId: mongoIdSchema, sectionId: mongoIdSchema}, 'params'), async (req, res, next) => {
    const { productorId, sectionId } = req.params;

    try {
        const sections = await sectionService.getSections({ productorId, sectionId });
        
        res.status(200).json({
            data: sections,
            message: 'Sections retrived succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.post('/:productorId/sections', passport.authenticate('jwt', { session: false }), validation({ productorId: mongoIdSchema }, 'params'), validation(createSectionSchema), async (req, res, next) => {
    const { productorId } = req.params;
    const { body: section } = req;
    section.productorId = productorId;

    try {
        const createdSection = await sectionService.createSection({ section });
        
        res.status(200).json({
            data: createdSection,
            message: 'Section created succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;