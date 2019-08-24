const bycrypt = require('bcryptjs');
const chalk = require('chalk');
const MongoLib = require('../lib/mongo');

const config = {
    authAdminEmail: "matiasperezpc@hotmail.com",
    authAdminPassword: "xmmatuxm1234",
    role: "admin",
    firstName: "Matias",
    lastName: "Perez"
}

function buildAdminUser(password){
    return {
        password,
        email: config.authAdminEmail,
        role: "admin",
        firstName: "Matias",
        lastName: "Perez"
    }
}

async function hasAdminUser(mongoDB) {
    const adminUser = await mongoDB.getAll('users', {
        email: config.authAdminEmail
    });

    return adminUser && adminUser.length;
}

async function createAdminUser(mongoDB) {
    const hashedPassword = await bycrypt.hash(config.authAdminPassword, 10);
    const userId = await mongoDB.create('users', buildAdminUser(hashedPassword));
    
    return userId;
}

async function seedAdmin(){
    try {
        const mongoDB = new MongoLib();
        
        if(await hasAdminUser(mongoDB)) {
            console.log(chalk.yellow('Admin user already exists'));
            return process.exit(1);
        }
        
        const adminUserId = await createAdminUser(mongoDB);
        console.log(chalk.green('Admin user created with id:'), adminUserId);
        return process.exit(0);
    } catch(error){
        console.log(chalk.red(error));
        process.exit(1);
    }
}

seedAdmin();