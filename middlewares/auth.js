const jwt = require('jsonwebtoken');

//vai verificar se o token é válido ou não
module.exports = (req, res, next) => {
    const token = req.headers['teste'];

    if(!token) return res.status(401).json({ //se não tem token, já retorna 401
        message: 'Usuário não autenticado'
    });

    jwt.verify(token, 'segredo', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Usuário não autenticado"
            });
        }

        req.userId = decoded.id; //a variável req é compartilhada na aplicação inteira
        next();

    })

}