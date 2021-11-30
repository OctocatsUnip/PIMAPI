//arquivo de criação de rotas e requisições
const express = require('express');

const PessoaController = require('./controllers/PessoaController');
const EnderecoController = require('./controllers/EnderecoController');
const QuartosController = require('./controllers/QuartosController');

const routes = express.Router();

routes.get('/pessoa', PessoaController.index);
routes.post('/pessoa', PessoaController.store);
routes.get('/pessoa/:cpf', PessoaController.findByCpf);

routes.get('/pessoa/endereco/:pessoa_id', EnderecoController.index);
routes.post('/pessoa/endereco/:pessoa_id', EnderecoController.store);

routes.get('/quarto', QuartosController.index);
routes.post('/quarto', QuartosController.store);
routes.post('/quarto/:quantia_banheiros', QuartosController.findByBanheiro);


module.exports = routes;