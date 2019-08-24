const MongoLib = require('../lib/mongo');

class SectionService{    
    constructor(){
        this.collection = 'sections';
        this.mongodb = new MongoLib();
    }
}

module.exports = SectionService;