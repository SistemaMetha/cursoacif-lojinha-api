const controller = require('./controller');

module.exports = (app) => {
    app.get('/tipos-de-clientes', controller.buscarTodos);
}