process.env.TZ = 'America/Sao_Paulo';

const express = require('express');
const app = express();

const notFound = require('./middlewares/not-found');
const error = require('./middlewares/error');
const cors = require('./middlewares/cors');
const auth = require('./middlewares/auth');

//rotas
const autenticacaoRoute = require('./core/autenticacao/route');
const clienteTipoRoute = require('./core/clientetipo/route');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const helmet = require('helmet'); 
//tira os seus heads para melhor segurança do código da API


app.use(helmet()); //instancia para gerar uma função
app.use(cors); //só vai ser utilizado quando bater nele

autenticacaoRoute(app); //registrar na aplicação todas as rotas de autenticação, sem verificar o token

app.use(auth);
clienteTipoRoute(app);

app.get('/', (req, res) => {
    res.status(200).json({
        ok: true
    })
})

app.get('/erro', (req, res) => {

    throw new Error("deu meleca..."); //rhrow -> é o exception
    res.status(200).json({
        ok: true
    })
})

app.use(notFound);  //tem que estar no penúltimo lugar, pois se não deu nenhuma resposta, dá o caminho não encontrado
app.use(error); //tem que estar no último lugar

const port = process.env.PORT || 4000; //pegar a porta ou se não tiver a porta 4000
app.listen(port, () => {
    console.log('API rodando na porta ' + port);
})