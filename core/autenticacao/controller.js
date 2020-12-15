const jwt = require('jsonwebtoken');

module.exports = {
    logar
};

function logar(req, res) {
    if(req.body.login == 'admin' && req.body.senha == '123'){

        const token = jwt.sign({id: 1}, 'segredo', {
            expiresIn: 3000
        }) //segunda palavra é a string para criptografia
       
        return res.status(200).json({ //se a resposta for 200 - ok, responde o token
            token: token

        })
    }

    return res.status(401).json({
        message: 'Login ou senha incorretos'
    })

}