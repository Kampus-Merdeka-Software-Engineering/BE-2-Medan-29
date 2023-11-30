const sequelize = require('sequelize')

const connection = new sequelize.Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    port: process.env.DB_PORT
})

module.exports = connection