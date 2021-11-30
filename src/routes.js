//arquivo de criação de rotas e requisições
const express = require('express');

const PessoasController = require('./controllers/PessoasController');
const TelefonesController = require('./controllers/TelefonesController');
const EnderecosController = require('./controllers/EnderecosController');
const StatusController = require('./controllers/StatusController');
const QuartosController = require('./controllers/QuartosController');

const routes = express.Router();

routes.get('/pessoas', PessoasController.index);
routes.post('/pessoas', PessoasController.store);
routes.get('/pessoas/:cpf', PessoasController.findByCpf);

routes.post('/pessoas/telefones/:pessoa_id', TelefonesController.store);
routes.get('/pessoas/telefones/:pessoa_id', TelefonesController.index);

routes.get('/pessoas/endereco/:pessoa_id', EnderecosController.index);
routes.post('/pessoas/endereco/:pessoa_id', EnderecosController.store);

routes.get('/status', StatusController.index);
routes.get('/status/:nome_status', StatusController.findByName);
routes.post('/status', StatusController.store);

routes.get('/quartos', QuartosController.index);
routes.post('/quartos', QuartosController.store);
routes.post('/quartos/:nome_quarto', QuartosController.updateStatus);
// routes.post('/quarto/:quantia_banheiros', QuartosController.findByBanheiro);


module.exports = routes;