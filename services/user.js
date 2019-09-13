const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');
const md5 = require('md5');

const MongoLib = require('../lib/mongo');

const { userConfig: { administratorUserDefaultScopes, operatorUserDefaultScopes } } = require('../config');

class UserService{
    constructor(){
        this.collection = 'users';
        this.mongodb = new MongoLib();
    }

    async getUser({ userId }){
        const user = await this.mongodb.get(this.collection, userId);
        return user || {};
    }
    
    async getUsersByProductor({ productorId }){
        const query = { productorId };
        const users =  await this.mongodb.getAll(this.collection, query);
        return users || [];
    }
    
    async getUsersByEmail({ email }){
        const query = { email };
        const users =  await this.mongodb.getAll(this.collection, query);
        return users || [];
    }

    async createUser({ user }){
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const scopes = user.role === 'administrator' ? administratorUserDefaultScopes : operatorUserDefaultScopes;
        const profilePhoto = `http://www.gravatar.com/avatar/${md5(user.email)}?d=identicon&s=120`;
        const createdUserId = await this.mongodb.create(this.collection, { ...user, password: hashedPassword, scopes, profilePhoto });
        return createdUserId;
    }

    async updateUser({ userId, user }){
        const updatedUser = await this.mongodb.update(this.collection, { _id: ObjectId(userId) }, { $set: user }, { upsert: false });
        return updatedUser;
    }

    async deleteUser({ userId }){
        const deletedProduct = await this.mongodb.delete(this.collection, { _id: ObjectId(userId) });
        return deletedProduct;
    }
}

module.exports = UserService;