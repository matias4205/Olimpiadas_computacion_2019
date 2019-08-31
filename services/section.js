const { ObjectId } = require('mongodb');

const MongoLib = require('../lib/mongo');

class SectionService{
    constructor(){
        this.collection = 'sections';
        this.mongodb = new MongoLib();
    }

    async getSections({ productorId }){
        const query = { productorId };
        const sections =  await this.mongodb.getAll(this.collection, query);
        return sections || [];
    }

    async createSection({ section }){
        const createdSectionId = await this.mongodb.create(this.collection, section);
        return createdSectionId;
    }

    async createUnit({ productorId, sectionId, unit }){
        const createdUnitId = await this.mongodb.update(this.collection, { _id: sectionId, productorId }, { $push: { units: unit }});
        return createdUnitId;
    }

    async updateUnit({ productorId, sectionId, unitId, unit }){
        const updatedUnitId = await this.mongodb.update(this.collection, { "_id": sectionId, productorId, "units._id": unitId }, { $set: {"units.$": unit} }, { upsert: false });
        return updatedUnitId;
    }

    async updateSection({ productorId, sectionId, section }){
        const updatedSection = await this.mongodb.update(this.collection, { "_id": sectionId, productorId }, { $set: section });
        return updatedSection;
    }

    async deleteSection({ productorId, sectionId }){
        const deletedSection = await this.mongodb.delete(this.collection, { _id: sectionId, productorId });
        return deletedSection;
    }

    async deleteUnit({ productorId, sectionId, unitId }){
        const deleteUnitId = await this.mongodb.update(this.collection, { "_id": sectionId, productorId }, { $pull: { units: { _id: unitId } }  } );
        return deleteUnitId;
    }

}

module.exports = SectionService;