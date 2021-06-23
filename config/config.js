const dotenv = require('dotenv')
const path = require('path')

if (!process.env.MYSQL_HOSTNAME) {
  dotenv.config({
    path: path.join(__dirname, '..', 'env')
  })
}

module.exports = {
  host: process.env.MYSQL_HOSTNAME,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DBNAME,
  dialect: 'mysql'
}