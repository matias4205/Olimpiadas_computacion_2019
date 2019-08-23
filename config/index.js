require('dotenv').config()

const srvConfig = {
    DEV: process.env.NODE_ENV !== 'production',
    PORT: process.env.PORT
}

module.exports = {
    srvConfig,

}