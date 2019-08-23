const MongoLib = require('../lib/mongo');

class ProductorService{    
    constructor(){
        this.collection = 'productors';
        this.mongodb = new MongoLib();
    }
}

module.exports = ProductorService;