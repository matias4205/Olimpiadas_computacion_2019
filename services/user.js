const MongoLib = require('../lib/mongo');

class SectionService{    
    constructor(){
        this.collection = 'users';
        this.mongodb = new MongoLib();
    }
}

module.exports = SectionService;