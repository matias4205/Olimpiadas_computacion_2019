const router = require('express').Router();
const passport = require('passport');

const { createSectionSchema, updateSectionSchema, createUnitSchema, updateUnitSchema, sectionIdSchema, deleteUnitSchema } = require('../../utils/schemas/section');
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
    const { productorId } = req.user;

    try {
        const updatedSectionId = await sectionService.createUnit({ productorId, sectionId, unit });
        
        res.status(200).json({
            data: updatedSectionId,
            message: 'Unit created succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.put('/unit', passport.authenticate('jwt', { session: false }), validationHandler(updateUnitSchema), async (req, res, next) => {
    const { sectionId, unit, unit: { _id: unitId } } = req.body;
    const { productorId } = req.user

    try {
        const updatedSectionId = await sectionService.updateUnit({ productorId, sectionId, unitId, unit });
        
        res.status(200).json({
            data: updatedSectionId,
            message: 'Unit updated succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:sectionId', passport.authenticate('jwt', { session: false }), validationHandler({ sectionId: sectionIdSchema }, 'params'), validationHandler(updateSectionSchema), async (req, res, next) => {
    const { productorId } = req.user;
    const { sectionId } = req.params;
    const { body: section } = req;

    try {
        const updatedSectionId = await sectionService.updateSection({ productorId, sectionId, section });
        
        res.status(200).json({
            data: updatedSectionId,
            message: 'Section updated succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/unit', passport.authenticate('jwt', { session: false }), validationHandler(deleteUnitSchema), async (req, res, next) => {
    const { sectionId, unitId } = req.body;
    const { productorId } = req.user;

    try {
        const deletedUnitId = await sectionService.deleteUnit({ productorId, sectionId, unitId });
        
        res.status(200).json({
            data: deletedUnitId,
            message: 'Unit updated succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/:sectionId', passport.authenticate('jwt', { session: false }), validationHandler({ sectionId: sectionIdSchema }, 'params'), async (req, res, next) => {
    const { sectionId } = req.params;
    const { productorId } = req.user;

    try {
        const deletedSectionId = await sectionService.deleteSection({ productorId, sectionId });
        
        res.status(200).json({
            data: deletedSectionId,
            message: 'Section deleted succesfuly'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;