require('dotenv').config()

const srvConfig = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT
}

const dbConfig = {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
}

const adminConfig = {
    authJwtSecret: "ED489618C994149ADD8186F61B7BC9DBA54230B6012A29F20C69212757A52C00"
}

module.exports = {
    srvConfig,
    dbConfig,
    adminConfig
}