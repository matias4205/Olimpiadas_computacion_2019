const MongoLib = require('../lib/mongo');

class ReadingsService{    
    constructor(){
        this.collection = 'readings';
        this.mongodb = new MongoLib();
    }

    async getReadings({ productorId }){
        const readings = await this.mongodb.getAll(this.collection, { productorId });
        return readings || [];
    }

    async createReading({ reading }){
        const createdReadingId = await this.mongodb.create(this.collection, reading);
        return createdReadingId;
    }
}

module.exports = ReadingsService;