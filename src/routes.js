//arquivo de criação de rotas e requisições
const express = require('express');

const PessoaController = require('./controllers/PessoaController');
const EnderecoController = require('./controllers/EnderecoController');

const routes = express.Router();

routes.get('/pessoa', PessoaController.index);
routes.post('/pessoa', PessoaController.store);

routes.post('pessoa/:pessoa_id/endereco', EnderecoController.store);

module.exports = routes;