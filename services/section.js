const MongoLib = require('../lib/mongo');

class SectionService{
    constructor(){
        this.collection = 'sections';
        this.mongodb = new MongoLib();
    }

    async getSection({ sectionId }){
        const section = await this.mongodb.get(this.collection, sectionId);
        return section || {};
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

    async createUnit({ sectionId, unit }){
        const createdUnitId = await this.mongodb.updateArrayPush(this.collection, { _id:  sectionId }, unit);
        return createdUnitId;
    }

    async updateUnit({ sectionId, unitId, unit }){
        const query = {  }
        const updatedUnitId = await this.mongodb.updateArraySet(this.collection, {_id: sectionId, "units._id": unitId}, unit);
        return updatedUnitId;
    }

    async updateSection({ sectionId, section }){
        const updatedSection = await this.mongodb.update(this.collection, sectionId, section);
        return updatedSection;
    }

    async deleteSection({ sectionId }){
        const deletedSection = await this.mongodb.delete(this.collection, sectionId);
        return deletedSection;
    }
}

module.exports = SectionService;