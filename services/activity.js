const MongoLib = require('../lib/mongo');

class ActivityService{    
    constructor(){
        this.collection = 'activity';
        this.mongodb = new MongoLib();
    }

    async getActivityByUser({ userId }){
        const activity = await this.mongodb.getAll(this.collection, { userId });
        return activity || [];
    }

    async getActivityByProductor({ productorId }){
        const activity = await this.mongodb.getAll(this.collection, { productorId });
        return activity || [];
    }

    async createActivity({ activity }){
        const createdActivityId = await this.mongodb.create(this.collection, activity);
        return createdActivityId;
    }
}

module.exports = ActivityService;