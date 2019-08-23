const MongoLib = require('../lib/mongo');

class SectionService{    
    constructor(){
        this.collection = 'section';
        this.mongodb = new MongoLib();
    }
}

module.exports = SectionService;