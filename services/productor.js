const MongoLib = require('../lib/mongo');

class ProductorService{    
    constructor(){
        this.collection = 'productors';
        this.mongodb = new MongoLib();
    }

    async getProductor({ productorId }){
        const productor = await this.mongodb.get(this.collection, productorId);
        return productor || {};
    }

    async createProductor({ productor }){
        const createdProductorId = await this.mongodb.create(this.collection, productor);
        return createdProductorId;
    }
}

module.exports = ProductorService;