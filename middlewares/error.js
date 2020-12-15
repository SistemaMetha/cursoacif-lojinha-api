module.exports =(err, req, res, next) => { //um passo depois do not-found
    res.status(500).json({
        error: 'Ocorreu um erro não tratado ',
        message: err.message
    });

    next();

}
