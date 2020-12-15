const Sequelize = require('sequelize');
const db = require('../../database/database');

const ClienteTipo = db.define(
    'clientetipo',
    {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING, //quando precisa escalar usa procedure, aqui como não é para escalar usamos Sequelize
            required: true
        }
    },
    {
        tableName: 'clientetipo',
        schema: 'public', //para dividir o banco em partes, para ficar mais semântico
        freezeTableName: false,
        timestamps: false
    }
);

module.exports = ClienteTipo;
