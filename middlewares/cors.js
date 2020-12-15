module.exports = (req, res, next) => { //para deixar pegar em outro domímio
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);

    if (req.method === 'OPTIONS') return res.status(204).end(); //posso fazer uma requisição? se for status 200 pode fazer requisição
                                                                //estamos liberando a request do tipo options
    next();
};