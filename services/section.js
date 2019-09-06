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

    async createUnit({ productorId, sectionName, unit }){
        const createdUnitId = await this.mongodb.update(this.collection, { sectionName, productorId }, { $push: { units: unit }});
        return createdUnitId;
    }

    async updateUnit({ productorId, sectionName, unitName, unit }){
        const updatedUnitId = await this.mongodb.update(this.collection, { sectionName, productorId, "units.unitName": unitName }, { $set: {"units.$": unit} }, { upsert: false });
        return updatedUnitId;
    }

    async updateSection({ productorId, sectionName, section }){
        const updatedSection = await this.mongodb.update(this.collection, { sectionName, productorId }, { $set: section });
        return updatedSection;
    }

    async deleteSection({ productorId, sectionName }){
        const deletedSection = await this.mongodb.delete(this.collection, { sectionName, productorId });
        return deletedSection;
    }

    async deleteUnit({ productorId, sectionName, unitName }){
        const deleteUnitId = await this.mongodb.update(this.collection, { sectionName, productorId }, { $pull: { units: { unitName: unitName } }  } );
        return deleteUnitId;
    }

}

module.exports = SectionService;