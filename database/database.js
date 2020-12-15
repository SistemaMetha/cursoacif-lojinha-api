const Sequelize = require('sequelize'); 
//maiusculo por convenção por ser um objeto

const sequelize = new Sequelize(
    'BancoTeste', //banco
    'postgres', //user
    '123456', //senha
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false, 
        operatorsAliases: false
    }
);

module.exports = sequelize;