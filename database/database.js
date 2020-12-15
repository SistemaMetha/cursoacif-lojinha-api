const Sequelize = require('sequelize'); 
//maiusculo por convenção por ser um objeto

const sequelize = new Sequelize(
    process.env.DATABASE_NAME || 'BancoTeste', //banco
    process.env.DATABASE_USER || 'postgres', //user
    process.env.DATABASE_PASS || '123456', //senha
    {
        host: process.env.DATABASE_HOST || 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false, 
        operatorsAliases: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

module.exports = sequelize;