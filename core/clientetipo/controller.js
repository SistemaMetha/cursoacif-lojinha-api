const model = require('./model');

module.exports = {
    buscarTodos
};


async function buscarTodos(req, res) {
    try {
        let result = await model.findAll({
            raw: true, //resultados em uma lista
            atrributes: ['id', 'nome']
        });

        res.status(200).json({
            content: result
        });
    } catch (error) {
        res.status(500).json({
            message: 'Deu erro',
            error: error
        })
    }

};
