require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

module.exports = {
  [env]: {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrationStorageTableName: '_migrations',
  },
};
