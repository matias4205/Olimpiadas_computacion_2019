require('dotenv').config();

const srvConfig = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 8000,
  apiUrl: process.env.API_URL
};

module.exports = { srvConfig };
