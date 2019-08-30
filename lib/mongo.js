const { MongoClient, ObjectId } = require('mongodb');
const { dbConfig } = require('../config');

const USER = encodeURIComponent(dbConfig.dbUser);
const PASSWORD = encodeURIComponent(dbConfig.dbPassword);
const DB_NAME = dbConfig.dbName;

const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${dbConfig.dbHost}:${dbConfig.dbPort}/?authSource=${DB_NAME}`;

class MongoLib {
    constructor(){
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.dbName = DB_NAME;
    }

    connect(){
        return new Promise((resolve, reject) => {
            this.client.connect(err => {
                if(err) reject(err);

                console.log('Succesfully connected to MongoDB!');
                resolve(this.client.db(this.dbName));
            })
        })
    }

    getAll(collection, query){
        return this.connect().then((db)=>{
            return db.collection(collection).find(query).toArray();
        });
    }

    get(collection, id){
        return this.connect().then((db)=>{
            return db.collection(collection).findOne({ _id: ObjectId(id) });
        });
    }

    create(collection, data){
        return this.connect().then((db) => {
            return db.collection(collection).insertOne(data);
        })
        .then((result) => result.insertedId);
    }

    update(collection, query, dataQuery, opt={ upsert: true }){
        return this.connect().then((db) => {
            return db.collection(collection).updateOne(query, dataQuery, opt);
        })
        .then((result) => result.upsertedId || query._id);
    }

    aggregate(collection, query){
        return this.connect().then((db) => {
            return db.collection(collection).aggregate(query).toArray();
        })
        .then((result) => result);
    }

    delete(collection, id){
        return this.connect().then((db) => {
            return db.collection(collection).deleteOne( { _id: ObjectId(id) })
        })
        .then(() => id);
    }
}

module.exports = MongoLib;