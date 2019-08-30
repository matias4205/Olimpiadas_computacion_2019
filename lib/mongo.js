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

    update(collection, id, data, customId = false){
        return this.connect().then((db) => {
            return db.collection(collection).updateOne({ _id: customId ? id : ObjectId(id) }, { $set: data }, { upsert: true });
        })
        .then((result) => result.upsertedId || id);
    }

    updateArrayPush(collection, query, data){
        return this.connect().then((db) => {
            return db.collection(collection).updateOne({ query }, { $push: data }, { upsert: true });
        })
        .then((result) => result.upsertedId || query._id);
    }
    
    updateArraySet(collection, query, data){
        return this.connect().then((db) => {
            return db.collection(collection).updateOne({ query }, { $set: data }, { upsert: true });
        })
        .then((result) => result.upsertedId || query._id);
    }

    delete(collection, id){
        return this.connect().then((db) => {
            return db.collection(collection).deleteOne( { _id: ObjectId(id) })
        })
        .then(() => id);
    }
}

module.exports = MongoLib;