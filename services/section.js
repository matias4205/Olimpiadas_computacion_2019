const MongoLib = require('../lib/mongo');

class SectionService{
    constructor(){
        this.collection = 'sections';
        this.mongodb = new MongoLib();
    }

    async getUser({ sectionId }){
        const section = await this.mongodb.get(this.collection, sectionId);
        return section || {};
    }
    
    /* 
    async getUsers({ productorId }){
        const query = { productorId };
        const users =  await this.mongodb.getAll(this.collection, query);
        return users || [];
    }
    */

    async createUser({ section }){
        const createdSectionId = await this.mongodb.create(this.collection, section);
        return createdSectionId;
    }

    async updateUser({ sectionId, section }){
        const updatedSection = await this.mongodb.update(this.collection, sectionId, section);
        return updatedSection;
    }

    async deleteUser({ sectionId }){
        const deletedSection = await this.mongodb.delete(this.collection, sectionId);
        return deletedSection;
    }
}

module.exports = SectionService;