const MongoLib = require('../lib/mongo');

class UserService{    
    constructor(){
        this.collection = 'users';
        this.mongodb = new MongoLib();
    }

    async getUsers(){
        const query = {  };
        const users =  await this.mongodb.getAll(this.collection, query);
        return users || [];
    }
    
    async getUser({ userId }){
        const user = await this.mongodb.get(this.collection, userId);
        return user || {};
    }
    
    async createUser({ user }){
        const createdUserId = await this.mongodb.create(this.collection, user);
        return createdUserId;
    }

    async updateUser({ userId, user }){
        const updatedUser = await this.mongodb.update(this.collection, userId, user);
        return updatedUser;
    }

    async deleteUser({ userId }){
        const deletedProduct = await this.mongodb.delete(this.collection, userId);
        return deletedProduct;
    }
}

module.exports = UserService;