const MongoLib = require('../lib/mongo');
const bcrypt = require('bcryptjs');

class UserService{
    constructor(){
        this.collection = 'users';
        this.mongodb = new MongoLib();
    }

    async getUser({ userId }){
        const user = await this.mongodb.get(this.collection, userId);
        return user || {};
    }
    
    async getUsers({ productorId }){
        const query = { productorId };
        const users =  await this.mongodb.getAll(this.collection, query);
        return users || [];
    }
    
    async createUser({ user }){
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const createdUserId = await this.mongodb.create(this.collection, {...user, password: hashedPassword});
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