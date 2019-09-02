const MongoLib = require('../lib/mongo');

const readingsJoinQueryBuilder = require('../utils/readingsJoinQueryBuilder');

class ReadingsService{    
    constructor(){
        this.collection = 'readings';
        this.mongodb = new MongoLib();
    }

    async getReadings({ productorId }){
        const query = readingsJoinQueryBuilder(productorId);
        const readings = await this.mongodb.aggregate('sections', query);
        return readings || [];
    }

    async createReading({ reading }){
        const createdReadingId = await this.mongodb.create(this.collection, reading);
        return createdReadingId;
    }
}

module.exports = ReadingsService;