const dotenv = require('dotenv')
const path = require('path')

if (!process.env.MYSQL_HOST) {
  dotenv.config({
    path: path.join(__dirname, '..', '.env')
  })
}

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  dialect: 'postgres'
}