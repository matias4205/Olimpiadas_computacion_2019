require('dotenv').config()

const srvConfig = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT
}

const userConfig = {
    administratorUserDefaultScopes: [
        'read:sections',
        'update:sections',
        'create:sections',
        'delete:sections',
        'read:data',
        'delete:data',
        'read:users',
        'update:users',
        'create:users',
        'delete:users'
    ],
    operatorUserDefaultScopes: [
        'read:sections',
        'update:sections',
        'create:sections',
        'read:data',
        'delete:data',
    ]
}

const dbConfig = {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
}

const adminConfig = {
    authJwtSecret: process.env.AUTH_JWT_SECRET
}

module.exports = {
    srvConfig,
    dbConfig,
    adminConfig,
    userConfig
}