const sequelize = require('sequelize');

const db = new sequelize.Sequelize('railway', 'root', '5-hd4f-EG22DFe15G43H12GfC-A4De4F', {
    host: 'viaduct.proxy.rlwy.net',
    dialect: 'mysql',
    logging: false,
    port: 22635
})

module.exports = db