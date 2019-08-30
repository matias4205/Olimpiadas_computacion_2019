const router = require('express').Router();
const passport = require('passport');

const { createSectionSchema, updateSectionSchema, createUnitSchema, updateUnitSchema } = require('../../utils/schemas/section');
const { mongoIdSchema } = require('../../utils/schemas/general');
const validationHandler = require('../../utils/middlewares/validationHandler');

const SectionsService = require('../../services/section');
const sectionService = new SectionsService();

//JWT Strategy
require('../../utils/strategies/jwt');

router.get('/', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { productorId } = req.user;

    try {
        const sections = await sectionService.getSections({ productorId });
        
        res.status(200).json({
            data: sections,
            message: "Sections retrived succesfully"
        })
    } catch (err) {
       
    } 
});

router.post('/', passport.authenticate('jwt', { session: false }), validationHandler(createSectionSchema), async (req, res, next) => {
    const { productorId } = req.user;
    const { body: section } = req;

    try {
        const createdSection = await sectionService.createSection({ section: {...section, productorId} });
        
        res.status(200).json({
            data: createdSection,
            message: 'Section created succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.post('/unit', passport.authenticate('jwt', { session: false }), validationHandler(createUnitSchema), async (req, res, next) => {
    const { sectionId, unit } = req.body;

    try {
        const updatedSectionId = await sectionService.createUnit({ sectionId, unit });
        
        res.status(200).json({
            data: updatedSectionId,
            message: 'Unit created succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.put('/unit', passport.authenticate('jwt', { session: false }), validationHandler(updateUnitSchema), async (req, res, next) => {
    const { sectionId, unitId, unit } = req.body;

    try {
        const updatedSectionId = await sectionService.updateUnit({ sectionId, unitId, unit });
        
        res.status(200).json({
            data: updatedSectionId,
            message: 'Unit updated succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:sectionId', passport.authenticate('jwt', { session: false }), validationHandler({ sectionId: mongoIdSchema }, 'params'), validationHandler(updateSectionSchema), async (req, res, next) => {
    const { productorId } = req.user;
    const { sectionId } = req.params;
    const { body: section } = req;

    try {
        const updatedSectionId = await sectionService.updateSection({ sectionId, section: {...section, productorId} });
        
        res.status(200).json({
            data: updatedSectionId,
            message: 'Section updated succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/:sectionId', passport.authenticate('jwt', { session: false }), validationHandler({ sectionId: mongoIdSchema }, 'params'), async (req, res, next) => {
    const { sectionId } = req.params;

    try {
        const deletedSectionId = await sectionService.deleteSection({ sectionId });
        
        res.status(200).json({
            data: deletedSectionId,
            message: 'Section deleted succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;