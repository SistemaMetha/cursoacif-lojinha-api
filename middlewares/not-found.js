module.exports =(req, res, next) => { //vou expor esse arquivo para alguém usar, o next é para ir para o próximo middlewares
    res.status(404).json({
        error: 'Caminho não encontrado'
    });

    next();

}
