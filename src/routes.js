//arquivo de criação de rotas e requisições
const express = require('express');

const PessoaController = require('./controllers/PessoaController');
const EnderecoController = require('./controllers/EnderecoController');
const QuartosController = require('./controllers/QuartosController');

const routes = express.Router();

routes.get('/pessoa', PessoaController.index);
routes.post('/pessoa', PessoaController.store);

routes.get('/pessoa/:pessoa_id/endereco', EnderecoController.index);
routes.post('/pessoa/:pessoa_id/endereco', EnderecoController.store);

routes.get('/quarto', QuartosController.index);
routes.post('/quarto', QuartosController.store);

module.exports = routes;